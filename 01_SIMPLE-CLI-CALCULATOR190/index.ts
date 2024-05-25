console.log("welcome to hashim's calculator");

import inquirer from "inquirer";

const answer = await inquirer.prompt([
{
    message:"Enter First Your Number",
    type:"number",
    name:"firstnumber",


},
{
    message:"Enter Second Your Number",
    type:"number",
    name:"secondnumber",


},
{
message:"select one of the operator to perform thr operation",
type:"list",
name:"operators",
choices:["Addition","Subtraction","Multiplication","Division"]
}


]);

console.log(answer);

// conditional statment

if(answer.operators === "Addition"){
    console.log(answer.firstnumber +answer.secondnumber);
    
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
    
} 
else if(answer.operators === "Multiplication"){
    console.log(answer.firstnumber * answer.secondnumber);
    
}
else if(answer.operators === "Division"){

    console.log(answer.firstnumber / answer.secondnumber);
    
}
else {
console.log("please select valid operator");

}

