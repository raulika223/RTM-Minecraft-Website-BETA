console.clear();

//#region > Variables + Modules

var PS3IP = "192.168.1.46";
var PROCESS = "17105408"

const fetch = require('node-fetch');

//#endregion

HUD_RED();

//#region > Functions

function WriteMemory(offset, values)
{
    var bytes = (values.replace(' ', '+'))
    fetch(`http://${PS3IP}/setmem.ps3mapi?proc=${PROCESS}&addr=${offset}&val=${bytes}`)
    console.log("Memory has been written.")
}

//#endregion


function HUD_DEFAULT()
{
    WriteMemory("0x30DBAD64", "3F 80")
}

function HUD_RED()
{
    WriteMemory("0x30DBAD64", "4F 80")
}
