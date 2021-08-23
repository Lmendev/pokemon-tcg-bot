/*const config = require('../../config/bot')
const pokemonApi = require('./pokemon-tcg-api')*/

import telegramPlatform from 'node-telegram-bot-api'

class Bot {
    telegramPlatform: telegramPlatform | undefined

    constructor(){
        /*
        this.config = config
        this.pokemonApi = pokemonApi*/

        const url = process.env.APP_URL
        const nodeEnv = process.env.NODE_ENV
        const port = process.env.PORT
        const pokemonApiKey = process.env.API_KEY
        
        if(process.env.NODE_ENV === 'production') {
            this.telegramPlatform = new telegramPlatform(process.env.TOKEN ?? '', {webHook: {port: process.env.PORT } })
            this.telegramPlatform.setWebHook(`${process.env.APP_URL}/bot${process.env.TOKEN}`)
        }else 
            this.telegramPlatform = new telegramPlatform(process.env.TOKEN, { polling: true })
    }
}

export const bot = new Bot()