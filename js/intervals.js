setInterval(myTimer, 1000);

function myTimer(){
   
    var currentdate = new Date();

    var Days = ["sunday", "monday" , "tuesday", "wednesday" , "thursday", "friday"]

document.getElementById("intervals").innerHTML = Days[currentdate.getDay()] + " " + currentdate.getHours() + "." + currentdate.getMinutes() + "." + currentdate.getSeconds();
}

//eg
var currentT = new Date();
document.getElementById("int2").innerHTML = "&copy" + currentT.getFullYear();

//arrays

var animals = ["dogs" , "cats", "chicken"];

document.getElementById("arrayDemo").innerHTML = animals ;

var Days = ["sunday", "monday" , "tuesday", "wednesday" , "thursday", "friday"]

document.getElementById("somedemo").innerHTML = Days[currentT.getDay()] ;//automatically changes on the next day



