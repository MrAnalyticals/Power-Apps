In thia Repo I have Form Libraries, alo known as JavaScript files. These are used to dynamically run off Model Driven Power App forms. The objects (components) within a Form can be used to trigger these Form Libraries thus enhancng the user experience on those forms. Rather like Add-Ins for Office 365, in the past, these JavaScript libraries add additional functionality to the Power App. 

![image](https://github.com/user-attachments/assets/644438cd-d27b-47f4-bf31-034189c0bd76)


**YouTube Video:** https://www.youtube.com/watch?v=fVv-jRgLbWw&t=5s

**Audio:**

In this demo I introduce Form Libraries for Power Apps. They enable you to code for events that happen in your app. For this demo I have coded the form load event so that one of the two tabs on the form disappears. We can see, here, that only one tab is visible and we can see the user is les.    
So, let's log out of les and log into a different account that does not have the form load event apply to them.  
And we go into the edit form. And we can see two tabs are appearing for that user. 
Next I will show you how to edit the form and add the event. 
In the Power Platform Admin Centre I have created a Security Role called Tab 3. Here we can see the Custom Tables section and the table used in the app, One M Rows. 
So, back in the form we can see I have added a library called c r 2 7 2 Hide Tabs.
I select the Form Libraries item from the menu pane on the left. 
So, let's have a look at the library's settings. I click edit.
Here is where we upload the javascript code file. 
Once loaded the other fields are auto populated by Power Apps. 
We click Save and Publish to finish loading th file to that Power App. 
Let's have a look at the code file in visual studio code.
I declare two constants for the GUID of each security role.
I have added only one for now for the purposes of this demo. 
Mext we have the single execution context function.
Next we use the web api method to retrieve the system roles. 
We are determingin which role the user is in and then setting the visibility of the appropriate tab. Finally we have an error handlgin function. 
So, how do we find the GUID of a Security Role? In the Admin Centre we go to each security role and navigate to the address bar as shown. We take the GUI part of the u r l. 
Let's play the app again. We can see the tab disapearing more closely. 
  


 
 








