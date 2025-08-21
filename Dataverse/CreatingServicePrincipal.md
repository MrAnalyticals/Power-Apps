Creating a Service Principal  for Power Platform

✅ Setting up a Service Principal with Dataverse
To set up a Service Principal so it appears in the "Authentication Type" for a Microsoft Dataverse action (like in your screenshot), follow these steps in Azure and Power Platform:
________________________________________
1. Register an Application in Azure AD
1.	Go to Azure Portal → Azure Active Directory → App registrations.
2.	Click New registration.
3.	Give it a name (e.g., Dataverse Service Principal).
4.	Set Supported account types to Accounts in this organizational directory only.
5.	Click Register.
________________________________________
2. Create a Client Secret or Certificate
1.	In your registered app, go to Certificates & secrets.
2.	Under Client secrets, click New client secret.
3.	Add a description, set expiration, and click Add.
4.	Copy the Value (you’ll need it later).
o	Alternatively, you can use a certificate instead of a secret.
________________________________________
3. Set up API Permissions
a)	Still in the app registration, go to API permissions → Add a permission.
b)	Set up as following:
•	Select the “Microsoft APIs” tab then the “Dynamics CRM” panel:
 
 
It will display as follows:
 
•	Select “user_impersonation” option then the click the “Add permission” button.
 
c)	Grant admin consent.
Alternatively, you can select the “APIs my organization uses”  search for “dataverse”  select it when it appears  select the user_impersonation option  click the “Add permission” button.

4.	Create the Security Role for the App if required. The following Custom Security Role was used for this demo:
Museum Curator
Notes: The difference between Grant Admin Consent (Azure AD) and assigning a Dataverse security role is : 
•	Grant Admin Consent (Azure AD) → lets the app authenticate and obtain a token to Dataverse.
•	Assign Security Role (Dataverse) → lets the app actually use that token to perform allowed actions inside your environment.

5.	Add the App as a User in Dataverse
1.	Go to Power Platform Admin Center.
2.	Select your environment → Settings → Users + permissions → Application users.
3.	Click + New app user.
4.	Search for your Azure AD app and add it.
5.	Assign the custom security role with the needed Dataverse permissions.
________________________________________

6. Use Service Principal in Power Automate / Logic Apps
1.	In your Dataverse connector settings (like in your screenshot), select Service Principal.
2.	Enter:
o	Tenant ID (from Azure AD → Overview)
o	Client ID (Application ID from Azure AD)
o	Client Secret (or certificate thumbprint)
o	Environment URL (e.g., https://<org>.crm.dynamics.com)

Screenshot: Create a new Connection
 

Screenshot: Select Service Principal
 
7. Test the Connection
•	Save and run your flow to confirm it connects to Dataverse without requiring an interactive sign-in.
________________________________________


