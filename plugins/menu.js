

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

const allcmd = `\n\n\n\n

 ╭────────────────
 │ 🎭🇱🇰  𝙰𝙻𝙿𝙷𝙰  🇱🇰🎭️
 ╰────────────────
 ╭────────────────
 │         🇱🇰  BOT  🇱🇰
 │        ──────────
 │
 │▷ .alpha
 │▷ .alive
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
 ╭────────────────
 │       🇱🇰  Sticker 🇱🇰
 │
 │▷ .attp { text }
 │▷ .sticker
 │▷ .sticvid
 │
 ╰────────────────
 ╭────────────────
 │        🇱🇰 Uploder 🇱🇰
 │
 │▷ .uploadp [ reply a photo ]
 │▷ .uploadv [ reply a video ]
 │
 │Upload Your photo or video
 │to Telegraph & Give you link
 │ 
 │warn : you can upload less than 
 │       5mb source
 ╰────────────────
 ╭────────────────
 │       🇱🇰 Text To Img 🇱🇰
 │
 │▷ .ffpack
 │▷ .ttp { text }
 │▷ .dttp { text }
 │▷ .trumpsay { text }
 │▷ .changesay { text }
 │▷ .animesay { text }
 │▷ .meme { text }
 │▷ .carbon { text }
 │
 ╰────────────────
 ╭────────────────
 │        🇱🇰 Downloader 🇱🇰
 │
 │▷ .video { vid link }
 │▷ .mp4 { vid name }
 │▷ .down { status down }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │
 ╰────────────────
 ╭────────────────
 │         🇱🇰 Groups 🇱🇰
 │
 │▷ .grp
 │▷ .rules
 │▷ .info
 │▷ .tagadmin
 │▷ .report
 │▷ .gname {change group n}
 │▷ .dis on { disapearing }
 │▷ .dis off { for owner }
 │▷ .warn1 [ for owner ]
 │▷ .warn2 [ for owner ]
 │▷ .warn3 [ for owner ]
 │▷ .warn4 [ for owner ]
 │▷ .tagall  [ for owner ]
 │▷ .ban [ for owner ]
 │▷ .add [ for owner ]
 │▷ .promote [ for owner ]
 │▷ .demote [ for owner ]
 │▷ .invite [ for owner ]
 │▷ .kickme [ for owner ]
 │
 │    use .admin Cmd for
 │      other commands
 │
 ╰────────────────
 ╭────────────────
 │      🇱🇰 Software Store 🇱🇰
 │
 │▷ .Softstore
 │ 
 │   By Achi Bro lk      
 │
 ╰────────────────
 ╭────────────────
 │   🇱🇰 Search 🇱🇰
 │
 │▷ .yt { text }
 │▷ .spoti { text }
 │▷ .tk { name }
 │▷ .wiki { text }
 │▷ .movie { mov name }
 │▷ .github { name }
 │▷ .weather { city }
 │
 ╰────────────────
 ╭────────────────
 │ 🇱🇰 Media Editor🇱🇰
 │
 │▷ .xmedia
 │▷ .tblend
 │▷ .ocr
 │▷ .mp3 { vid to aud }
 │▷ .photo { stic to 4to }
 │▷ .ffmpeg { fade in:0:30 }
 │▷ .removebg
 │▷ .spdf
 │▷ .unaudio { mp3 to file }
 │▷ .unvoice { mp3 to voice }
 │
 ╰────────────────
 ╭────────────────
 │    🇱🇰 Random 🇱🇰
 │
 │▷ .quote
 │▷ .anime
 │
 ╰────────────────
 ╭────────────────
 │       🇱🇰 Fun 🇱🇰
 │
 │▷ .gm
 │▷ .agm
 │▷ .gn
 │▷ .agn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
 
 ╭────────────────
 │      🇱🇰 Other 🇱🇰
 │
 │▷ .ss { link }
 │▷ .afk { bot is online }
 │▷ .short { link }
 │▷ .wame { get user link }
 │▷ .currency
 │▷ .trt { en si }
 │▷ .notes
 │▷ .save
 │▷ .deleteNotes
 │▷ .covid
 ╰────────────────
 
       🇱🇰 POWERD BY 🇱🇰
       🎭🇱🇰  𝙰𝙻𝙿𝙷𝙰  🇱🇰🎭️`

