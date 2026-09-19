public with sharing class BugManagementController {

    @AuraEnabled(cacheable=true)
    public static List<Bug__c> getBugs() {

        return [
            SELECT Id,
                   Name,
                   Bug_Title__c,
                   Severity__c,
                   Status__c,
                   Developer__c,
                   Developer__r.Name
            FROM Bug__c
            ORDER BY CreatedDate DESC
            LIMIT 20
        ];
    }
}