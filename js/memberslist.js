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

        //PULLING USERS INFORMATION INTO A LIST
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
});//END OF PULLING USERS




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