const amenu  = `\n\n\n\n
╔══════════════════════╗
      🎭🇱🇰  𝙰𝙻𝙿𝙷𝙰  🇱🇰🎭️
════════════════════════
🎭 Command: .xmedia
    ➢ Description: A plugin that have 25 media tools.

🎭 Command: .admin
    ➢ Description: To get the admin command list

🎭 Command: .alpha
    ➢ Description:all commands

🎭 Command: .lovepack
    ➢ Description: Send Love message to gf/bf.

🎭 Command; .grp
    ➢ Description: Send Groups list

🎭 Command: *.warn1,.warn2,.warn3,.warn4
    ➢ Description: Send Group Warm msg. Admin only Command

🎭 Command: .rules
➢ Description: * *Send Group Rules

🎭 Command: .switch
    ➢ Description: *Turn on/off chat bot.
       ❐️ Example: To turn on AI chat, .switch CHAT_BOT:true
To turn on AI chat, .switch CHAT_BOT:false
(This is a only admin command)*

🎭 Command: .anime
    ➢ Description: Send Different type ANIME images . විවිදාකාර ඇනිම් පින්තූර ඔබ වෙත එවයි..

🎭 Command: .antispam
    ➢ Description: This command for any emergency situation about any kind of WhatsApp SPAM in Group

🎭 Command: .mp3
    ➢ Description: Convert mp4 into mp3.

🎭 Command: .photo
    ➢ Description: 🎭➢ Convert sticker into an image.

🎭 Command: .ffmpeg
    ➢ Description: *Apply ffmpeg filter to a video
       ❐️ Example: .ffmpeg fade=in:0:30*

🎭 Command: .gn
    ➢ Description: Send Gn wish with image.

🎭 Command: .gm
    ➢ Description: Send Gm wish with image.

🎭 Command: .info
    ➢ Description: Show chat details

🎭 Command: .covid
    ➢ Description: *Check information about Covid-19 of countries.
Example : .covid Sri Lanka

🎭 Command: .meme
    ➢ Description: The photos you replied to are memes.

🎭 Command: .movie
    ➢ Description: Movies වල විස්තර ලබාදීම.

🎭 Command: .notes
    ➢ Description: *Show your notes.

🎭 Command: .save
    ➢ Description: Reply .save to a message or type .save <your_note>

🎭 Command: .deleteNotes
    ➢ Description: Clear your all notes.

🎭 Command: .ocr
    ➢ Description: Scan your picture into text.

🎭 Command: .removebg
    ➢ Description: Removing background of image.

🎭 Command: .report
    ➢ Description: Report someone in the group to admins.

🎭 Command: .fsong
    ➢ Description: Uploading file type songs.

🎭 Command: .song
    ➢ Description: Uploading mp3 type songs.

🎭 Command: .video
    ➢ Description: Downloading videos from YouTube

🎭 Command: .insta
    ➢ Description: 🎭➢ ⎝🎭🇱🇰  𝙰𝙻𝙿𝙷𝙰  🇱🇰🎭️  Download instagram videos.

🎭 Command: .fb
    ➢ Description: 🎭➢ ⎝🎭🇱🇰  𝙰𝙻𝙿𝙷𝙰  🇱🇰🎭️  Download Facebook videos.

🎭 Command: .trt
    ➢ Description: It translates with Google Translator. You must mention any message.
       ❐️ Example: .trt en si (From English to Sinhala)

🎭 Command: .spdf
    ➢ Description: Converts a Site into PDF

🎭 Command: .quote
    ➢ Description: It Sends Random Quote

🎭 Command: .currency
    ➢ Description: To convert currencies.

🎭 Command: .tts
    ➢ Description: It translates words into voice messages.

🎭 Command: .yt
    ➢ Description: Searchng videos on YouTube.

🎭 Command: .wiki
    ➢ Description: Search Wikipedia.

🎭 Command: .img
    ➢ Description: Downloading google images.

🎭 Command: .wame
    ➢ Description: Get a link to the user chat.

🎭 Command: .github
    ➢ Description: *Stalk github profiles of given username.
       ❐️ Example: .github TRex*

🎭 Command: .tk
    ➢ Description: *Stalk tiktok profile to a given username.
       ❐️ Example: .tK Achiya66*

🎭 Command: .ss
    ➢ Description: Take screenshot of given links

🎭 Command: .mod
    ➢ Description: *Search modded apk in Moddroid site.

🎭 Command: .spoti
    ➢ Description: Search songs from spotify.

🎭 Command: .animesay
    ➢ Description: 🎭➢ Write text on anime girl s paper

🎭 Command: .changesay
    ➢ Description: Weite chaged my mind themed memes

🎭 Command: .trumpsay
    ➢ Description: 🎭➢ Write text on Trump Twitter

🎭 Command: .spotify
    ➢ Description: Download spotify songs.

🎭 Command: .sticker
    ➢ Description: Make stickers to your images. Reply to an image.

🎭 Command: .sticvid
    ➢ Description: 🎭➢ Converts animated stickers to video.

🎭 Command: .alive
    ➢ Description: Check bot online or not

🎭 Command: .version
    ➢ Description: Check version of bot.

🎭 Command: .tagadmin
    ➢ Description: Tag all group admins.

🎭 Command: .tblend
    ➢ Description: Applies the selected TBlend effect to videos.

🎭 Command: .carbon
    ➢ Description: Convert text into Carbon effect

🎭 Command: .tgm
    ➢ Description: it sends good morning text message

🎭 Command: .tgn
    ➢ Description: it sends good night text message

🎭 Command: .ttp
    ➢ Description: Make text image

🎭 Command: .attp
    ➢ Description: Make animated text stickers in Rainbow theme

🎭 Command: .unaudio
    ➢ Description: Converts sound recording to an audio File.

🎭 Command: .unvoice
    ➢ Description: Convert mp3 into a WA voice message

🎭 Command: .vid2
    ➢ Description: Youtube Video Downloader V2 . යූ ටියුබ් වීඩියෝ ඩව්න්ලෝඩ් කිරීමට දෙවන මග... .

🎭 Command: .weather
    ➢ Description: Check weather.

🎭 Command: .speedtest
    ➢ Description: Check download and upload speed

🎭 Command: .ping
    ➢ Description: Your ping.

🎭 Command: .short
    ➢ Description: Shorten link.`

