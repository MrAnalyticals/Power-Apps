**Editing Dataverse Tables using Excel**

Ref: Open table data in Excel - Power Apps | Microsoft Learn
https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-excel-addin

YouTube video:
https://youtu.be/AEFRdqBSVnA

Microsoft has recently created an Excel Add-In that enables you to edit your Dataverse tables. Check out my short demo video on this new technology. 
If you like my video please Subscribe. 
#powerapps #excelonline #dataverse 

![image](https://user-images.githubusercontent.com/47678539/194778675-a5351b63-9ea7-4b98-a974-851e1e1de606.png)

![image](https://user-images.githubusercontent.com/47678539/194778692-071ea8a1-d753-491e-8376-66eb17468774.png)


**Video Script**

Microsoft has recently provided a feature to edit Dataverse tables in Excel Online and Desktop.  Tables over 1 million rows can, still, be edited but only the first 1 million rows are editable. 
To enable this feature requires the installation of the associated Excel Add-In which works in both Online and Desktop versions of Excel.


So, let's install the add in. We click the link in the provided Microsoft help page which takes us to the Microsoft Store page for that add in. 
Once installed let's go back to Power Apps where we can see our example Dataverse table. In this case the Passengers table. 
In the Edit menu tab at the top of the page select "Edit in Excel".
This downloads the file to your local machine. And from here we can open the file in Excel Desktop.


Here, I encountered errors opening the file. It was the first time I had used the Add In and there is a note about this in the Microsoft help page. Though, in my case, I just waited 5 minutes and then tried again downloading the Excel file.


Finally I got the file to open in Excel Desktop. I did click Enable Editing".


Now the Add In opens. It took around 2 minutes to load. Then I had to sign in. 
And here we can see the data appear in a formatted table. I have only one row as you can see.
As I move across the table the field names display in the Add In.
Here, I edit the Passenger Name value from John to Johnny. I then go to the Add In pane and click the Publish link. Status notes appear briefly underneath. Once completed I navigate to the borwser again to examine the PAssenger table in Power Apps. First refreshing, of course.
And we can see that the value has, indeed, been updated to Johnny.
There is extra functionality called "Adjusting columns". You cannot , at this time, edit column names. You can move columns, add column and remove columns only. To do this you have to click the "Enable Design" option. to do this click the gear icon in the Add In, then click on Data connectors then click on the option box.
Whilst the workbook allows you to edit the column name and seemingly publish it it will not have worked. You can check this , from within the add in. 
In the design view you can see that the field name appears to have been changed to "Passenger Named". 
Even when clicking the Update button, it still does not work. 
When I double click the field name in the Selected Fields box at the bottom of the Add In it is moved into the Available Fields box and, here, we can see that the name is, indeed, not changed. 

And finally I demonstrate how to batch upload thousands of records into a Dataverse table using this Add In. After creating the extra rows I then carefully pasted them into the workbook. Here we can see there are 15000 rows including the header row.
Here I stopped at column N. 
You cannot, at this time, use a blank workbook and then call the Add in to operate on that blank work book. Once the paste was made I then, simply clicked Publish. Excel tells us that we are attempting to write to read only fields. We accept the warning to revert those field values. 
The status of the publishing is shown at the bottom of the Add In pane.
The count of records uploaded is shown. 
Here I got an error. However when checking the number of records uploaded it was 14999. So, perhaps this is a spurious error? 
It might be the case that the best way to batch upload to Dataverse is not through this Add In but through the provided functionality in Power Apps via: “Import data from Excel”. I have made a video about that on my You Tube Channel. 


