const firebaseConfig = {
    apiKey: "AIzaSyCsry9ykAkbIEOcYnkkv5hhJaFhSVjEDRA",
    authDomain: "practice-4208f.firebaseapp.com",
    databaseURL: "https://practice-4208f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "practice-4208f",
    storageBucket: "practice-4208f.appspot.com",
    messagingSenderId: "956698484021",
    appId: "1:956698484021:web:b4626b9d95319ef22ac07c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser() {
    user_name=document.getElementById('user_name').value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
  }