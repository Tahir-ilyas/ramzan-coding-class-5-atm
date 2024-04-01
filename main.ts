#!/usr/bin/env node
console.log("Well come to Tahir ATM Machine");

import inquirer from "inquirer";

let myBalance = 25000;
let mypin = 2017;
let pinAnswers = await inquirer.prompt(
    
        {
            name: "pin",
            type: "number",
            message: "enter your pin ",
        });
if(pinAnswers.pin === mypin){
    console.log("correct pin number");

let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["withdraw","fastCash","cashDeposit","balanceInquiry"],
            message: "Please select an option",
        },
    ]);

    if(operationAnswer.operation === "withdraw"){
    let withdrawAnswer = await inquirer.prompt({
                name: "withdraw",
                type:"number",
                message:"enter your withdraw amount",
    });
if(withdrawAnswer.withdraw>myBalance){
    console.log("insufficient balance.try another amount.");
}else{
    myBalance -= withdrawAnswer.withdraw;
    console.log(`your remaining balance is ${myBalance}`);
}
}

else if(operationAnswer.operation === "fastCash"){
    let fastCashAnswer = await inquirer.prompt({
        
        name:"fastCash",
        type: "list",
        choices: ["1000","2000","5000","10000",],
        message:"please select a fastCash option",
        
    });
    if(operationAnswer.fastCash > myBalance){
        console.log("Insufficient balance.cannot withdraw morethan your current balance.");
    }
    else{
        myBalance -= fastCashAnswer.fastCash;
        console.log(`you have successfully withdraw ${fastCashAnswer} \n your remaining balance is ${myBalance}`);
    }
}
else if(operationAnswer.operation === "cashDeposit"){
    let cashDepositAnswer = await inquirer.prompt({
        name:"cashDeposit",
        type:"number",
        message:"Enter the amount you want to deposit",
});
myBalance += cashDepositAnswer.cashDeposit;
console.log(`Enter the amount you want to deposit it ${myBalance}`);
}
else if(operationAnswer.operation === "balanceInquiry"){ 
    let balanceInquiryAnswer = await inquirer.prompt({
        name:"balanceInquiry",
        type:"number",
        message:"enter the check balance ",
    });  
    myBalance -= balanceInquiryAnswer.balanceInquiry; 
console.log(`your current balance is ${myBalance}`);
}
    console.log("Thank you for using Tahir ATM Machine");

}
else {
        console.log("incorect pin !!!");
 };
