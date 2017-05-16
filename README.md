# watson-visual-recognition-app
I have been able to create an app that can take a picture and use the IBM Watson Visual Recognition service
to identify a picture once it has been taken with a camera. It comes up with names of everyday objects that could be in the picture
and prefills part of an input form for a help desk ticket.<br />

How it works:
•	Background – utilizes framework for hybrid mobile application development called Cordova – 
enables you to develop apps for Android/iOS platforms using Javscript/CSS/HTML5; utilizes IBM MobileFirst framework – 
can deploy in any mobile setting (iOS, android), can update app in realtime, server can get services from backend i.e. access from database) <br />
•	when you run the app, there’s a button that allows the user to access the camera (using a cordova plugin – used to add functionalities from javascript) <br />
•	 picture is taken and embedded in the background, then the IBM Watson Recognition service uses its default classifier to recognize the image – <br />
for this, you need to register for service credentials, from which you get your API key – this is used in the code to connect to the service via Bluemix
•	There are various names the default classifier comes up with, along with a score on a scale of 0 to 1; The first field of the form is filled <br />


Problems encountered:

•	Installation of the MobileFirst framework – kept trying to fetch file(s) that didn’t exist <br />
•	Installation of the Ionic framework – problems regarding having the correct permissions as well as the location of Node.js; had to look up online forums to solve issue <br />
•	Perpetually received File Transfer issues – http error status 400 when attempting file uploads to the Watson Visual recognition service <br />
•	Weird problems with camera not working – resolved while activating the MobileFirst local server <br />


Work to be done/Suggestions for improvements:
•	Redesign the user interface – input fields and buttons <br />
•	Incorporate the Ionic framework for a more slick design (?) <br />
•	Be able to use the data to populate parts of an input form <br />
•	Work on creating your own classifier using the following tutorial: https://www.ibm.com/watson/developercloud/visual-recognition/api/v3/?node#classify_an_image <br />



Other notes:
•	to run the MobileFirst server, go to the MobileFirst-8.0.0.0 folder and then type in ‘sh run.sh’ <br />
