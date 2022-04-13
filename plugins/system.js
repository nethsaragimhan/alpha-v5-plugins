

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

const Owner = `\n\n\n 👨‍💻 OWNER NUMBER ->  https://bit.ly/3OavDEg`

const git  = `\n\n\n 🖥️ GITHUB LINK ->  https://bit.ly/3KRtfjC`

const web = `\n\n\n 🌐 WEBSITE LINK ->  https://bit.ly/3xmcp8H`

const error = `\n\n\n ❇️ ERROR FIX WEBSITE ->  https://bit.ly/3EoP0Fr`

const yt = `\n\n\n 📽️ YOUTUBE LINK ->  https://bit.ly/38PtIVF`

const all = `\n\n\n ㊙️ ALL SOCIAL LINK ->  https://bit.ly/3M10jG9`


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
        
        var logo = await axios.get (`https://telegra.ph/file/d85f2c2806053601295e9.jpg`, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '👨‍💻 OWNER NUMBER'+Owner}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🖥️ GITHUB LINK'+git}, type: 1},
  {buttonId: 'MEHk', buttonText: {displayText: '🌐 WEBSITE LINK'+web}, type: 1},
  {buttonId: 'MEHm', buttonText: {displayText: '❇️ ERROR FIX WEBSITE'+error}, type: 1},
  {buttonId: 'MEHl', buttonText: {displayText: '📽️ YOUTUBE LINK'+yt}, type: 1},
  {buttonId: 'MEHo', buttonText: {displayText: '㊙️ ALL SOCIAL LINK'+all}, type: 1},            
 ]

const btn = {
    contentText: "\nHey There! I'm Online now. 🎭\n\n\n🎭 My name :  🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭\n\n🇱🇰🎭  Developer: ACHIYA\n\n\n\n🇱🇰🎭 Thank You For Using 🇱🇰🎭\n",
    footerText: 'BY 🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭▷',
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
  {buttonId: 'MENU', buttonText: {displayText: '👨‍💻 OWNER NUMBER'+Owner}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🖥️ GITHUB LINK'+git}, type: 1},
  {buttonId: 'MEHk', buttonText: {displayText: '🌐 WEBSITE LINK'+web}, type: 1},
  {buttonId: 'MEHm', buttonText: {displayText: '❇️ ERROR FIX WEBSITE'+error}, type: 1},
  {buttonId: 'MEHl', buttonText: {displayText: '📽️ YOUTUBE LINK'+yt}, type: 1},
  {buttonId: 'MEHo', buttonText: {displayText: '㊙️ ALL SOCIAL LINK'+all}, type: 1},      
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: Config.ALIVEMSG + "\n\n WHAT IS YOUR AMBITION 😎⚜️",
    footerText: 'BY 🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭▷',
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
                `*🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭*\n\n` + 
                '```Installed version :```\n' +
                ' V 5.0.0 Public'+
                `\n\n Check github for bot: `
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
  {buttonId: 'MENU', buttonText: {displayText: '👨‍💻 OWNER NUMBER'+Owner}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🖥️ GITHUB LINK'+git}, type: 1},
  {buttonId: 'MEHk', buttonText: {displayText: '🌐 WEBSITE LINK'+web}, type: 1},
  {buttonId: 'MEHm', buttonText: {displayText: '❇️ ERROR FIX WEBSITE'+error}, type: 1},
  {buttonId: 'MEHl', buttonText: {displayText: '📽️ YOUTUBE LINK'+yt}, type: 1},
  {buttonId: 'MEHo', buttonText: {displayText: '㊙️ ALL SOCIAL LINK'+all}, type: 1},        
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "\nHey There! I'm Online now. 🎭\n\n\n🎭 My name :  🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭\n\n🇱🇰🎭  Developer: ACHIYA\n\n\n\n🇱🇰🎭 Thank You For Using 🇱🇰🎭\n",
    footerText: 'BY 🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭▷',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}

            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
      //  await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "\nHey There! I'm Online now. 🎭\n\n\n🎭 My name :  🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭\n\n🇱🇰🎭  Developer: ACHIYA\n\n\n\n🇱🇰🎭 Thank You For Using 🇱🇰🎭\n"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
    
    var logo = await axios.get (Config.AL, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })


        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '👨‍💻 OWNER NUMBER'+Owner}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🖥️ GITHUB LINK'+git}, type: 1},
  {buttonId: 'MEHk', buttonText: {displayText: '🌐 WEBSITE LINK'+web}, type: 1},
  {buttonId: 'MEHm', buttonText: {displayText: '❇️ ERROR FIX WEBSITE'+error}, type: 1},
  {buttonId: 'MEHl', buttonText: {displayText: '📽️ YOUTUBE LINK'+yt}, type: 1},
  {buttonId: 'MEHo', buttonText: {displayText: '㊙️ ALL SOCIAL LINK'+all}, type: 1},     
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText:  Config.ALIVEMSG + "\n\n\nWHAT IS YOUR AMBITION 😎⚜️",
    footerText: 'BY 🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭▷',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        //await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭*' })
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
                `*🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭*\n\n` + 
                '```Installed version :```\n' +
                ' V 5.0.0 - Public'+
                `\n\n Check github for bot:  `
           , MessageType.text);
            
        }));
}
