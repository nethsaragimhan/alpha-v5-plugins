

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get ('https://telegra.ph/file/72caf817d141c24cab7cb.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. 🍁```\n\n🍁 My name : ❰🍁🔱 T Rex BOT 🔱🍁❱\n\n🍁 Developer: HIRUWA\n\n🍁Thank You For Using ❰🍁🔱  T Rex BOT  🔱🍁❱"})

    }
    else {
            
            var image = await axios.get ('https://telegra.ph/file/72caf817d141c24cab7cb.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*❰🍁🔱  T Rex BOT  🔱🍁❱*' })
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
                `*❰🍁🔱  T Rex BOT  🔱🍁❱*\n\n` + 
                '```Installed version :```\n' +
                Lang.version + 
                `\n\n🍁 Check github for bot: https://github.com/Dark-Knight-Hiruwa/T-REX`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get ('https://telegra.ph/file/72caf817d141c24cab7cb.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```🍁 Hey There! I'm Online now. 😘```\n\n🍁 Developer: Hiruwa\n\nThank You For Using ❰🍁🔱 T Rex BOT 🔱🍁❱" ,quoted: message.data})

    }
    else {
            
            var image = await axios.get ('https://telegra.ph/file/72caf817d141c24cab7cb.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*❰🍁🔱 T Rex BOT 🔱🍁❱*' ,quoted: message.data})
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
                `*❰🍁🔱  T Rex BOT  🔱🍁❱*\n\n` + 
                '```Installed version :```\n' +
                Lang.version + 
                `\n\n🍁 Check github for bot:  https://github.com/Dark-Knight-Hiruwa/T-REX`
           , MessageType.text);
            
        }));
}