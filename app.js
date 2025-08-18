// app.js
// ARIZAK-MD WhatsApp Bot Starter File

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys")
const P = require("pino")

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("./session") // session folder
    const sock = makeWASocket({
        logger: P({ level: "silent" }),
        printQRInTerminal: true, // Show QR in terminal for login
        auth: state
    })

    // Save credentials
    sock.ev.on("creds.update", saveCreds)

    // Connection updates
    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update
        if (connection === "close") {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut
            console.log("Connection closed. Reconnecting...", shouldReconnect)
            if (shouldReconnect) {
                startBot()
            }
        } else if (connection === "open") {
            console.log("✅ ARIZAK-MD Connected!")
        }
    })

    // Listening for messages
    sock.ev.on("messages.upsert", async (msg) => {
        try {
            const m = msg.messages[0]
            if (!m.message || m.key.fromMe) return

            const from = m.key.remoteJid
            const textMessage = m.message.conversation || m.message.extendedTextMessage?.text || ""

            console.log("📩 Message:", textMessage, "from", from)

            // Example Auto-reply
            if (textMessage.toLowerCase() === "hi") {
                await sock.sendMessage(from, { text: "Hello 👋, I am ARIZAK-MD Bot!" })
            }
        } catch (err) {
            console.log("Error:", err)
        }
    })
}

startBot()
