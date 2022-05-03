const Alpha = require('../events');

const fs = require('fs');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const chalk = require('chalk');

const axios = require('axios');

     

     

               Alpha.addrex({pattern: 'httplapk', fromMe: true,dontaddrexList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/HTTP%20Injector%20lite.apk?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'HTTP Injector lite.apk' , mimetype:  'application/octet-stream' ,quoted: message.data})

        }));

                           Alpha.addrex({pattern: 'httpapk', fromMe: true,dontaddrexList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/HTTP%20Injector.apk?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'HTTP Injector.apk' , mimetype: 'application/octet-stream' ,quoted: message.data})

     }));   

        Alpha.addrex({pattern: 'tlsapk', fromMe: true,dontaddrexList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/TLS%20Tunnel%20.apk?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'TLS Tunnel .apk' , mimetype: 'application/octet-stream' ,quoted: message.data})

   }));     

        Alpha.addrex({pattern: 'sksapk', fromMe: true,dontaddrexList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/Socks%20HTTP.apk?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'Socks HTTP.apk' , mimetype: 'application/octet-stream' ,quoted: message.data})

   }));        


  Alpha.addrex({pattern: 'allehiapk', fromMe: true,dontaddrexList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/HTTP%20Injector%20lite.apk?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'HTTP Injector lite.apk' , mimetype:  'application/octet-stream' ,quoted: message.data})
    
var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/HTTP%20Injector.apk?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'HTTP Injector.apk' , mimetype: 'application/octet-stream' ,quoted: message.data})

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/TLS%20Tunnel%20.apk?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'TLS Tunnel .apk' , mimetype: 'application/octet-stream' ,quoted: message.data})

var document = await axios.get ('https://github.com/Dark-Max-Alpha/ehi/blob/main/Socks%20HTTP.apk?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'Socks HTTP.apk' , mimetype: 'application/octet-stream' ,quoted: message.data})


}));

        
