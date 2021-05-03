firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var loggedInUser = user.uid ;
      console.log(loggedInUser) ;

       var User1 = "user";
       
          firebase.firestore().collection("users").where("UserType", "==", User1)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                var uType = doc.data().UserType ;

                
                
                if (uType === User1){
                    document.getElementById("req").onclick =function(){

                        document.getElementById("contentI").style.display="none";
                    
                      
                    
                        document.getElementById("contentII").style.display= "block";
                    
                    }
                
                    document.getElementById("dash").onclick =function(){
                
                    
                        document.getElementById("contentII").style.display= "none";
                    
                        document.getElementById("contentI").style.display="block";
                    
                    }
    
                    }
                    else {
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

            document.getElementById("request").onclick = function(){

                var loanAmount = document.getElementById("loanamount").value;
        
                var loanDuration = document.getElementById("loanduration").value;
                
          
        
                var loanRef = firebase.firestore().collection("loanrequests").doc(user.uid);
                
                
                loanRef.set({
                        RequestAmount : loanAmount,
                        Duration : loanDuration,
                        UserId : user.uid,
                        loanId: loanRef.id
        
        
        
                    })
                    .then(() => {
        
                    console.log("Document successfully written!");
                    
                    })
        
                    .catch((error) => {
                    console.error("Error writing document: ", error);
                    });
        
                    }
        
                   
            
        
            } else {
              // No user is signed in.
            }
          });