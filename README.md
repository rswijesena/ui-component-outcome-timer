# Outcome Timer

A component that triggers an outcome at a configurable interval.


## Setup

- Grab the files from the /dist folder and import into your tenant.

- Add the files to your player code like this: -

        requires: ['core', 'bootstrap3'],
        customResources: [
                'https://s3.amazonaws.com/files-manywho-com/tenant-id/OutcomeTimer.js'
                ],


- Add a component to your page, any type, save it then change it's "componentType" to "OutcomeTimer" in the metadata editor and save it.
e.g. 
            "componentType": "OutcomeTimer",


## Extra Configuration

You can add attributes to the component to control it's appearance: -

- showProgress		        true/false - shows or hides the progress bar

- refreshIntervalSeconds	the number of seconds between updates 1 - xxx

- refreshOutcomeId	        the id of an outcome to trigger

- refreshComponentId	        the id of a component to trigger to refesh its data Note:  The component acting as the timer MUST have it's datasource set to the same thing as the target component.  The timer retrieves the new data and pushes it to the target component.