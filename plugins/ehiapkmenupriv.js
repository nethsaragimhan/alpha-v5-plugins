const Alpha = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvQml4Ynkv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'private' ? false : true

Alpha.addrex({pattern: 'eapk', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

// send a buttons message!

    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '🕹️ ️How to use 🕹️  \n\n\ninjecter  free internet ➢➢️ Free Internet යන්න නම් අනිවාර්යෙන් පැකේජ් එකක් Active කරලා තියෙන්න ඕනේ ඒ කියන්නේ Mobitel/Dialog/Hutch/Airtel/SLT ඔය නෙට්වර්ක් වල පැකේජ් තියනවා ඔයාලට ඒවා Active කරගන්න පුළුවන්.දැන් ඔයාලගේ Http Injector කියන ඇප් එක ඩවුන්ලෝඩ් කරගන්න ඕනේ,ඒක  තියෙනවා Playstore එකේ.ඊළඟට Free Internet යන්න නම් ඔයාලට EHI File ඕන වෙනවා ඒවා අපේ ගෲප් එකෙන් ගන්න පුලුවන්  ehi file කියන්නේ මොනවද : EHI File කියන්නේ Http Injector එකේ  Config file එකක් , කොටින්ම කිව්වොත් මේකෙන් වෙන්නේ අපි WhatsApp Package Active කරොත් අපිට Free දෙන්නෙ වට්ස්ඇප් විතරයි Http Injector එකට package එකට අදාල ehi file එක දාල Connect කරොත් වෙන්නේ අපි වට්ස්ඇප් යන වගේ පෙන්නලා අපි අපිට ඕනි වෙබ් එකකට යන්න පුළුවන් 🤗.මේකට කරන්න ඕනේ ඔයා ඇක්ටිව් කරගෙන ඉන්නේ පැක් එකට අදාල ehi file එක හොයාගෙන ඒක ඩවුන්ලෝඩ් කරගන්න ඊට පස්සේ ඒක උඩ ක්ලික් කරාම Http Injector එකෙන් ඕපන් කරන්න කියලා එයි ඒක click කරාම Http Injector එකෙන් ඕපන් වෙනවා ඊට පස්සේ start කියන බටන් එක ඔබන්න.'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: '💉 Get Ehi💉  \n\n\n type .ehi'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: '🔥️‍ Thank You For Using 🔥️   \n\n\n Our Ehi Apk store '}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: "EHI APK COLLECTION 🛑ᴘᴀᴡᴇᴅ ʙʏ:♻️SUCCESS♻️/ 🛡️(ALPHA)🛡️ᵀᴹ\n\n\n\n Http Injecter - .httpapk\n\nHttp injecter ilte - .httplapk\n\nStock injcter - .sksapk\n\nTLS injecter - .tslapk\n\n",

          footerText: '🎭🇱🇰𝙰𝙻𝙿𝙷𝙰🇱🇰🎭 v5',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