const about = `\n\n\n\n🎭 Developer             : Achi  Fernando
🎭 Bot                        : 🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭  WhatsApp User Bot v5.0.0
🎭 Language              : Sinhala & English
🎭 Sponcer Team       : PEARL TEAM SRI LANKA
🎭 Develop language : Node js`



if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'alpha', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
        
        var logo = await axios.get (`https://telegra.ph/file/f3b0b4e681583334b7330.jpg`, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🎭🇱🇰️ ALL MENU 🇱🇰️🎭'+allcmd}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🎭🇱🇰 ADVANCE MENU 🎭🇱🇰'+amenu}, type: 1},
  {buttonId: 'MEHk', buttonText: {displayText: 'BOT ABOUT'+about}, type: 1},         
 ]

const btn = {
    contentText: "\n\n\n\n🇱🇰🎭 Thank You For Using 🇱🇰🎭\n",
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
  {buttonId: 'MENU', buttonText: {displayText: 'BOT ALL LINKS'+link}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'OWNER NUMBER'+Owner}, type: 1},
  {buttonId: 'MEHk', buttonText: {displayText: 'BOT ABOUT'+about}, type: 1},  
 ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/f3b0b4e681583334b7330.jpg',
    contentText: Config.ALIVEMSG + "\n\n",
    footerText: 'BY 🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭▷',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
      //  await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭*' })
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

    Trex.addrex({pattern: 'alpha', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
        
        
        var logo = await axios.get (`https://telegra.ph/file/f3b0b4e681583334b7330.jpg`, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🎭🇱🇰️ ALL MENU 🇱🇰️🎭'+allcmd}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🎭🇱🇰 ADVANCE MENU 🎭🇱🇰'+amenu}, type: 1},
  {buttonId: 'MEHk', buttonText: {displayText: 'BOT ABOUT'+about}, type: 1},      
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/f3b0b4e681583334b7330.jpg',
    contentText: "\n\n\n\n🇱🇰🎭 Thank You For Using 🇱🇰🎭\n\n",
    footerText: 'BY 🎭🇱🇰 𝙰𝙻𝙿𝙷𝙰 🇱🇰🎭▷',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}

            
            var image = await axios.get ('https://telegra.ph/file/f3b0b4e681583334b7330.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
      //  await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "\n\n\n\n🇱🇰🎭 Thank You For Using 🇱🇰🎭\n"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
    
    var logo = await axios.get (Config.AL, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })


        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🎭🇱🇰️ ALL MENU 🇱🇰️🎭'+allcmd}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🎭🇱🇰 ADVANCE MENU 🎭🇱🇰'+amenu}, type: 1},
  {buttonId: 'MEHk', buttonText: {displayText: 'BOT ABOUT'+about}, type: 1},     
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/f3b0b4e681583334b7330.jpg',
    contentText:  Config.ALIVEMSG + "\n\n\n",
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
