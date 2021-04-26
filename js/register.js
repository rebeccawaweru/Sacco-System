
         document.getElementById("btn").onclick = function(){

            var FullName = document.getElementById("fullname").value ;
            var Username = document.getElementById("username").value ;
            var Email = document.getElementById("email").value ;
            var Password = document.getElementById("password").value ;
            var Password1 = document.getElementById("password1"). value ;

            var Accounttype = document.getElementById("account"). value;

            // var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());

            if( Password === Password1){
                
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
                ThePassword : Password,
                UserType : Accounttype
                
                })
                .then(() => {

                console.log("Document successfully written!");

                window.location.href = "login.html";

                })
                .catch((error) => {
                console.error("Error writing document: ", error);
                });

            })
            

            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
           
            });

         
        }else {
            alert("The two passwords you entered do not match")
            document.getElementById("password").value = '' ;
            document.getElementById("password1").value = '';
        }
    
    
    }



       


            
       