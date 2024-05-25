console.log("welcome to hashim's calculator");
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "enter your number",
        type: "number",
        name: "firstnumber",
    },
    {
        message: "enter your number",
        type: "number",
        name: "secondnumber",
    },
    {
        message: "select one of the operator to perform thr operation",
        type: "list",
        name: "operators",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
console.log(answer);
// conditional statment
if (answer.operators === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid operator");
}
