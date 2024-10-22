
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./Assets/voice/${pickRandom(["anna", "hi", "menu", "test"])}.mp3`

m.reply( `Hello ${taguser} Am 𝚀𝚄𝙴𝙴𝙽 MARIA creatd by PAPA IGWE Need help?  type /help `)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(MARIA|PAPA IGWE)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
