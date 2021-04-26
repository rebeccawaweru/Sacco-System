// document.getElementById("account").onchange = function(){

//     var Accounttype = document.getElementById("account").value ;

// }

document.getElementById("account").onchange = function(){

    var FullName = document.getElementById("fullname").value ;
    var Username = document.getElementById("username").value ;
    var Email = document.getElementById("email").value ;
    var Password = document.getElementById("password").value ;
    var Password1 = document.getElementById("password1").value ;
    var Accounttype = document.getElementById("account").value ;

    if( Accounttype === "User"  && Password === Password1){
                
        firebase.auth().createUserWithEmailAndPassword(Email, Password)
        .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...

         // Add a new document in collection "cities"
        firebase.firestore().collection("users").doc().set({
          UserFullName : FullName,
          TheUsername : Username,
          EmailValue : Email,
          ThePassword : Password
          
        })
        .then(() => {
            
        console.log("Document successfully written!");
        window.href.location = "dashboard.html";

        })
        .catch((error) => {
        console.error("Error writing document: ", error);
        });

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert ("The two passwords do not match please try again")
      Password = ''  ;
      Password1 = '' ;
      // ..
    });

}
}