{
  "name": "ARIZAK-MD",
  "description": "🤖 A powerful WhatsApp bot built with Baileys",
  "repository": "https://github.com/your-username/ARIZAK-MD",
  "logo": "https://files.catbox.moe/qumhu4.jpg",
  "services": [
    {
      "name": "arizak-md",
      "start": "node app.js",
      "envs": [
        {
          "name": "PREFIX",
          "description": "Command prefix for your bot",
          "defaultValue": "."
        },
        {
          "name": "OWNER_NUMBER",
          "description": "Your WhatsApp number with country code",
          "required": true
        },
        {
          "name": "BOT_NAME",
          "description": "Bot display name",
          "defaultValue": "ARIZAK-MD"
        }
      ]
    }
  ]
    }
