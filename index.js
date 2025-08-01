const TelegramBot = require('node-telegram-bot-api');
const { Client, GatewayIntentBits } = require('discord.js');

// ======== Token cần thay thế ========p
const TELEGRAM_TOKEN = '8357378632:AAEBpVeaxWAtCMcbM0htngWDMVJFyDu8vKU';
const DISCORD_TOKEN = 'DISCORD_TOKEN_CUA_BAN';
// ====================================

// Ảnh mèo ngẫu nhiên
const randomImages = [
  'https://i.imgur.com/cv0Vh98.jpeg',
  'https://i.imgur.com/LYyOBI1.mp4',
  'https://i.imgur.com/HW7oqRI.gif',
  'https://i.imgur.com/l08HMMS.jpeg',
  'https://i.imgur.com/0Asqgdu.gif'
];

function getRandomImage() {
  return randomImages[Math.floor(Math.random() * randomImages.length)];
}

// ======= Bot Telegram =======
const teleBot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

teleBot.onText(/\/start|\/hello/, (msg) => {
  teleBot.sendMessage(msg.chat.id, `Chào ${msg.from.first_name}! Tôi là bot của thanhlam để giải đáp và hỗ trợ bạn.`);
});

teleBot.onText(/\/ảnhme/, (msg) => {
  const img = getRandomImage();
  teleBot.sendPhoto(msg.chat.id, img, { caption: 'Ảnh ramdu ngẫu nhiên 🐱' });
});

teleBot.onText(/\/music/, (msg) => {
  teleBot.sendMessage(msg.chat.id, '🎵 Đây là nhạc bạn yêu cầu: https://youtu.be/KaRsV_B2w4E?list=RDKaRsV_B2w4E');
});

teleBot.onText(/\/thôngtin/, (msg) => {
  teleBot.sendMessage(msg.chat.id, '👨‍💻 Admin: Thành Lâm Nguyễn\n📧 Email: nguyenlam2007z@gmail.com');
});

teleBot.onText(/\/check/, (msg) => {
  teleBot.sendMessage(msg.chat.id, `👤 Username: @${msg.from.username || 'Không có'}\n🆔 ID: ${msg.from.id}`);
});

// ======= Bot Discord =======
const discordBot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

discordBot.on('ready', () => {
  console.log(`✅ Discord bot đã sẵn sàng với tên: ${discordBot.user.tag}`);
});

discordBot.on('messageCreate', (message) => {
  if (message.author.bot) return;

  const content = message.content;

  if (content === '/hello') {
    message.reply(`Chào ${message.author.username}! Tôi là bot của thanhlam để giải đáp và hỗ trợ bạn.`);
  } else if (content === '/ảnhme') {
    const img = getRandomImage();
    message.reply({ content: 'Mèo nè 🐱', files: [img] });
  } else if (content === '/music') {
    message.reply('🎵 Đây là nhạc bạn yêu cầu: https://youtu.be/0U0L9Y640T8?list=RD0U0L9Y640T8');
  } else if (content === '/thôngtin') {
    message.reply('👨‍💻 Admin: Thành Lâm Nguyễn\n📧 Email: nguyenlam2007z@gmail.com');
  } else if (content === '/check') {
    message.reply(`👤 Username: ${message.author.username}\n🆔 ID: ${message.author.id}`);
  }
