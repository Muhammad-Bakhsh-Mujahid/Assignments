import questions, { getMarks, totalMarks } from "./exportquiz.js";
import chalk from "chalk";
questions;
// if(questions.Q1 == "a) Quid-e-Azam"){
//     console.log(chalk.bold.green("Very Well! You Selected The Right Answer"))
//     getMarks++;
// }
// else{
//     console.log(chalk.red("Bad Luck! You Selected The wrong Answer, Right Answer Was Quid-e-Azam"))
//     getMarks;
// }
// if(questions.Q2 == "a) Punjab"){
//     console.log(chalk.bold.green("Very Well! You Selected The Right Answer"))
//     getMarks++;
// }
// else {
//     console.log(chalk.red("Bad Luck! You Selected The wrong Answer, Right Answer Was Punjab"))
//         getMarks;
// }
// if(questions.Q3 == "b) PK"){
//     console.log(chalk.bold.green("Very Well! You Selected The Right Answer"))
//     getMarks++;
// }
// else {
//     console.log(chalk.red("Bad Luck! You Selected The wrong Answer, Right Answer Was PK"))
//     getMarks
// }
// if(questions.Q4 == "d) Kharian Cantt"){
//     console.log(chalk.bold.green("Very Well! You Selected The Right Answer"))
//     getMarks++;
// }
//     else{
//     console.log(chalk.red("Bad Luck! You Selected The wrong Answer, Right Answer Was Kharian Cantt"))
//     getMarks
// }
// if(questions.Q5 == "c) 1999"){
//     console.log(chalk.bold.green("Very Well! You Selected The Right Answer"))
//     getMarks++;
// }
// else 
// {
//     console.log(chalk.red("Bad Luck! You Selected The wrong Answer, Right Answer Was 1999"))
//     getMarks;
// }
if (getMarks == totalMarks) {
    console.log(chalk.greenBright(`Congratulations! You Answered All Questions Correctly And You Got Full Marks ${getMarks}/${totalMarks}`));
}
else if (getMarks >= 3 && getMarks < 5) {
    console.log(chalk.blueBright(`Passed! Nice You Got ${chalk.white.bold.underline(getMarks)}/${chalk.white.bold.underline(totalMarks)} Marks`));
}
else {
    console.log(chalk.redBright(`Failed!Better Luck Next Time You Got ${chalk.white.bold.underline(getMarks)}/${chalk.white.bold.underline(totalMarks)} Marks`));
}
