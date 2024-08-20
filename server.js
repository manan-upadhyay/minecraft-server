const mineflayer = require('mineflayer');

const serverOptions = {
  host: 'localhost', // Hostname or IP address
  port: 25565,       // Port number
  version: false,    // Use the latest version
  username: 'Bot'    // Name of the bot/server
};

const bot = mineflayer.createBot(serverOptions);

bot.on('login', () => {
  console.log(`Logged in as ${bot.username}`);
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(`Hello ${username}, you said: ${message}`);
});

bot.on('error', (err) => {
  console.error('Error:', err);
});

bot.on('end', () => {
  console.log('Disconnected from server');
});
