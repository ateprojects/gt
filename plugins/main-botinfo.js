let handler = async (m, { conn }) => {

const wm = global.wm
const _uptime = process.uptime() * 1000
const uptimex = clockString(_uptime)
const nomor = conn.user.jid
const name = conn.getName(conn.user.jid, 'image')
const pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://i.postimg.cc/PqJK5sHv/tumblr-81dacf9309c25870686818ac6922667d-f16a5a6e-250-upscayl-12x-realesrgan-x4plus-anime.png")
const fkontak = {key: {participant: "0@s.whatsapp.net",remoteJid: "status@broadcast",fromMe: false,id: "Halo"},message: {contactMessage: {vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Bot\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}},participant: "0@s.whatsapp.net"}
const text = 'SOFI 🍟'
const blurRadius = 90
const font = 'Nombre de la familia de fuente' 
const fontSize = 80
const width = 500
const height = 200
const backgroundImageUrl = thumb
const avatarImageUrl = pp
let ofcdiego = `┌  ◦ *Bot Info:*
│  ◦ *Nombre:* ${namebot}
│  ◦ *Enlace:* wa.me/${conn.user.jid.split("@")[0]}
│  ◦ *Modo:* ${global.opts['self'] ? 'Self' : 'Public'}
│  ◦ *Usuarios:* ${Object.keys(global.db.data.users).length}
│  ◦ *Usuarios suspendidos:* ${Object.values(global.db.data.users).filter(user => user.banned).length}
│  ◦ *Características totales:* ${Object.values(features).filter(v => v.help && !v.disabled).map(v => v.help).flat(1).length}
└——`

await conn.sendMessage(m.chat, { text: ofcdiego, contextInfo: { forwardingScore: 9999, isForwarded: true, businessMessageForwardInfo: { businessOwnerJid: conn.user.jid }}},{quoted: fkontak})

}
handler.help = ['infobot']
handler.tags = ['main']
handler.command = ['infobot']
handler.limit = false

module.exports = handler

function clockString(ms) {
let days = Math.floor(ms / (24 * 60 * 60 * 1000))
let daysms = ms % (24 * 60 * 60 * 1000)
let hours = Math.floor((daysms) / (60 * 60 * 1000))
let hoursms = ms % (60 * 60 * 1000)
let minutes = Math.floor((hoursms) / (60 * 1000))
let minutesms = ms % (60 * 1000)
let sec = Math.floor((minutesms) / 1000)
return `${days} Hari ${hours} Jam ${minutes} Menit ${sec} Detik`
}
