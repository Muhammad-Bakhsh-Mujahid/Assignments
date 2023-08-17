import inquirer from "inquirer";
import chalk from "chalk";
export let totalMarks = 5;
export let getMarks = 0;
console.log(chalk.blue.bold("Please answer the following MCQ's"));
let questions = await inquirer.prompt([
    {
        name: "Q1",
        type: "list",
        message: chalk.yellow("Who inaugurated the State Bank of Pakistan?"),
        choices: ["a) Quid-e-Azam", "b) Malik Ghulam Muhammad", "c) Liaquat Ali Khan", "d) Allama Muhammad Iqbal"]
    },
    {
        name: "Q2",
        type: "list",
        message: chalk.yellow("Sardar Abdur Rub Nishtar was the Governor of?"),
        choices: ["a) Punjab", "b) Gilgit Baltistan", "c) Sindh", "d) KPK"]
    },
    {
        name: "Q3",
        type: "list",
        message: chalk.yellow("National code of Pakistan is?"),
        choices: ["a) PAK", "b) PK", "c) PAK1", "d) None of them"]
    },
    {
        name: "Q4",
        type: "list",
        message: chalk.yellow("Identify the largest cantonment of Pakistan?"),
        choices: ["a) Karachi Cantt", "b) Okara Cantt", "c) Quetta Cantt", "d) Kharian Cantt"]
    },
    {
        name: "Q5",
        type: "list",
        message: chalk.yellow("The Kargil incident happened in?"),
        choices: ["a) 1998", "b) 1965", "c) 1999", "d) 1975"]
    },
]);
if (questions.Q1 == "a) Quid-e-Azam") {
    console.log(chalk.bold.green("Very Well! You Selected The Right Answer"));
    getMarks = getMarks + 1;
}
else {
    console.log(chalk.red("Bad Luck! You Selected The wrong Answer, Right Answer Was Quid-e-Azam"));
    getMarks;
}
if (questions.Q2 == "a) Punjab") {
    console.log(chalk.bold.green("Very Well! You Selected The Right Answer"));
    getMarks = getMarks + 1;
}
else {
    console.log(chalk.red("Bad Luck! You Selected The wrong Answer, Right Answer Was Punjab"));
    getMarks;
}
if (questions.Q3 == "b) PK") {
    console.log(chalk.bold.green("Very Well! You Selected The Right Answer"));
    getMarks = getMarks + 1;
}
else {
    console.log(chalk.red("Bad Luck! You Selected The wrong Answer, Right Answer Was PK"));
    getMarks;
}
if (questions.Q4 == "d) Kharian Cantt") {
    console.log(chalk.bold.green("Very Well! You Selected The Right Answer"));
    getMarks = getMarks + 1;
}
else {
    console.log(chalk.red("Bad Luck! You Selected The wrong Answer, Right Answer Was Kharian Cantt"));
    getMarks;
}
if (questions.Q5 == "c) 1999") {
    console.log(chalk.bold.green("Very Well! You Selected The Right Answer"));
    getMarks++;
}
else {
    console.log(chalk.red("Bad Luck! You Selected The wrong Answer, Right Answer Was 1999"));
    getMarks;
}
export default questions;
