const bot = require('../core/bot')

const sendPhoto = ({ chatId, photo, caption, inlineKeyboard, parseMode }) => {
    bot.telegramBot.sendPhoto(
        chatId, 
        photo,
        {
            caption: caption, 
            reply_markup: {
                inline_keyboard: inlineKeyboard
            },
            parse_mode: parseMode
        }
    )
}

const sendMessage = ({ chatId, message, parseMode }) => {
    bot.telegramBot.sendMessage(chatId, message, {parse_mode: parseMode})
}

const answerInlineQuery = ({inlineQueryId, results, optionals}) => {
    bot.telegramBot.answerInlineQuery(inlineQueryId, results, optionals)
}

const answerCallbackQuery = ({ callbackQueryId }) => {
    bot.telegramBot.answerCallbackQuery(callbackQueryId)
}

const editMessageMedia = ({ media, caption, parseMode,  messageId, chatId, inlineKeyboard, callbackQueryId}) => {
    bot.telegramBot.editMessageMedia(
        { 
            type: 'photo', 
            media, 
            caption, 
            parse_mode: parseMode 
        }, { 
            message_id: messageId, 
            chat_id: chatId,
            reply_markup: {
                inline_keyboard: inlineKeyboard
            },
        })
    
    if(callbackQueryId)
        answerCallbackQuery({callbackQueryId})
}

module.exports = { sendPhoto, sendMessage, answerInlineQuery, editMessageMedia}