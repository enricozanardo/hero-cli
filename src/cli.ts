const CFont = require("cfonts")
const clear = require("clear")
import { exec } from "shelljs";

import readlineSync from "readline-sync";


import { compile } from "./businessLogic"


const enum Commands {
    start = "Start the application... ",
    stop = "Stopping the application..",
    close = "Close Application"
}


const loadCli = () => {
    setTimeout( () => {
        back()
    }, 2000);
}

const back = () => {
    if (readlineSync.keyInYN("Go back?")) {
        cli()
    } else {
        process.exit();
    }
}

const cmdStart = async () => {
    console.log('Start called.');
    compile()

    loadCli();
}

const cmdStop = async (name: string) => {
    console.log(`Stop is called. ${name}`);

    loadCli();
}

export const cli = async () => {
    
    clear()

    CFont.say(`Hero`, {
        align: "center",
        font: "block",
        colors:["yellow", "#f80"]
    })

    CFont.say(`Version: 0.1 - Enrico Zanardo`, {
        align: "center",
        font: "console",
        colors:["yellow"]
    })

    var menu = require("readline-sync"), 
        commands = [ 
            Commands.start,
            Commands.stop,
            Commands.close 
        ],
        index = menu.keyInSelect(commands, "Commands")

        switch (commands[index]) {
            case Commands.start:
                cmdStart();
                break;
            case Commands.stop:
                let name = readlineSync.question("Please give your name:")
                if(name.length == 0) {
                    console.log("No input provided")
                    cli()
                }
                cmdStop(name);
                break;
            case Commands.close:
                process.exit()
                break;
            default:
                cli()
                break;
        }

}