import { bot } from '../core/bot'

const { botSearch, botStart, botAbout, botHelp, botMyCards, botHacker, botRandom, botCallbackQuery, botInlineQuery, botSettings } = require('../controllers/bot')

bot.telegramPlatform.onText(/\/start/, botStart)
bot.telegramPlatform.onText(/\/about/, botAbout)
bot.telegramPlatform.onText(/\/help/, botHelp)
bot.telegramBot.onText(/\/search/, botSearch)
bot.telegramBot.onText(/\/random/, botRandom)
bot.telegramBot.onText(/\/mycards/, botMyCards)
bot.telegramBot.onText(/\/settings/, botSettings)
bot.telegramBot.onText(/\/hacker/, botHacker)
bot.telegramBot.on('message', function(a) { 
  console.log(a)})

bot.telegramBot.on('inline_query', botInlineQuery)
bot.telegramBot.on('callback_query', botCallbackQuery)

