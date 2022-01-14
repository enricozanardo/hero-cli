const CFont = require("cfonts")
const clear = require("clear")

import readlineSync from "readline-sync";


const enum Commands {
    start = "Start the application... ",
    stop = "Stopping the application.."
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

    loadCli();
}

const cmdStop = async () => {
    console.log('Stop is called.');

    loadCli();
}

export const cli = async () => {
    
    clear()

    CFont.say(`Hero-CLI`, {
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
            Commands.stop 
        ],
        index = menu.keyInSelect(commands, "Commands")

        switch (commands[index]) {
            case Commands.start:
                cmdStart();
                break;
            case Commands.stop:
                cmdStop();
                break;
            default:
                cli()
                break;
        }

}