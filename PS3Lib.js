var PS3IP = "192.";
var PROCESS = "17105408";

//#region > FUNCTIONS PS3LIB 

function GetIP(IP)
{
    PS3IP = IP;
}

function Connect()
{
    DoNotif("Welcome to DownCraft Website")
}

function WriteMemory(offset, values)
{
    var bytes = (values.replace(' ', '+'))
    fetch(`http://${PS3IP}/setmem.ps3mapi?proc=${PROCESS}&addr=${offset}&val=${bytes}`)
}

function ReadString(offset)
{
    //LATER
}

function DoNotif(message)
{
    fetch(`http://${PS3IP}/notify.ps3mapi?msg=${message}&icon=0&snd=0`)
}

//#endregion

//#region > OFFSET & OFFSETS

function GOD_MODE_ON()
{
    WriteMemory("0x004B2021", "80")
    DoNotif("God Mode: Enabled")
}

function GOD_MODE_OFF()
{
    WriteMemory("0x004B2021", "20")
    DoNotif("God Mode: Disabled")
}

//#endregion