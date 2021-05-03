
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

 

      var loggedInUser = user.uid ;
      console.log(loggedInUser) ;

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

                   adminsOnly();


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
                    
                    
                
                   
                 }

               

               
               
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
  
      function adminsOnly(){

        



        //ADDING MEMBERS
   
       

        //PULLING LOAN REQUESTS


        
           
        

        



        // document.getElementById("phone1").value = PhoneNo ;
        // document.getElementById("email1").value = Email1;
        // document.getElementById("amount1").value = Amount;
        // document.getElementById("duration1").value = Due;

         }


      

 

} else {
  // No user is signed in.
}
});





