
import { eLoadingState, FlowComponent } from 'flow-component-model';
import * as React from 'react';
import './OutcomeTimer.css';

//declare const manywho: IManywho;
declare const manywho: any;

export default class OutcomeTimer extends FlowComponent 
{
    //holder for datarefresh timer
    timerId = -1;
    timerCounter = 0;

    constructor(props : any)
	{
        super(props);
        this.moving = this.moving.bind(this);
        this.moved = this.moved.bind(this);
    }

    
    async componentDidMount() 
    {   
        (manywho as any).eventManager.addBeforeSendListener(this.moving, this.componentId);
        (manywho as any).eventManager.addDoneListener(this.moved, this.componentId);
        await super.componentDidMount();

        //attach move listener
        manywho.event
        this.startCounting();
    }

    async moving(xhr: XMLHttpRequest, request: any) {
        window.clearInterval(this.timerId);
        this.timerId = -1;
        // this handles the new subflow concept.
        // the flow could have moved to a sub flow and if so we need to reload all data
        if ((xhr as any).invokeType === 'FORWARD') {
            //this.getDocuments();
        }
    }

    async moved(xhr: XMLHttpRequest, request: any) {
        if(this.timerId === -1 ) {
            this.timerId = window.setInterval(this.timerHandler.bind(this), 1000);
        }
        // this handles the new subflow concept.
        // the flow could have moved to a sub flow and if so we need to reload all data
        if ((xhr as any).invokeType === 'FORWARD') {
            //this.getDocuments();
        }
    }

    async componentWillUnmount()
    {
        clearInterval(this.timerId);
        this.timerId = -1;
        (manywho as any).eventManager.removeBeforeSendListener(this.componentId);
        return Promise.resolve();
        
    }

    startCounting()
    {
        this.timerCounter = 0;
        this.timerId = window.setInterval(this.timerHandler.bind(this), 1000);
    }


    async timerHandler()
    {
        if(this.loadingState === eLoadingState.ready) {
            if(this.timerCounter < parseInt(this.getAttribute("refreshIntervalSeconds", "10" )))
            {
                this.timerCounter++;
                this.forceUpdate();
            }
            else
            {
                //switch off the timer
                if(this.timerId > -1)
                {
                    window.clearInterval(this.timerId);
                    this.timerId = -1; 
                }
                //reset the counter
                this.timerCounter = 0;
                try {
                    await this.timeOut();
                }
                finally {
                    this.timerCounter = 0;
                    if(this.timerId === -1 ) {
                        this.timerId = window.setInterval(this.timerHandler.bind(this), 1000);
                    }
                }
            }
        }
        else {
            this.timerCounter = 0; 
        }
    }

    async timeOut() {
        
            
        if(this.outcomes["OnRefresh"]) {
            await this.triggerOutcome("OnRefresh");
        }   
        
        const componentToUpdate = this.getAttribute("refreshComponentId", "")
        //if we were given a component id to update
        if(componentToUpdate && componentToUpdate.length > 0)
        {
            //preserve this so the promise handler can get it
            var self = this;

            //get the objectDataRequest object from the model
            var request = manywho.model.getComponent(this.componentId, this.flowKey).objectDataRequest;

            //demand the engine re-gets the model and handle the async promise result
            await manywho.engine.objectDataRequest(this.componentId, request, this.flowKey, 0 , null, null, null, null);
            let component = manywho.model.getComponent(componentToUpdate, this.flowKey);
                
            //did we get a component
            if(component)
            {
                component.objectData=manywho.model.getComponent(this.componentId, this.flowKey).objectData;
                manywho.engine.render( this.props.flowKey);
            }
            
        }
    }  
    
    render() 
    {
        let content: string = "";
        if(this.getAttribute("showProgress","").toUpperCase()==="TRUE") {
            content = "Refreshing in " + (parseInt(this.getAttribute("refreshIntervalSeconds", "10" )) - this.timerCounter) + " seconds";
        }
        
        return <div>{content}</div>   
    }
}

manywho.component.register('OutcomeTimer', OutcomeTimer);
