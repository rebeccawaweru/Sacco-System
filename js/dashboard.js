document.getElementById("requestln").onclick =function(){
  window.location.href = "requestloan.html";
}

document.getElementById("dash").onclick =function(){
  window.location.href = "dashboard.html";
}




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

                var Display = document.getElementById("displayname");
                Display.innerHTML = doc.data().TheUsername;
                
                if (uType == User1){
                
                  document.getElementById("requestln").onclick =function(){
                      window.location.href = "requestloan.html";
                }
            
                document.getElementById("dash").onclick =function(){
                      window.location.href = "dashboard.html";
                }

                }
                else {
                  if(uType == "accountant"){
                     window.location.href = "acc-dashboard.html";

                 }else if(uType == "user"){
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
  });

    

           
  