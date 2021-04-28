
document.getElementById("member").onclick = function(){

    document.getElementById("content1").style.display= "none";
    document.getElementById("content2").style.display="none";
    document.getElementById("content3").style.display="block";
    

   
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var loggedInUser = user.uid ;
      console.log(loggedInUser) ;


      document.getElementById("add").onclick =function(){

        document.getElementById("contentI").style.display="none";
    
        // document.getElementById("content3").style.display="none";
    
        document.getElementById("contentII").style.display= "block";
    
    }

    document.getElementById("dash").onclick =function(){


        // document.getElementById("content3").style.display="none";
    
        document.getElementById("contentII").style.display= "none";
    
        document.getElementById("contentI").style.display="block";
    
    }

    document.getElementById("request").onclick = function (){

        var loanAmount = document.getElementById("loanamount").value ;

        var loanDuration = document.getElementById("loanduration").value ;

        // Add a new document in collection "cities"
        firebase.firebase().collection("loanrequests").doc(user.uid).set({
                RequestAmount : loanAmount,
                Duration : loanDuration,
                UserId : user.uid
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