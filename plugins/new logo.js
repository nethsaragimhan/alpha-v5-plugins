const Nima = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let wk = Config.WORKTYPE == 'public' ? false : true



    Nima.addrex({pattern: 'lpack', fromMe: false,  deleteCommand: false }, (async (message, match) => {
            var image = await axios.get ('https://telegra.ph/file/f3b0b4e681583334b7330.jpg', {responseType: 'arraybuffer'}) 
            await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `═══⦁ LOGO LIST ⦁═══

🖊️ .light
🪁 Light සමග ඔබේ අකුරු එක් කර සාදයි 

🖊️ .neon
🪁 Neon සමග ඔබේ අකුරු එක් කර සාදයි 

🖊️ .gneon 
🪁 Green neon සමග ඔබේ අකුරු එක් කර සාදයි  

🖊️ .glow
🪁 Glow සමග ඔබේ අකුරු එක් කර සාදයි 

🖊️ .firework
🪁 Fire Work සමග ඔබේ අකුරු එක් කර සාදයි 

🖊️ .led
🪁 Led සමග ඔබේ අකුරු එක් කර සාදයි 

🖊️ .grafiti
🪁 Grafiti සමග ඔබේ අකුරු එක් කර සාදයි 
 

© ʟᴏɢᴏᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ɴɪᴍᴀ 
🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ`,quoted: message.data}) 

    }));

    

Nima.addrex({ pattern: 'round ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
    const link = await axios.get('https://leyscoders-api.herokuapp.com/api/img/circle?url=${encodeURIComponent' + match[1] + '&apikey=dappakntlll')
    const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})




Nima.addrex({ pattern: 'light ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/light?text=' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})





Nima.addrex({ pattern: 'neon ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/neon?text=' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})

 




Nima.addrex({ pattern: 'gneon ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/gneon?text=' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})




Nima.addrex({ pattern: 'glow ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/glow?text=r' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})




Nima.addrex({ pattern: 'firework ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/firework?text=' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})




Nima.addrex({ pattern: 'led ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/led-text?text=' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})



Nima.addrex({ pattern: 'grafiti ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/grafiti?text=' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})








Nima.addrex({ pattern: 'future ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/future?text=' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})




Nima.addrex({ pattern: 'smetal ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/smetal?text=' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})





Nima.addrex({ pattern: 'anciant ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/ancient?text=' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})




Nima.addrex({ pattern: 'clout ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/cloud?text=rest%20api&apikey=sanuwa' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})





Nima.addrex({ pattern: 'matrix ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/matrix?text=' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})



Nima.addrex({ pattern: 'pencil ?(.*)', fromMe: wk,  dontaddrexList: true, deleteCommand: false }, async (message, match) => {
  
if (!match[1]) return await message.client.sendMessage(message.jid,'කමාන්ඩ් එකට පසු ඔබේ  වචනය යොදන්න !', MessageType.text, { quoted: message.data });
  
  const link = await axios.get('https://sanuw-api.herokuapp.com/docs/textpro/pencil?text=' + match[1] + '&apikey=sanuwa')
  const img = await axios.get(link.data.url , { responseType: 'arraybuffer'})
  
  await message.sendMessage(Buffer.from(img.data), MessageType.image , { caption: 'ᴍʀ ɴɪᴍᴀ 🎭  ᴘᴏᴡᴇʀᴅ ʙʏ ᴀʟᴘʜᴀ ᴡᴀ ʙᴏᴛ ᴛᴇᴀᴍ' ,quoted: message.data  }) 
})
    }));
