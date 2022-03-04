const firebaseConfig = {

    apiKey: "AIzaSyBRTI2o43eoxCiVmeeeR1qNo1EydWlVxAc",
  
    authDomain: "kwitter-app-8c05d.firebaseapp.com",
  
    projectId: "kwitter-app-8c05d",
  
    storageBucket: "kwitter-app-8c05d.appspot.com",
  
    messagingSenderId: "1083748534596",
  
    appId: "1:1083748534596:web:37f45597e51ef1a4ec6f11",
  
    measurementId: "G-6PVZ48XEMG"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);

function addUser()
{
   user_name=document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
       porpose: "adding user"
   });
}