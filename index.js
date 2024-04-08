const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);
const bot = new Eris(process.env.token2);
const bot = new Eris(process.env.token3);
const bot = new Eris(process.env.token4);
const bot = new Eris(process.env.token5);
const bot = new Eris(process.env.token6);
const bot = new Eris(process.env.token7);
const bot = new Eris(process.env.token8);
const bot = new Eris(process.env.token9);
const bot = new Eris(process.env.token10);
const bot = new Eris(process.env.token11);
const bot = new Eris(process.env.token12);
const bot = new Eris(process.env.token13);
const bot = new Eris(process.env.token14);
const bot = new Eris(process.env.token15);
const bot = new Eris(process.env.token16);
const bot = new Eris(process.env.token17);
const bot = new Eris(process.env.token18);
const bot = new Eris(process.env.token19);
const bot = new Eris(process.env.token20);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
