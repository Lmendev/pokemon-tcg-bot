require('dotenv').config()
const botInfo = require('../package.json')

const token = process.env.TOKEN
const url = process.env.APP_URL
const nodeEnv = process.env.NODE_ENV
const port = process.env.PORT
const pokemonApiKey = process.env.API_KEY

module.exports = { botInfo, token, url, nodeEnv, port, pokemonApiKey}