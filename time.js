#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let value = await inquirer.prompt({
    type: "number",
    name: "timeValue",
    message: chalk.green("ENTER THE TIME :"),
    validate(ans) {
        if (ans) {
            return true;
        }
        return chalk.red(`PLEASE ENTER VALID NUMMBER!`);
    }
});
let timer = (input) => {
    if (input <= 60 && input >= 10) {
        let b = setInterval(() => {
            console.log(chalk.blue(`00:${input}`));
            input = input - 1;
            if (input < 10) {
                clearInterval(b);
                let c = setInterval(() => {
                    console.log(chalk.blue(`00:0${input}`));
                    input = input - 1;
                    if (input == 0) {
                        clearInterval(c);
                        console.log(chalk.yellow(`00:00`, `- TIME ENDED`));
                    }
                }, 1000);
            }
            if (input == 0) {
                clearInterval(b);
            }
        }, 1000);
    }
    else if (input < 10) {
        let c = setInterval(() => {
            console.log(chalk.blue(`00:0${input}`));
            input = input - 1;
            if (input == 0) {
                clearInterval(c);
                console.log(chalk.yellow(`00:00`, `- TIME ENDED`));
            }
        }, 1000);
    }
    else if (input > 60) {
        console.log(chalk.red(`PLEASE ENTER BELOW 60s`));
    }
    else {
        console.log(chalk.red(`INVALID INPUT`));
    }
};
timer(value.timeValue);
