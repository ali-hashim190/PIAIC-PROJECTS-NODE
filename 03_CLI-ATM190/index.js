import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 1234;
console.log("welcome to the ATM MACHINE \n");
let pinAnswer = await inquirer.prompt([
    {
        message: "enter your pin",
        type: "number",
        name: "pin"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("Pin is corect ,you have succesfully login ");
    console.log("Current Account Balance is " + mybalance);
    let operations = await inquirer.prompt([
        {
            message: "select an operation",
            type: "list",
            name: "operation",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operations.operation === "withdraw") {
        let amounts = await inquirer.prompt([
            {
                message: "enter the amount you want to withdraw",
                name: "amount",
                type: "number"
            }
        ]);
        if (amounts.amount > mybalance) {
            console.log("insufficient amount entered");
        }
        else {
            mybalance = mybalance - amounts.amount;
            console.log(amounts.amount + " " + "withdraw Successfully");
            console.log("your remaning balance is " + mybalance);
        }
    }
    else if (operations.operation === "check balance") {
        console.log("Your Account Balance is " + mybalance);
    }
}
else {
    console.log("Pin is Incorrect ,Try Again");
}
