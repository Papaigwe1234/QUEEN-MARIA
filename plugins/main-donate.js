
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Share 𝚀𝚄𝙴𝙴𝙽 MARIA Bot Link And Support. Git Link https://github.com/Papaigwe1234/QUEEN-MARIA`
let img = 'https://raw.githubusercontent.com/Papaigwe1234/QUEEN-MARIA/main/MARIA.jpg?token=GHSAT0AAAAAACWTLQTA3HTSTXW2SAI4LQGCZXG4LCA'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
