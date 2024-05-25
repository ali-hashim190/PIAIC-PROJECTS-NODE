import * as readline from 'readline';

class Account {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount. Please enter a positive value.");
        }
    }

    withdraw(amount: number) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }

    getBalance() {
        console.log(`Current balance: $${this.balance}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main() {
    rl.question("Enter initial balance: ", (initialBalanceStr) => {
        const initialBalance = parseFloat(initialBalanceStr);
        const myAccount = new Account(initialBalance);

        askUserAction(myAccount);
    });
}

function askUserAction(account: Account) {
    rl.question(
        "Choose an action: (D)eposit, (W)ithdraw, (B)alance, or (Q)uit: ",
        (choice) => {
            switch (choice.toUpperCase()) {
                case "D":
                    rl.question("Enter deposit amount: ", (depositAmountStr) => {
                        const depositAmount = parseFloat(depositAmountStr);
                        account.deposit(depositAmount);
                        askUserAction(account);
                    });
                    break;
                case "W":
                    rl.question("Enter withdrawal amount: ", (withdrawAmountStr) => {
                        const withdrawAmount = parseFloat(withdrawAmountStr);
                        account.withdraw(withdrawAmount);
                        askUserAction(account);
                    });
                    break;
                case "B":
                    account.getBalance();
                    askUserAction(account);
                    break;
                case "Q":
                    console.log("Thank you for using the ATM!");
                    rl.close();
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
                    askUserAction(account);
            }
        }
    );
}

main();
