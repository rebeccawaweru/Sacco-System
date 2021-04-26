document.getElementById("btn2").onclick = function() {

var Email = document.getElementById("email").value;
var Password = document.getElementById("password").value;
var Accounttype = document.getElementById("account").value;



if(Accounttype === "Admin"){
  
  firebase.auth().signInWithEmailAndPassword(Email, Password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    window.location.href = "admin-dashboard.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

}else if (Accounttype === "Accountant"){
    firebase.auth().signInWithEmailAndPassword(Email, Password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      window.location.href = "acc-dashboard.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

}else if(Accounttype === "User"){
  firebase.auth().signInWithEmailAndPassword(Email, Password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    window.location.href = "dashboard.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

}



// firebase.auth().signInWithEmailAndPassword(Email, Password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...  
//     if(Accounttype == "admin"){
//         window.location.href = "admin-dashboard.html";
//     }else if(Accounttype == "user"){
//         window.location.href = "dashboard.html";
//     }else if(Accounttype == "accountant"){
//         window.location.href = "acc-dashboard.html";
        
//     }

//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });











