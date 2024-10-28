// Define the security group IDs
const SecurityGroupID_Tab2 = "YOUR-TAB2-SECURITY-GROUP-GUID"; // Replace with Tab2 security group ID
const SecurityGroupID_Tab3 = "89ecef24-c594-ef11-8a68-6045bdcfc65d"; // Replace with Tab3 security group ID

// Function to hide or show tabs based on group membership
function manageTabVisibility(executionContext) {
    var formContext = executionContext.getFormContext();
    
    // Hide Tab3 if the user is in Tab2 security group, or hide Tab2 if in Tab3 security group
    Xrm.WebApi.retrieveMultipleRecords("systemuserroles", `?$filter=systemuserid eq ${Xrm.Utility.getGlobalContext().userSettings.userId}`).then(
        function success(result) {
            // Loop through each role the user is part of
            let isInTab2Group = false;
            let isInTab3Group = false;

            result.entities.forEach(function(role) {
                if (role.roleid === SecurityGroupID_Tab2) {
                    isInTab2Group = true;
                }
                if (role.roleid === SecurityGroupID_Tab3) {
                    isInTab3Group = true;
                }
            });

            // Check group membership and hide/show tabs accordingly
            if (isInTab2Group) {
                // User is in Tab2 group, hide Tab3
                formContext.ui.tabs.get("tab_3").setVisible(false);
            } else if (isInTab3Group) {
                // User is in Tab3 group, hide Tab2
                formContext.ui.tabs.get("tab_2").setVisible(false);
            }
        },
        function error(error) {
            console.log("Error retrieving user roles: " + error.message);
        }
    );
}
