import inquirer from "inquirer";
import chalk from "chalk";
let calculator = await inquirer.prompt([
    {
        name: "value1",
        type: "number",
        message: chalk.green("Please Enter your first number")
    },
    {
        name: "value2",
        type: "number",
        message: chalk.green("Please Enter your second number")
    },
    {
        name: "Operation",
        type: "list",
        message: chalk.green("Please select your operation"),
        choices: ["Add", "Sub", "Mul", "Div"]
    },
]);
// console.log(calculator.Operation == "Add")
if (calculator.Operation == "Add") {
    console.log(chalk.blue(calculator.value1 + calculator.value2));
}
else if (calculator.Operation == "Sub") {
    console.log(chalk.red(calculator.value1 - calculator.value2));
}
else if (calculator.Operation == "Mul") {
    console.log(chalk.yellow(calculator.value1 * calculator.value2));
}
else if (calculator.Operation == "Div") {
    // if(calculator.value2 == 0)
    // {
    //     console.log(chalk.black("Math error"))
    // }
    // else
    console.log(chalk.white(calculator.value1 / calculator.value2));
}
else
    console.log(chalk.magenta("Please Enter Valid option"));
