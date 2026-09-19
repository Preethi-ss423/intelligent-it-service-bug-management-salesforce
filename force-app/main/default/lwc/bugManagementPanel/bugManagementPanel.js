import { LightningElement, wire } from 'lwc';
import getBugs from '@salesforce/apex/BugManagementController.getBugs';

const COLUMNS = [
    {
        label: 'Bug Number',
        fieldName: 'Name'
    },
    {
        label: 'Bug Title',
        fieldName: 'Bug_Title__c'
    },
    {
        label: 'Severity',
        fieldName: 'Severity__c'
    },
    {
        label: 'Status',
        fieldName: 'Status__c'
    },
    {
        label: 'Assigned Developer',
        fieldName: 'DeveloperName'
    }
];

export default class BugManagementPanel extends LightningElement {

    bugs = [];
    error;

    columns = COLUMNS;

    @wire(getBugs)
    wiredBugs({ data, error }) {

        if (data) {

            this.bugs = data.map(bug => ({
                ...bug,
                DeveloperName: bug.Developer__r
                    ? bug.Developer__r.Name
                    : 'Not Assigned'
            }));

            this.error = undefined;

        } else if (error) {

            this.bugs = [];
            this.error = error;

            console.error('Error loading bugs:', error);
        }
    }
}