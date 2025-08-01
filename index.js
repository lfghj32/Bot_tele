const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot("8357378632:AAEBpVeaxWAtCMcbM0htngWDMVJFyDu8vKU", { polling: true });

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "Xin chào từ bot Telegram!");
});

console.log("Bot is running...");