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

require('custom-env').env()

console.log(process.env.TOKEN)