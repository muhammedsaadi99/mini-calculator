#! /usr/bin/env node
import { sum, subtract, multiply, division } from "./operations.js";
import inquirer from "inquirer";
const calculation = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your 1st Number: ",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your 2nd Number: ",
    },
    {
        type: "list",
        name: "operator",
        message: "Select Operation ",
        choices: ["+", "-", "*", "/"],
    },
]);
if (calculation.operator == "+") {
    sum(calculation.num1, calculation.num2);
}
else if (calculation.operator == "-") {
    subtract(calculation.num1, calculation.num2);
}
else if (calculation.operator == "*") {
    multiply(calculation.num1, calculation.num2);
}
else if (calculation.operator == "/") {
    division(calculation.num1, calculation.num2);
}
else {
    console.log("Invalid Operation 😵‍💫");
}
