function theDisplay(data){
    document.getElementById("theP").innerHTML = data ;
}

function theDisplay(data){
    var request = new XMLHttpRequest();
    
    request.open('GET',  )
}



//PROMISES
function myDemo(thedemo){
    document.getElementById("demo").innerHTML = thedemo;
}

let myArgument = new Promise (function(argument1, argument2){

        var q = 32
        if (q == 32){
            argument1("Task was successfull");
        } else{
            argument2("Task was not successfull");
        }
  
});

myArgument.then(
    function (success){
        myDemo(success);
    },

    function(error){
        myDemo(error);
    }
    )