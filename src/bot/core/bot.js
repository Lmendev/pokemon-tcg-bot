const config = require('../../config/bot')
const pokemonApi = require('./pokemon-tcg-api')
const telegramPlatform = require('node-telegram-bot-api')

class Bot {
    constructor (){
        // { infoBot, token, url, nodeEnv }
        this.config = config
        this.platforms = {}
        this.pokemonApi = pokemonApi
    }

    initPlatforms () {
        this.telegramInit()
    }

    telegramInit () {
        if(this.config.nodeEnv === 'production') {
            this.telegramBot = new telegramPlatform(this.config.token, {webHook: {port: this.config.port} })
            this.telegramBot.setWebHook(`${this.config.url}/bot${this.config.token}`)
        }else {
            this.telegramBot = new telegramPlatform(this.config.token, { polling: true })
        }
    }
}

module.exports = new Bot ()