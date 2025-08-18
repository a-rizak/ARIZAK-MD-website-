{
  "name": "ARIZAK-MD",
  "description": "🤖 A powerful WhatsApp bot built with Baileys",
  "repository": "https://github.com/your-username/ARIZAK-MD",
  "logo": "https://files.catbox.moe/qumhu4.jpg",
  "keywords": ["whatsapp", "bot", "baileys", "nodejs"],
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    }
  ],
  "formation": {
    "worker": {
      "quantity": 1,
      "size": "free"
    }
  },
  "env": {
    "SESSION": {
      "description": "Leave empty on first deploy. Bot will generate session automatically.",
      "required": false
    },
    "PREFIX": {
      "description": "Command prefix for the bot",
      "value": "."
    },
    "OWNER_NUMBER": {
      "description": "Your WhatsApp number with country code (e.g. 2547XXXXXXXX)",
      "required": true
    },
    "BOT_NAME": {
      "description": "Name of your bot",
      "value": "ARIZAK-MD"
    }
  }
}
