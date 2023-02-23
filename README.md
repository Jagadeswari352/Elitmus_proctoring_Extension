# eLitmus_proctoring_Extension
This repository consists of a chrome extension code for proctoring online Assessments.
# Table of Contents
* Technologies
* Extension Features
* Setup Process
* Functionality
* Environment variables
## Technologies:
**Client:** HTML,CSS,Javascript, Chrome Extension.

**Server:** Node,Json,Express.
## Extension Features
- Details filled in the form should stored in cloudinary
- Extension should allow access to following requirements check initially before test begin:

  a. Audio  
  
  b. Camera
- Extension should be able to capture the images through web cam and store it in cloudinary
- Admin should be able to change the interval(in which user's photo  is captured)
  
## Functionality
 - When User Enters Test page ,Extension will be activated dispalys a popup form to fill the details.
 - After filling the details ,click the 'Begin Test' button to start the test.
 - Upon clicking the button,The user details will be feteched into cloudinary and elitmus home page will be opened.
 - It asks the User permission to access the webcam and micrphone.
 - After giving access to the webcam and microphone,the test will begin and user will be monitored.
 - For every interval time,images will be captured and stored in cloudinary.
 - Admin can view the details of the user and images captured.
 ## Setup Process
- Install Node.js in your system and run the command
`npm install`
- Once this comand is successfully Executed go to cloudinary  and create a folder named "eLitmus-extension"(no change in name),in which details an dcaptured images will be stored.
- You need to create environment variable file (.env file) to store the following values:
  - CLOUDINARY_URL.
  - CLOUD_NAME.
  - CLOUD_KEY.
  - CLOUD_SECRET.
- Once you have done you are ready to start your server.To run the server in backend directory run this command
`node app.js`.
- Now to start the extension go to Google chrome and from there go to `chrome://extensions/` which is basically your extension manager.
- Turn on the developer mode there.
- After that go for the Load Unpacked option in the left top corner, it will open you file explorer. You need to go to the project directory (eLitmus proctoring Extension) and enter the ‘choose folder’ option.
The Extension will be loaded and gets activated at trigger time.
## Environment Variables
-To run this project, you will need to add the following environment variables to your .env file

`CLOUDINARY_URL`
`CLOUD_NAME` 
`CLOUD_KEY`
`CLOUD_SECRET` 

-To get all of these, you need to signup at [Cloudinary](https://cloudinary.com/). Go though the website to get detailed information about Cloudinary.
  
  -
 
