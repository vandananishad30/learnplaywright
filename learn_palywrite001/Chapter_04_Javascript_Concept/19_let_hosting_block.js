// let is block- scoped

let x= "globle";
if (true){
    console.log(x); // TDz zone 
    
    let x= "block";
    console.log(x);
}