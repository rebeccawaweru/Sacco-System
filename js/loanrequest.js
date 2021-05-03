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



      //NAVIGATION BUTTONS ON THE LEFT COLUMN
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


    //PULLING LOAN REQUESTS FROM THE LOANREQUEST COLLECTION DB
    firebase.firestore().collection("loanrequests")
    .get()
    .then((querySnapshot) => {
        var content = '';
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
    
            var Amount = doc.data().RequestAmount;
            var Due = doc.data().Duration;
            var Id = doc.data().UserId;
            var loanID = doc.data().loanid;
            // var viewMore = window.location.href = "viewmore.html" + "?" + loanID ;
    
       //pulling details of user who requested the loan  
    
        firebase.firestore().collection("users").where("userID", "==", Id)
        .get()
        .then((querySnapshot) => {
    
    
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
    
                var Name = doc.data().UserFullName;
                var PhoneNo = doc.data().Mobile;
                var Email1 = doc.data().EmailValue;
    
                
    
                content+= '<tr>' ;
    
                content += '<td>' + Name + '</td>';
                content += '<td>' + PhoneNo + '</td>';
                content += '<td>' + Amount + '</td>';
                content += '<td>' + Due + '</td>';
                content += '<td>' + '<a href =" " id="view" >View More </a>';
                content += '</tr>';
    
            });
    
            $('#loanlist').append(content);
    
            }); 
    
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    
      //endofuserdetails
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });//endofloanrequest



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






// document.getElementById("view").onclick = function(){
//     window.location.href = "viewmore.html";
//     //get data

//     firebase.firestore().collection("users")
//     .get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });

//         firebase.firestore().collection("loanrequests").where(LoanStatus, "==", "pending")
//         .get()
//         .then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 // doc.data() is never undefined for query doc snapshots
//                 console.log(doc.id, " => ", doc.data());

//             });
//         })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });


//     })
//     .catch((error) => {
//         console.log("Error getting documents: ", error);
//     });
// }