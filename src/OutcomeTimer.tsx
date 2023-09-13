
import { eLoadingState, FlowComponent } from 'flow-component-model';
import * as React from 'react';
import './OutcomeTimer.css';

// declare const manywho: IManywho;
declare const manywho: any;

export default class OutcomeTimer extends FlowComponent {
    // holder for datarefresh timer
    timerId = -1;
    timerCounter = 0;

    timeoutMS: number;
    refreshIntervalMS: number;
    outcomeName: string;
    componentToUpdate: string;
    showProgress: boolean;

    constructor(props: any) {
        super(props);
        this.moving = this.moving.bind(this);
        this.moved = this.moved.bind(this);

        this.refreshIntervalMS = parseInt(this.getAttribute('refreshIntervalMilliSeconds', '1000'));
        this.timeoutMS = parseInt(this.getAttribute('timeoutMilliSeconds', '5000'));
        this.outcomeName = this.getAttribute('outcomeName');
        this.componentToUpdate = this.getAttribute('refreshComponentId', '');
        this.showProgress = this.getAttribute('showProgress', '').toLowerCase() === 'true';
    }

    async componentDidMount() {
        (manywho as any).eventManager.addBeforeSendListener(this.moving, this.componentId);
        (manywho as any).eventManager.addDoneListener(this.moved, this.componentId);
        await super.componentDidMount();
        this.startCounting();
    }

    async moving(xhr: XMLHttpRequest, request: any) {
        window.clearInterval(this.timerId);
        this.timerId = -1;
    }

    async moved(xhr: XMLHttpRequest, request: any) {
        if (this.timerId === -1) {
            this.timerId = window.setInterval(this.timerHandler.bind(this), 1000);
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
        this.timerId = window.setInterval(this.timerHandler.bind(this), this.refreshIntervalMS);
    }

    async timerHandler() {
         // if (this.loadingState === eLoadingState.ready) {
            if (this.timerCounter < this.timeoutMS) {
                this.timerCounter += this.refreshIntervalMS;
                if (this.showProgress) {
                    this.forceUpdate();
                }
            } else {
                // switch off the timer
                if (this.timerId > -1) {
                    window.clearInterval(this.timerId);
                    this.timerId = -1;
                }
                // reset the counter
                this.timerCounter = 0;
                try {
                    const result: boolean = await this.timeOut();
                    if (result) {
                        this.timerCounter = 0;
                        if (this.timerId === -1) {
                            this.timerId = window.setInterval(this.timerHandler.bind(this), 10);
                        }
                    }
                } catch (e) {

                }
            }
         // } else {
         //   this.timerCounter = 0;
         // }
    }

    async timeOut(): Promise<boolean> {

        if (this.outcomes[this.outcomeName]) {
            this.triggerOutcome(this.outcomeName);
            return false;
        } else {
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
            content = 'Refreshing in ' + (parseInt(this.getAttribute('refreshIntervalSeconds', '10')) - this.timerCounter) + ' seconds';
        }

        return <div>{content}</div>;
    }
}

manywho.component.register('OutcomeTimer', OutcomeTimer);
