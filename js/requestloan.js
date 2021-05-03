            firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var loggedInUser = user.uid ;
      console.log(loggedInUser) ;
          


      firebase.firestore().collection("users")
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());

            var Display = document.getElementById("displayname");
            Display.innerHTML = doc.data().TheUsername;

          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
     


          document.getElementById("requestln").onclick =function(){
                    window.location.href = "requestloan.html";
              }
          
              document.getElementById("dash").onclick =function(){
                    window.location.href = "dashboard.html";
              }

              document.getElementById("request").onclick = function(){

                  var loanAmount = document.getElementById("loanamount").value;
          
                  var loanDuration = document.getElementById("loanduration").value;
                  
                  var Status = "pending";
          
                  var loanRef = firebase.firestore().collection("loanrequests").doc();
                  
                  
                  loanRef.set({
                          RequestAmount : loanAmount,
                          Duration : loanDuration,
                          UserId : user.uid,
                          loanId: loanRef.id,
                          LoanStatus : Status
          
          
                      })
                      .then(() => {
          
                      console.log("Document successfully written!");
                       document.getElementById("loanamount").value = '';
                       document.getElementById("loanduration").value = '';
                      
                      })
          
                      .catch((error) => {
                      console.error("Error writing document: ", error);
                      });
          
                      }

          } else {
      // No user is signed in.
    }
  });