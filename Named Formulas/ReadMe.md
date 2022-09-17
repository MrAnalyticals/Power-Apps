**Power Fx: Introducing Named Formulas**

Power Fx: Introducing Named Formulas | Microsoft Power Apps
https://powerapps.microsoft.com/en-us/blog/power-fx-introducing-named-formulas/

**Power Apps experimental features community forum**
https://powerusers.microsoft.com/t5/Power-Apps-Experimental-Features/bd-p/PA_ExperimentalFeatures


**YouTube Published Video** : https://youtu.be/49UFhWSS5to


**Video Script**

The Microsoft Power Apps Team has released a new Experimental feature for Power Apps called Named Formulas. This is like the similarly named functionality that already exists in Excel. So, those used to that will understand this more easily. Once you switch this new feature on you will see a new option called Formulas in the properties drop down box after selecting the App object. 
Switching on the named formulas functionality requires you to switch on the experimental feature as shown here.
In the input box we enter our Named Formula. In this example I am obtaining the name of a selected file. This app is used to select files from my computer for uploading to a specific Azure Blob Store.
I have entered the name of the formula. In this case Uploaded File name and then finished the line of code with a semi colon. 
In the button On Select code I could, also, if I wish, replace this Last function with the name of the new Named Formula. 
For the purposes of this demo I have limited its example only to the value property of the label below. 
So, let's run the app and see the named formula in action. 
I select a file. And, as you can see its name appears in the label.
Multiple lines of code can be added to the Formulas property of the App object. It is not just limited to one formula. 
See this example from the relevant Microsoft blog page:

Screenshot

Players = ChessPHP.Players();

PlayerName = If( IsBlank( LookUp( Players.players, Lower(player) = Lower(PlayerId) ) ),
                 PlayerId,
                 LookUp( Players.players, Lower(player) = Lower(PlayerId) ).name & " (" & PlayerId & ")"
             );
