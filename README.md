# watson-visual-recognition-app
<b> Note: I worked on this as a project for Prolifics under the guidance of Mr. Minesh Manilal (Head of Digital Experience) and Mr. Haris Vohra (Consultant) - please do not copy or distribute code </b> <br /> <br />

I created a mobile device app utilizing the IBM Watson Visual recognition that supports IT asset management to be used by a field representative. Essentially, the field representative will use the app to take a picture of an asset (Laptop, Printer etc.) using a mobile device. The app will identify the asset using the visual recognition feature and automatically prefill part of a field service input form to generate a help desk ticket. <br /> <br />

How it works: <br />
•	Background – utilizes framework for hybrid mobile application development called Cordova – enables you to develop apps for Android/iOS platforms using JavaScript/CSS/HTML5; utilizes IBM MobileFirst framework – can deploy in any mobile setting (iOS, android), can update app in real time, server can get services from backend i.e. access from database <br />
•	When the app is run, a button allows the user to access the camera (using a Cordova plugin – used to add functionalities from JavaScript) <br />
•	Picture is taken and embedded in the background; then the IBM Watson Recognition service uses its default classifier to recognize the image – for this, registration for service credentials was done to get the API key – which was used in the code to connect to the service via Bluemix <br />
•	There are various objects the default classifier comes up with for selection by user, along with a score on a scale of 0 to 1 for the closeness of the stored image to the actual object in terms of recognition; the key fields of the form is auto filled once the selection is confirmed <br />

Architecture Diagram <br /> <br />
(img coming soon)
