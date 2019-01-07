
declare var manywho: any;

manywho.OutcomeTimers = {};
// this attaches the Ajax handlers to the manywho.CustomComponentOrchestrator or 
// initialize function if manywho.CustomComponentOrchestrator isnt defined.  
if(manywho.CustomComponentOrchestrator)
{
    manywho.CustomComponentOrchestrator.doneSendHandlers.push(doneHandler);
}
else
{
    manywho.settings.initialize(
        {
        }
        ,
        {
            invoke: 
            {
                 done: doneHandler                
            }
        }
    );
}

function doneHandler()
{
    //preserve this so the promise handler can get it
    var self = this;

    var promises = [];
    //loop over the array callingupdate on each
    for(var key in manywho.OutcomeTimers)
    {
        var timer : OutcomeTimer = manywho.OutcomeTimers[key];

        if(timer)
        {
            promises.push(triggerTimer(timer));
        }
    }

    Promise.all(promises);
}

function triggerTimer(timer : OutcomeTimer)
{
    
    //there should be an attribute to dictate if the component had a model
    timer.startCounting();
    return true; 
}



import * as React from 'react';
import './OutcomeTimer.css';

class OutcomeTimer extends React.Component<any, any> 
{
   
    componentId: string = "";
    flowKey: string ="";  
    attributes = new Map<string,any>();

    //holder for datarefresh timer
    timerId = -1;
    timerCounter = 0;

    constructor(props : any)
	{
        super(props);
        
        this.componentId = props.id;
        this.flowKey = props.flowKey;

        //push attributes into keyed map 
		var flowModel = manywho.model.getComponent(this.componentId,   this.flowKey);
		if(flowModel.attributes)
		{
			for(var key in flowModel.attributes)
			{
				this.attributes.set(key ,flowModel.attributes[key]);
			}
        }

        if(flowModel.objectData && flowModel.objectData[0])
        {
            manywho.state.setComponent(this.componentId, {objectData: [flowModel.objectData[0]]}, this.flowKey, true);
        }
    }

    getAttribute(attributeName : string, defaultValue : any)
	{
		if(this.attributes.has(attributeName))
		{
			return this.attributes.get(attributeName);
		}
		else
		{
			return defaultValue;
		}
	}

    componentDidMount() 
    {   
        manywho.OutcomeTimers[this.componentId] = this;
        this.startCounting();
    }

    componentWillUnmount()
    {
        // use timerId from the state to clear the intervals
        clearInterval(this.timerId);
        this.timerId = -1;
    }

    startCounting()
    {
        this.timerCounter = 0;
        this.timerId = window.setInterval(this.timerHandler.bind(this), 1000);
    }


    timerHandler()
    {
        const flowState = manywho.state.getComponent(this.componentId, this.flowKey);
        
        if(flowState.loading)
        {
            this.timerCounter = 0;
            this.forceUpdate();
        }
        else
        {
            if(this.timerCounter < parseInt(this.getAttribute("refreshIntervalSeconds", 10 )))
            {
                this.timerCounter++;
                this.forceUpdate();
            }
            else
            {
                //reset the counter
                this.timerCounter = 0;

                //switch off the timer
                if(this.timerId >= -1)
                {
                    clearInterval(this.timerId);
                    this.timerId = -1; 
                }
                
                var outcomeToTrigger = this.getAttribute("refreshOutcomeId", "")

                if(outcomeToTrigger && outcomeToTrigger.length > 0 && outcomeToTrigger.toLowerCase() != "null")
                {
                    var outcome = manywho.model.getOutcome(outcomeToTrigger, this.flowKey);
            
                    //did we get an outcome
                    if(outcome)
                    {
                        //trigger the outcome
                        return manywho.component.onOutcome(outcome, null , this.flowKey);
                    }
                    else
                    {
                        return true;
                    }
                }
            }
        }
    }  
    
    render() 
    {
        var remaining = parseInt(this.getAttribute("refreshIntervalSeconds", 10 )) - this.timerCounter
        
        return <div>Triggering outcome in {remaining} seconds</div>   
    }
}

manywho.component.register('OutcomeTimer', OutcomeTimer);

export default OutcomeTimer;
