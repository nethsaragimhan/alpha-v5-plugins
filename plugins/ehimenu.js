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

let whb = Config.WORKTYPE == 'public' ? false : true

Alpha.addrex({pattern: 'ehi', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

// send a buttons message!

    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '🕹️ ️How to use 🕹️  \n\n\ninjecter  free internet ➢➢️ Free Internet යන්න නම් අනිවාර්යෙන් පැකේජ් එකක් Active කරලා තියෙන්න ඕනේ ඒ කියන්නේ Mobitel/Dialog/Hutch/Airtel/SLT ඔය නෙට්වර්ක් වල පැකේජ් තියනවා ඔයාලට ඒවා Active කරගන්න පුළුවන්.දැන් ඔයාලගේ Http Injector කියන ඇප් එක ඩවුන්ලෝඩ් කරගන්න ඕනේ,ඒක  තියෙනවා Playstore එකේ.ඊළඟට Free Internet යන්න නම් ඔයාලට EHI File ඕන වෙනවා ඒවා අපේ ගෲප් එකෙන් ගන්න පුලුවන්  ehi file කියන්නේ මොනවද : EHI File කියන්නේ Http Injector එකේ  Config file එකක් , කොටින්ම කිව්වොත් මේකෙන් වෙන්නේ අපි WhatsApp Package Active කරොත් අපිට Free දෙන්නෙ වට්ස්ඇප් විතරයි Http Injector එකට package එකට අදාල ehi file එක දාල Connect කරොත් වෙන්නේ අපි වට්ස්ඇප් යන වගේ පෙන්නලා අපි අපිට ඕනි වෙබ් එකකට යන්න පුළුවන් 🤗.මේකට කරන්න ඕනේ ඔයා ඇක්ටිව් කරගෙන ඉන්නේ පැක් එකට අදාල ehi file එක හොයාගෙන ඒක ඩවුන්ලෝඩ් කරගන්න ඊට පස්සේ ඒක උඩ ක්ලික් කරාම Http Injector එකෙන් ඕපන් කරන්න කියලා එයි ඒක click කරාම Http Injector එකෙන් ඕපන් වෙනවා ඊට පස්සේ start කියන බටන් එක ඔබන්න.'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: '💉 Injecter App 💉   \n\n\nhttps://play.google.com/store/apps/details?id=com.evozi.injector \n\n\n or Get apk type .apkehi'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: '🔥️‍ Thank You For Using 🔥️   \n\n\n Our Ehi store '}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: "EHI COLLECTION 🛑ᴘᴀᴡᴇᴅ ʙʏ:♻️SUCCESS♻️/ 🛡️(ALPHA)🛡️ᵀᴹ \n\n\n❌𝙽𝙾  𝚂𝙿𝙰𝙼 \n ❌𝙽𝙾  𝙳𝙳𝙾𝚂\n ❌𝙽𝙾  𝙷𝙰𝙲𝙺𝙸𝙽𝙶\n❌𝙽𝙾  𝙲𝙰𝚁𝙳𝙸𝙽𝙶 \n✔️𝙽𝙾  𝚃𝙾𝚁𝚁𝙴𝙽𝚃 \n ❌𝙽𝚘  𝙾𝚅𝙴𝚁  𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 \n ❌𝙽𝙾  𝙼𝚄𝙻𝚃𝙸 𝙻𝙾𝙶𝙸𝙽 \n\n\n ♻️𝚈𝙾𝚄 𝚃𝚄𝙱𝙴 \n♻️𝙵𝙰𝙲𝙴 𝙱𝙾𝙾𝙺\n♻️𝚉𝙾𝙾𝙼\n♻️𝙸𝙼𝙾\n♻️𝙽𝙴𝚃𝙵𝙸𝚇\n♻️𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿\n\n\n⚜️𝙳𝙸𝙰𝙻𝙾𝙶 0\n⚜️𝙼𝙾𝙱𝙸𝚃𝙴𝙻 0\n⚜️𝙰𝚁𝙸𝚃𝙴𝙻 ᴸᴷ 0\n⚜️𝙷𝚄𝚃𝙲𝙷 ᴸᴷ 0\n⚜️ 𝙴𝚃𝙸𝚂𝙴𝙻𝙰𝚃 ᴸᴷ 0\n\n\n  Any WhatsApp  - .wehi \n\n  Any Facebook - .fehi \n\n  Any Zoom - .zehi \n\n D-zoom - .dzehi \n\n  Any Youtube - .yehi \n\n Any Netflix - .nfehi \n\n Any Imo - .iehi \n\n Hutch0 - .h0ehi \n\n Dialog0 - .d0ehi \n\n Aritel0 - .a0ehi\n\n Moditel0 - .m0ehi  \n\n   All EHI Files - .allehi \n\n\n\n  ◈ 𝐄𝐡𝐢 𝐃𝐞𝐯𝐞𝐥𝐨𝐩 𝐁𝐲 ◈ツ.⃢𝑺𝑼𝑹𝑨𝑱 .⃢𝑷𝒓𝒂𝒎𝒐𝒅𝒚𝒂😈",

          footerText: '🎭🇱🇰𝙰𝙻𝙿𝙷𝙰🇱🇰🎭 v5',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
