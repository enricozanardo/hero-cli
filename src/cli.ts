const CFont = require("cfonts")
const clear = require("clear")


export const cli = async () => {
    
    clear()

    CFont.say(`Hero-CLI`, {
        align: "center",
        font: "block",
        colors:["yellow"]
    })


}