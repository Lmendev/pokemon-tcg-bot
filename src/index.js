/* 
const { botSearch } = require ('./controllers/bot');


const pokemonTCGAPI = require('./controllers/pokemon-tcg-api.js');
const connectDB = require('./config/database');


require('./routes/bot')
*/


/*
const bot = require("./core/bot");

bot.initPlatforms()

require("./routes/bot");
*/

require('custom-env').env('development', 'src/environments')

const botInfo = require('../package.json')

const token = process.env.TOKEN
const url = process.env.APP_URL
const nodeEnv = process.env.NODE_ENV
const port = process.env.PORT
const pokemonApiKey = process.env.API_KEY

module.exports = { botInfo, token, url, nodeEnv, port, pokemonApiKey}

console.log(process.env.TOKEN)