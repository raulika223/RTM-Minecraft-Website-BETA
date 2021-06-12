//PS3.js created by Misakiii
//Version 1.0.1 

var PS3IP = "192.";
var PROCESS = "17105408";

//#region > FUNCTIONS PS3LIB 

function SendWebHook(url, username, avatar, content)
{
  fetch(
    url,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        avatar_url:
        avatar,
        content:
        content,
      }),
    }
  );
}

function GetIP(IP)
{
    PS3IP = IP;
}

function Connect()
{
    document.getElementById("connect").innerHTML = "Connected!";
    DoNotif("Welcome to DownCraft Website")
    SendWebHook("https://discord.com/api/webhooks/843096918518136862/-goO3dqD5ABQ1DeJf9Ct0cxkpqQhkOyQ9sH7P-UCZPguvOlyF74fq_Kh9Zn96oIAp0_v", "Logs", "https://cdn.discordapp.com/avatars/834048316567191563/9ca0a561db965ca6610a460ebf5e426e.webp?size=1024", "this is a test")
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

function GOD_MODE(toggle)
{
  if (toggle === 1)
  {
    WriteMemory("0x004B2021", "80")
    DoNotif("God Mode: Enabled")
    //document.getElementById("gmod").innerHTML = "God Mode ON";
  }
  else if (toggle === 0)
  {
    WriteMemory("0x004B2021", "20")
    DoNotif("God Mode: Disabled")
    //document.getElementById("gmod").innerHTML = "God Mode OFF";
  }
}

function INSTANT_DAMAGE(toggle)
{
  if (toggle === 1)
  {
    WriteMemory("0x003A3FF0", "40 80")
    DoNotif("Instant Damage: Enabled")
  }
  else if (toggle === 0)
  {
    WriteMemory("0x003A3FF0", "3F 00")
    DoNotif("Instant Damage: Disabled")
  }
}

function KNOCKBACK(toggle)
{
  if (toggle === 1)
  {
    WriteMemory("0x003A4018", "40 80")
    DoNotif("Knockback: Enabled")
  }
  else if (toggle === 0)
  {
    WriteMemory("0x003A4018", "3E CC")
    DoNotif("Knockback: Disabled")
  }
}

function SUPER_JUMP(toggle)
{
  if (toggle === 1)
  {
    WriteMemory("0x003AA77C", "3F 47 7F 42")
    DoNotif("Super Jump: Enabled")
  }
  else if (toggle === 0)
  {
    WriteMemory("0x003AA77C", "3E D7 0A 3D")
    DoNotif("Super Jump: Disabled")
  }
}

function NIGHT_VISION(toggle)
{
  if (toggle === 1)
  {
    WriteMemory("0x00A9A6C8", "7F")
    DoNotif("Night Vision: Enabled")
  }
  else if (toggle === 0)
  {
    WriteMemory("0x00A9A6C8", "3F")
    DoNotif("Night Vision: Disabled")
  }
}

function SUPER_SPEED(toggle)
{
  if (toggle === 1)
  {
    WriteMemory("0x003ABD49", "FF FF FF")
    DoNotif("Super Speed: Enabled")
  }
  else if (toggle === 0)
  {
    WriteMemory("0x003ABD49", "26 AD 89")
    DoNotif("Super Speed: Disabled")
  }
}


//#endregion
