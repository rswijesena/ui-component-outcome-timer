
import { eLoadingState, FlowComponent } from 'flow-component-model';
import * as React from 'react';
import './OutcomeTimer.css';

// declare const manywho: IManywho;
declare const manywho: any;

export default class SimpleOutcomeTimer extends FlowComponent {
    // holder for datarefresh timer
    timerId = -1;
    refreshTimerId = -1;
    timerCounter = 0;

    timeoutMS: number;
    refreshIntervalMS: number;
    outcomeName: string;
    componentToUpdate: string;
    showProgress: boolean;
    hiddenComponentID: string;

    constructor(props: any) {
        super(props);
        this.moving = this.moving.bind(this);
        this.moved = this.moved.bind(this);
        
        this.refreshIntervalMS = parseInt(this.getAttribute('refreshIntervalMilliSeconds', '1000'));
        this.timeoutMS = parseInt(this.getAttribute('timeoutMilliSeconds', '5000'));
        this.timerCounter = this.timeoutMS
        this.outcomeName = this.getAttribute('outcomeName');
        this.componentToUpdate = this.getAttribute('refreshComponentId', '');
        this.hiddenComponentID = this.getAttribute('hiddenComponentID', '');
        this.showProgress = this.getAttribute('showProgress', '').toLowerCase() === 'true';
    }

    async componentDidMount() {
        (manywho as any).eventManager.addBeforeSendListener(this.moving, this.componentId);
        (manywho as any).eventManager.addDoneListener(this.moved, this.componentId);
        await super.componentDidMount();
        this.startCounting();
    }

    async moving(xhr: XMLHttpRequest, request: any) {
        window.clearInterval(this.refreshTimerId);
        this.refreshTimerId = -1;
    }

    async moved(xhr: XMLHttpRequest, request: any) {
        if (this.timerId === -1) {
            //this.timerId = window.setInterval(this.timerHandler.bind(this), 1000);
        }
    }

    async componentWillUnmount() {
        clearInterval(this.timerId);
        this.timerId = -1;
        (manywho as any).eventManager.removeBeforeSendListener(this.componentId);
        return Promise.resolve();

    }

    startCounting() {
        this.timerCounter = 0;
        if(this.showProgress) {
            this.timerCounter=this.timeoutMS;
            this.refreshTimerId = window.setInterval(this.refreshHandler.bind(this), this.refreshIntervalMS);
        }
        this.timerId = window.setTimeout(this.timerHandler.bind(this), this.timeoutMS);
    }

    async refreshHandler() {
        this.timerCounter -= this.refreshIntervalMS;
        this.forceUpdate();
    }

    async timerHandler() {
        // switch off the refresh timer
        this.timerId = -1;
        if (this.refreshTimerId > -1) {
            window.clearInterval(this.refreshTimerId);
            this.refreshTimerId = -1;
        }
               
        try {
            const result: boolean = await this.timeOut();
            if(result) {
                this.startCounting();
            }
        } catch (e) {

        }

    }

    async timeOut(): Promise<boolean> {

        let authCode: string = '';
        if (this.outcomes[this.outcomeName]) {
            //alert(sessionStorage.getItem("boomiflow_authcode"));
            const hiddenComponent = manywho.model.getComponent(this.hiddenComponentID, this.flowKey);
            if(sessionStorage.getItem("boomiflow_authcode") != null) {
                authCode = sessionStorage.getItem("boomiflow_authcode")
            } else {
                authCode = "N/A"
            }
            const newState = { "contentValue": authCode };
            manywho.state.setComponent(this.hiddenComponentID, newState, this.flowKey, true);
            this.triggerOutcome(this.outcomeName);
            return false;
        } 
        else {
            // if we were given a component id to update
            if (this.componentToUpdate && this.componentToUpdate.length > 0) {
                // preserve this so the promise handler can get it
                // const self = this;

                // get the objectDataRequest object from the model
                const request = manywho.model.getComponent(this.componentId, this.flowKey).objectDataRequest;

                // demand the engine re-gets the model and handle the async promise result
                await manywho.engine.objectDataRequest(this.componentId, request, this.flowKey, 0 , null, null, null, null);
                const component = manywho.model.getComponent(this.componentToUpdate, this.flowKey);

                // did we get a component
                if (component) {
                    component.objectData = manywho.model.getComponent(this.componentId, this.flowKey).objectData;
                    manywho.engine.render(this.props.flowKey);
                }
            }
            return true;
        }
    }

    render() {
        let content: string = '';
        if (this.showProgress) {
            content = 'Refreshing in ' + (this.timerCounter/1000) + ' seconds';
        }

        return <div>{content}</div>;
    }
}

manywho.component.register('SimpleOutcomeTimer', SimpleOutcomeTimer);
