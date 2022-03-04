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
    user_name=localStorage.getItem("user_name");
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update(
      {
           purpose: "addiing room name"       
      }
      );
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#  "+ Room_names+"</div<hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room name", name);
      window.location = "kwitter_page.html";

}
function logout()
{
      localStorage.removeitem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html"
}

