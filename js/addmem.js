firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var loggedInUser = user.uid ;
      console.log(loggedInUser) ;
       
      //IDENTIFYING USER TYPE
      var admins= "Admin";
      firebase.firestore().collection("users").where("UserType", "==", admins)
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
             var uType=doc.data().UserType ;

              if(uType===admins){
                  var Display = document.getElementById("displayname");
                  Display.innerHTML = doc.data().TheUsername;


    //   navigation buttons on the left-column
            document.getElementById("add").onclick =function(){
            
                window.location.href = "addmembers.html";
            }       
            
            document.getElementById("dash").onclick =function(){
            
            window.location.href = "admin-dashboard.html";
            }
            
            document.getElementById("member").onclick = function(){
            
            window.location.href = "memberslist.html";
            
            }
            
            document.getElementById("loanreq").onclick = function(){
            
            window.location.href = "loanrequest.html";
    
    }//END OF NAVIGATION BUTTONS

     //   ADDING MEMBERS USING THE INPUT FORM PROVIDED
     document.getElementById("addmem").onclick = function(){
        var FullName = document.getElementById("fullname").value ;
        var Username = document.getElementById("username").value ;
        var phoneNumber = document.getElementById("phone").value;
        var Email = document.getElementById("email").value ;
        var IDNo = document.getElementById("idno").value ;
        var Password = document.getElementById("password").value ;
       
       // ADDING USERS DETAILS TO THE DATABASE
        firebase.firestore().collection("users").doc().set({
              
            UserFullName : FullName,
            TheUsername : Username,
            Mobile : phoneNumber,
            EmailValue : Email,
            IDValue : IDNo,
            ThePassword : Password,
            // UserType : Accounttype
            
            })
            .then(() => {
    
            console.log("Document successfully written!");
    
    
            })
            .catch((error) => {
            console.error("Error writing document: ", error);
            })
    
    } //END OF ADDING MEMBERS

          
    }else{
        if(uType === "accountant"){
        window.location.href = "acc-dashboard.html";
    }else if(uType === "user"){
        window.location.href = "dashboard.html";
    }
    }
    });
    })
    .catch((error) => {
    console.log("Error getting documents: ", error);
    });

   
    

    } else {
      // No user is signed in.
    }
  });//END OF AUTH







