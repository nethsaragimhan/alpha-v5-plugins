

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

const hacker = `\n\n\n A hacker is a person skilled in information technology who uses their technical knowledge to achieve a goal or overcome an obstacle, within a computerized system by non-standard means. Though the term hacker has become associated in popular culture with a security hacker – someone who utilizes their technical know-how of bugs or exploits to break into computer systems and access data which would otherwise be unavailable to them – hacking can also be utilized by legitimate figures in legal situations. For example, law enforcement agencies sometimes use hacking techniques in order to collect evidence on criminals and other malicious actors. This could include using anonymity tools (such as a VPN, or the dark web) to mask their identities online, posing as criminals themselves.[1][2] Likewise, covert world agencies can employ hacking techniques in the legal conduct of their work. Oppositely, hacking and cyber-attacks are used extra- and illegally by law enforcement and security agencies (conducting warrantless activities), and employed by State actors as a weapon of both legal and illegal warfare.😎`

const programmer  = `\n\n\nA computer programmer, sometimes called a software developer, a programmer or more recently a coder (especially in more informal contexts), is a person who creates computer software. The term computer programmer can refer to a specialist in one area of computers or to a generalist who writes computer programs.

A programmer's most often-used computer language (e.g., Assembly, C, C++, C#, JavaScript, Lisp, Python, Java) may be prefixed to the term programmer. Some who work with web programming languages also prefix their titles with web.😎`

const other = `\n\n\nSELECT YOUR FAVOURITE AMBITION 😎♥️`

if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
        
        var logo = await axios.get (`https://telegra.ph/file/d85f2c2806053601295e9.jpg`, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '😈 HACKER ⚜️'+hacker}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '⚕️ PROGRAMMER 😎'+programmer}, type: 1},
  {buttonId: 'MEHN', buttonText: {displayText: '⚕️ OTHER 😌'+other}, type: 1},
 ]

const btn = {
    contentText: "  ```Hey There! I'm Online now. ⚜️```\n\n⚕️ My name : ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️\n\n ⚜️ Developer: HIRUWA\n\n⚜️ Thank You For Using ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️\n\n WHAT IS YOUR AMBITION 😎",
    footerText: 'BY ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️ ▷',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}

            
            
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
    
    var logo = await axios.get (Config.AL , { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '😈 HACKER ⚜️'+hacker}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '⚕️ PROGRAMMER 😎'+programmer}, type: 1},
  {buttonId: 'MEHN', buttonText: {displayText: '⚕️ OTHER 😌'+other}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: Config.ALIVEMSG + "\n\n WHAT IS YOUR AMBITION 😎⚜️",
    footerText: 'BY ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️ ▷',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
      //  await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️*\n\n` + 
                '```Installed version :```\n' +
                ' V 1.0.0 Public'+
                `\n\n🍁 Check github for bot: `
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
        
        
        var logo = await axios.get (`https://telegra.ph/file/d85f2c2806053601295e9.jpg`, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '😈 HACKER ⚜️'+hacker}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '⚕️ PROGRAMMER 😎'+programmer}, type: 1},
  {buttonId: 'MEHN', buttonText: {displayText: '⚕️ OTHER 😌'+other}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "```Hey There! I'm Online now. ⚜️```\n\n⚕️ My name : ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️\n\n ⚜️ Developer: HIRUWA\n\n⚜️ Thank You For Using ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️\n\n  WHAT IS YOUR AMBITION 😎⚜️",
    footerText: 'BY ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️ ▷',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}

            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
      //  await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. ⚜️```\n\n⚕️ My name : ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️\n\n ⚜️ Developer: HIRUWA\n\n⚜️ Thank You For Using ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
    
    var logo = await axios.get (Config.AL, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })


        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '😈 HACKER ⚜️'+hacker}, type: 1},//jakakkak
  {buttonId: 'MEN', buttonText: {displayText: '⚕️ PROGRAMMER 😎'+programmer}, type: 1},
  {buttonId: 'MEHN', buttonText: {displayText: '⚕️ OTHER 😌'+other}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText:  Config.ALIVEMSG + "\n\n\nWHAT IS YOUR AMBITION 😎⚜️",
    footerText: 'BY ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️▷',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        //await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️*\n\n` + 
                '```Installed version :```\n' +
                ' V 1.0.0 - Public'+
                `\n\n🍁 Check github for bot:  `
           , MessageType.text);
            
        }));
}