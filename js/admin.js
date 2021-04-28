

//getting a list
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
             var uType=doc.data().UserType

              if(uType===admins){
                  
                adminsOnly();


                document.getElementById("add").onclick =function(){

                    document.getElementById("content1").style.display="none";
                
                    document.getElementById("content3").style.display="none";
                
                    document.getElementById("content2").style.display= "block";
                
                }
                
                document.getElementById("dash").onclick =function(){
                
                
                    document.getElementById("content3").style.display="none";
                
                    document.getElementById("content2").style.display= "none";
                
                    document.getElementById("content1").style.display="block";
                
                }
                
                document.getElementById("member").onclick = function(){
                
                    document.getElementById("content1").style.display= "none";
                    document.getElementById("content2").style.display="none";
                    document.getElementById("content3").style.display="block";
                    
                
                   
                }
               
                document.getElementById("loanreq").onclick = function(){
                    
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





        firebase.firestore().collection("users").get().then((querySnapshot) => {

            var content = '';
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
        
                
                var FullName = doc.data().UserFullName;
                var Username = doc.data().TheUsername;
                var Phone  =  doc.data().Mobile;
                var Email = doc.data().EmailValue;
                var idNumber = doc.data().IDValue;
                var Password = doc.data().ThePassword;

        
        
        
                content += '<tr>';
        
                
                content += '<td>' + FullName + '</td>';
                content += '<td>' + Username + '</td>';
                content += '<td>' + Phone + '</td>';
                content += '<td>' + Email + '</td>';
                content += '<td>' + idNumber + '</td>';
                content += '<td>' + Password + '</td>';
                content += '<td> <button class="btnprint"> Print</button> </td>';
                content += '</tr>';
        
            });
        
            $('#memberslist').append(content);
        });


   
        document.getElementById("addmem").onclick = function(){
            var FullName = document.getElementById("fullname").value ;
            var Username = document.getElementById("username").value ;
            var phoneNumber = document.getElementById("phone").value;
            var Email = document.getElementById("email").value ;
            var IDNo = document.getElementById("idno").value ;
            var Password = document.getElementById("password").value ;
           
           
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
                });
        
            
        
        }

        
          
      }

 

} else {
  // No user is signed in.
}
});





