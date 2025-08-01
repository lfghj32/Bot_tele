const TelegramBot = require('node-telegram-bot-api');

// Thay bằng token thật của bạn
const token = '8357378632:AAEBpVeaxWAtCMcbM0htngWDMVJFyDu8vKU';

// Khởi tạo bot
const bot = new TelegramBot(token, { polling: true });

// Lệnh /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "👋 Chào mừng bạn đến với bot của ThanhLam!");
});

// Lệnh /info
bot.onText(/\/info/, (msg) => {
  bot.sendMessage(msg.chat.id, `📌 Thông tin người dùng:\n👤 Tên: ${msg.from.first_name}\n🆔 ID: ${msg.from.id}`);
});

// Lệnh /help
bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, "📖 Danh sách lệnh:\n/start - Bắt đầu\n/info - Thông tin\n/help - Trợ giúp");
});

// Lệnh /anime - Gửi ảnh anime ngẫu nhiên từ API
bot.onText(/\/anime/, (msg) => {
  const imageUrl = 'https://api.waifu.pics/sfw/waifu'; // ảnh random từ API
  bot.sendPhoto(msg.chat.id, imageUrl);
});

// Lệnh /music - Gửi link nhạc
bot.onText(/\/music/, (msg) => {
  bot.sendMessage(msg.chat.id, '🎵 Nhạc đây: https://youtu.be/dQw4w9WgXcQ');
});
