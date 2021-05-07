function displayData(data){

    document.getElementById("demo").innerHTML = data;
}

async function theFunction(){
    return "hello world" ;

}

theFunction().then(

    function(value){
        displayData(value);
    },
    

    
function(error) {
    displayData(error);
}
);

//await

async function theDisplay(){
    let thePromise = new Promise(function(theResolve, theProject){
        theResolve("hello world");
    });

    document.getElementById("demo").innerHTML = await thePromise;
}
 theDisplay();