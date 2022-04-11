const { Client, Intents } = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('[Discord] Bot online');
    console.log(new Date())
});

client.login(config.token);