const Alpha = require('../events');

const fs = require('fs');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const chalk = require('chalk');

const axios = require('axios');

     

     

               Alpha.addrex({pattern: 'wehi', fromMe: false,dontaddrexList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/Whatsapp%E2%99%BB%EF%B8%8FSUCCESS%E2%99%BB%EF%B8%8F.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'AnyWhatsapp♻️SUCCESS♻️.ehi' , mimetype:  'application/octet-stream' ,quoted: message.data})

        }));

                           Alpha.addrex({pattern: 'fehi', fromMe: false,dontaddrexList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/YouTube%E2%99%BB%EF%B8%8FSUCCESS%E2%99%BB%EF%B8%8F.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'AnyFacebook♻️SUCCESS♻️.ehi' , mimetype: 'application/octet-stream' ,quoted: message.data})

     }));   

        Alpha.addrex({pattern: 'zehi', fromMe: false,dontaddrexList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/Zoom%E2%99%BB%EF%B8%8FSUCCESS%E2%99%BB%EF%B8%8F.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'AnyZoom♻️SUCCESS♻️.ehi' , mimetype: 'application/octet-stream' ,quoted: message.data})

   }));     

        Alpha.addrex({pattern: 'yehi', fromMe: false,dontaddrexList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/YouTube%E2%99%BB%EF%B8%8FSUCCESS%E2%99%BB%EF%B8%8F.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'AnyYouTube♻️SUCCESS♻️.ehi' , mimetype: 'application/octet-stream' ,quoted: message.data})

   }));        

     

  Alpha.addrex({pattern: 'allehi', fromMe: false,dontaddrexList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/Whatsapp%E2%99%BB%EF%B8%8FSUCCESS%E2%99%BB%EF%B8%8F.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'AnyWhatsapp♻️SUCCESS♻️.ehi' , mimetype:  'application/octet-stream' ,quoted: message.data})

       

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/YouTube%E2%99%BB%EF%B8%8FSUCCESS%E2%99%BB%EF%B8%8F.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'AnyFacebook♻️SUCCESS♻️.ehi' , mimetype: 'application/octet-stream' ,quoted: message.data})

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/Zoom%E2%99%BB%EF%B8%8FSUCCESS%E2%99%BB%EF%B8%8F.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'AnyZoom♻️SUCCESS♻️.ehi' , mimetype: 'application/octet-stream' ,quoted: message.data})

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/YouTube%E2%99%BB%EF%B8%8FSUCCESS%E2%99%BB%EF%B8%8F.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'AnyYouTube♻️SUCCESS♻️.ehi' , mimetype: 'application/octet-stream' ,quoted: message.data})

  

        

}));

        
