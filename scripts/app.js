/*REQUIREMENTS

Create an object called account that has the following properties:

accountName, should be the data type string

This property should contain the name of the account holder



- balance, should be the data type number

this property should contain the total amount of the account



 - getBalance, should be a function

this function should display the total amount of the account to the user



 - deposit, also a function

 this function should be able to deposit money onto the balance of the account



 - withdrawal, also a function

 this function should be able do withdraw money from the balance of the account



 - getAccountName, function as well

 this function should display the account holders name to the user



 - accountError, same as above function!

 this one is a bit tricky... it's up to you to figure out how or what you should use this for.

HINT: it's more a thinking poblem than a technical problem :)



EXTRA: exitAccount, should be a function

this function should exit the account

HINT: there are a few different ways to do this, it's up to you which way you choose.



EXTRA = OPTIONAL NOT MANDATORY



Remember that a function is just a value. And if a function is just a

value then we can both pass it as a parameter to a function and

pass it as a property of an object.



The object should handle all of the functionality (logic)



The atm() function should be responsible for showing the user interface

and based on the user input show the right meny choice
*/

let account = {
    error: "",
    accountName: "",
    balance: 0,
    getBalance: function () {
        console.log("The Balance amount in the account : " + this.balance);
        atm();
    },
    deposit: function () {
        var amount = prompt("Enter the amount to be deposited : ");
        if (amount.match("^[0-9]*$")) {
            amount = parseFloat(amount);
            if (amount <= 0) {
                this.error = "The amount to be deposited is less than or 0";
                this.accountError(this.error);
            }
            else {
                this.balance = parseFloat(this.balance) + parseFloat(amount);
                console.log("The amount " + amount + " is deposited in the account");
                this.getBalance();
            }
        }
        else {
            this.error = "Not a valid amount, Try again!";
            this.accountError(this.error);
        }

    },
    withDrawal: function () {
        if (this.balance > 0) {
            var amount = prompt("Enter the amount to be withdrawed : ");
            if (amount.match("^[0-9]*$")) {

                amount = parseFloat(amount);
                if (amount > this.balance) {
                    this.error = "The amount to be withdrawed is greater than balance amount"
                    this.accountError(this.error);
                }
                else if (this.balance > 0 && this.balance >= amount) {
                    this.balance = parseFloat(this.balance) - parseFloat(amount);
                    console.log("The amount " + amount + " is withdrawn from the account");
                    this.getBalance();
                }
            }
            else {
                this.error = "Not a valid amount, Try again!";
                this.accountError(this.error);
            }

        }
        else {
            console.log("Oops! No sufficient balance.");
            atm();
        }


    },
    getAccountName: function () {
        if (this.accountName) {
            console.log("The account holders name : " + this.accountName);
            atm();
        }
        else if (!this.accountName) {
            const name = prompt("Enter the account holder name : ");
            if (name.match("^[a-zA-Z]+$")) {
                this.accountName = name;
                console.log("The account holders name : " + this.accountName);
                atm();
            }
            else {
                this.error = "Not a valid name";
                this.accountError(this.error);
            }
        }
    },
    accountError: function (errorMsg) {
        console.log("Error : " + errorMsg);
        atm();
    },
    exitAccount: function () {
        console.log("Exiting Account!");
        return;
    }
}

function atm() {
    const message = parseFloat(prompt("Welcome! \nSelect a choice \n1. Check your balance \n2. Make a deposit\n3. Make a withdrawal\n4. Get account name \n5. Exit"));
    switch (message) {
        case 1:
            account.getBalance();
            break;
        case 2:
            account.deposit();
            break;
        case 3:
            account.withDrawal();
            break;
        case 4:
            account.getAccountName();
            break;
        case 5:
            account.exitAccount();
            break;
        default:
            atm();
    }
}
atm();