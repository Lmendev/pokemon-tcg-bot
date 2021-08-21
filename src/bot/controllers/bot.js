
const bot = require('../core/bot')
const { sendPhoto, sendMessage, answerInlineQuery, editMessageMedia } = require('../views/bot')

const botSearch = (msg) => {
    const chatId = msg.chat.id
    const photo = 'https://miro.medium.com/max/1000/1*EctvzSDOlwqeH13R6YBYOw.jpeg'
    const caption = `<b>/search</b>\nI can help you find and share pokemon cards information. Simply send me a query like 'Pikachu' using the buttons below.`
    const inlineKeyboard = [ [{text: "🔍 Search Pokémon by name", switch_inline_query_current_chat: ""}] ]
    const parseMode = "html"

    sendPhoto({ 
        chatId: chatId, 
        photo: photo, 
        caption: caption,
        inlineKeyboard: inlineKeyboard,
        parseMode: parseMode
    })
}

const botStart = msg => {

    console.log('botStart')
    console.log(msg)
    const originalMsg = msg

    msg = msg.message || msg

    const chatId = msg.chat.id
    const messageId = msg.message_id
    const photo =  'https://miro.medium.com/max/1000/1*EctvzSDOlwqeH13R6YBYOw.jpeg' //'AgACAgQAAxkDAAMyYK9S3W_mivMu-ZPhCdHOLb-S0pEAAiisMRt9UoRTve4hWn_jYpr8tAstXQADAQADAgADbQAD1BIAAh8E' 
    const caption = `<b>Welcome to ${bot.config.botInfo.description}!</b>\nI can look for pokemon cards information 🤖`
    const inlineKeyboard = [
        [{text: "🔍 Search Pokémon by name", switch_inline_query_current_chat: ""}],
        [{text: "🎲 Random Card", callback_data: "random"}, {text: "🗃️ My Cards", callback_data: "collection"}],
        [{text: "ℹ️ About", callback_data: "about"}, {text: "❓ Help", callback_data: "help"}],
        [{text: "⚙️ Settings", callback_data: "settings"}],
    ]
    const parseMode = "html"
    
    if (originalMsg.message)  //from menu
        editMessageMedia({ 
            media: photo,
            caption,
            parseMode,
            messageId,
            chatId,
            callbackQueryId: originalMsg.id,
            inlineKeyboard
        }) 
    else
        sendPhoto({ 
            chatId, 
            photo, 
            caption,
            inlineKeyboard,
            parseMode
        })
}

const botAbout = msg => {
    const originalMsg = msg

    msg = msg.message || msg
    const chatId = msg.chat.id
    const messageId = msg.message_id
    
    
    const message = `<b>About me</b> 
🤖 <b>Name</b>: ${bot.config.botInfo.name}
🟢 <b>Version</b>:  v${bot.config.botInfo.version} 
🧑🏽‍💻 <b>Created by</b>: @lmendev`
    const parseMode = "html"

    if (originalMsg.message)  //from menu
        editMessageMedia({ 
            media: msg.photo[0].file_id,
            caption: message,
            parseMode,
            messageId,
            chatId,
            callbackQueryId: originalMsg.id,
            inlineKeyboard: [
                [{text: "🔙 Back", callback_data: "start"}]
            ]
        }) 
    else
        sendMessage({ 
            chatId, 
            message,
            parseMode
        })
}

const botHelp = msg => {
    const originalMsg = msg

    msg = msg.message || msg
    const chatId = msg.chat.id
    const messageId = msg.message_id

    const message = `/start - 🤖 Start the bot
/random - 🎲 Get a random card
/search - 🔍 Search card by name
/mycards - 🗃️ Manage your collection
/settings - ⚙️ Adjust your bot settings
/help - ❓ Get help
/about - ℹ️ Info about me`
	
    if (originalMsg.message) 
        editMessageMedia({ 
            media: msg.photo[0].file_id,
            caption: message,
            messageId,
            chatId,
            callbackQueryId: originalMsg.id,
            inlineKeyboard: [
                [{text: "🔙 Back", callback_data: "start"}]
            ]
        }) 
    else
        sendMessage({ 
            chatId: chatId, 
            message: message
        })
}

const botSettings = msg => {
    const originalMsg = msg

    msg = msg.message || msg
    const chatId = msg.chat.id
    const messageId = msg.message_id

    const message = `🤖 Bot command under development`
	
    if (originalMsg.message) 
        editMessageMedia({ 
            media: 'https://i2.wp.com/johnkoetsier.com/wp-content/uploads/2020/10/marius-haakestad-h93VUbRkbPQ-unsplash-2.jpg?resize=730%2C480&ssl=1' ,//'AgACAgEAAxkBAAN6YLCvYQ0voy8CsV_HzV44T9wzXgMAAiapMRuWlYlFa-BqCSI4y7rIojNMFwADAQADAgADeQADJe8AAh8E',
            caption: message,
            messageId,
            chatId,
            callbackQueryId: originalMsg.id,
            inlineKeyboard: [
                [{text: "🔙 Back", callback_data: "start"}]
            ]
        }) 
    else
        sendMessage({ 
            chatId: chatId, 
            message: message
        })
}

const botMyCards = msg => {
    const originalMsg = msg

    msg = msg.message || msg
    const chatId = msg.chat.id
    const messageId = msg.message_id

    const message = `🤖 Bot command under development`
	
    if (originalMsg.message) 
        editMessageMedia({ 
            media: 'https://i2.wp.com/johnkoetsier.com/wp-content/uploads/2020/10/marius-haakestad-h93VUbRkbPQ-unsplash-2.jpg?resize=730%2C480&ssl=1',//'AgACAgEAAxkBAAN6YLCvYQ0voy8CsV_HzV44T9wzXgMAAiapMRuWlYlFa-BqCSI4y7rIojNMFwADAQADAgADeQADJe8AAh8E',
            caption: message,
            messageId,
            chatId,
            callbackQueryId: originalMsg.id,
            inlineKeyboard: [
                [{text: "🔙 Back", callback_data: "start"}]
            ]
        }) 
    else
        sendMessage({ 
            chatId: chatId, 
            message: message
        })
}

const botHacker = msg => {
    const chatId = msg.chat.id
    const message = 
`\`;-.               ___,
  \`.\`\\_........._/\` .--"\`
    \\                   / ,
    / (  )         (  )  \`        .' \`-._
   |)      .            ()\`     / _.'
   \`     -'-             , ;   '. <
    ;.    __              ,;|    > \`
   / ,              / ,      |   .-'   .-'
  (_/            (_/     ,;| .<\`
    \`            ,          ;-\`
     >       ...  \`      /
    ( _ , -'     \`>  . '
                  (__,'
Are you a hacker?`
	
    sendMessage({ 
        chatId: chatId, 
        message: message
    })
}

const botRandom = msg => {
    const originalMsg = msg
    
    msg = msg.message || msg

    const chatId = msg.chat.id
    const messageId = msg.message_id
    
    bot.pokemonApi.getPokemon()
		.then(({ data: pokemon }) => {
            if (originalMsg.message)  //from menu
                editMessageMedia({ 
                    media: pokemon.images.large,
                    caption: formatTextPokemon(pokemon),
                    messageId,
                    chatId,
                    callbackQueryId: originalMsg.id,
                    inlineKeyboard: [
                        [{text: "🎲 Roll the dice", callback_data: "random"}],
                        [{text: "🔙 Back", callback_data: "start"}]
                    ]
                })
            else
                sendPhoto({
                    chatId: chatId, 
                    photo: pokemon.images.large, 
                    caption: formatTextPokemon(pokemon)
                })
            }
		)
}

const formatTextPokemon = (pokemon) => {
	let info = `Name: ${pokemon.name}
Supertype: ${pokemon.supertype}\n`
//Level: ${pokemon.level}\n`

if(pokemon.tcgplayer){
	//pokemon.tcgplayer.prices.forEach((precios, tipo) => console.log(`${tipo}. ${precios}`))
	info += `\n💰 Prices\n`

	for(let tipo in pokemon.tcgplayer.prices){
		info += `\n${tipo.substr(0, 1).toUpperCase() + tipo.substr(1).toLowerCase()}\n`
		for (let item in pokemon.tcgplayer.prices[tipo]){
            if(pokemon.tcgplayer.prices[tipo][item])
			    info += `${item}: $${pokemon.tcgplayer.prices[tipo][item]} USD\n`
		}
	}
}
	return info
}

const botCallbackQuery = msg => {
    
    switch (msg.data) {
        case "random":
            botRandom(msg)
            break
        case "help":
            botHelp(msg)
            break
        case "about":
            botAbout(msg)
            break
        case "start":
            botStart(msg)
            break
        case "settings":
            botSettings(msg)
            break
        case "collection":
            botMyCards(msg)
            break
        default:
            break
    }
}

const botInlineQuery = msg => { 
	const {id: inlineQueryId, query} = msg

	if (query) 
		searchPokemonByName(msg)
    else {
		// Index
        
		answerInlineQuery({
            inlineQueryId: inlineQueryId, 
            results: [ {
				id: "index",
				type: "article",
				title: bot.config.botInfo.description,
				description: "Type a Pokémon name to get all the information about it!",
				hide_url: true,
				input_message_content: {"message_text": 
`quu..__
 $$$b  \`---.__
  "$$b        \`--.                          ___.---uuudP
   \`$$b           \`.__.------.__     __.---'      $$$$"              .
     "$b          -'            \`-.-'            $$$"              .'|
       ".                                       d$"             _.'  |
         \`.   /                              ..."             .'     |
           \`./                           ..::-'            _.'       |
            /                         .:::-'            .-'         .'
           :                          ::''\          _.'            |
          .' .-.             .-.           \`.      .'               |
          : /'$$|           .@"$\           \`.   .'              _.-'
         .'|$u$$|          |$$,$$|           |  <            _.-'
         | \`:$$:'          :$$$$$:           \`.  \`.       .-'
         :                  \`"--'             |    \`-.     \
        :##.       ==             .###.       \`.      \`.    \`\
        |##:                      :###:        |        >     >
        |#'     \`..'\`..'          \`###'        x:      /     /
         \                                   xXX|     /    ./
          \                                xXXX'|    /   ./
          /\`-.                                  \`.  /   /
         :    \`-  ...........,                   | /  .'
         |         \`\`:::::::'       .            |<    \`.
         |             \`\`\`          |           x| \ \`.:\`\`.
         |                         .'    /'   xXX|  \`:\`M\`M':.
         |    |                    ;    /:' xXXX'|  -'MMMMM:'
         \`.  .'                   :    /:'       |-'MMMM.-'
          |  |                   .'   /'        .'MMM.-'
          \`'\`'                   :  ,'          |MMM<
            |                     \`'            |tbap\
             \                                  :MM.-'
              \                 |              .''
               \.               \`.            /
                /     .:::::::.. :           /
               |     .:::::::::::\`.         /
               |   .:::------------\       /
              /   .''               >::'  /
              \`',:                 :    .'
                                   \`:.:' 
Are you a hacker?`
},
				thumb_url: "https://miro.medium.com/max/1000/1*EctvzSDOlwqeH13R6YBYOw.jpeg"
			    }
		    ]
        })
	}
}

const searchPokemonByName = msg => {
    const {id: inlineQueryId, query, offset} = msg
    
    bot.pokemonApi.getPokemon(query, offset)
        .then( 
            pokemons => { 
                let results = pokemons.data.map(pokemon => {
                        return {
                            id: pokemon.id, 
                            type: 'photo', 
                            title: pokemon.name, 
                            description: formatTextPokemon(pokemon), 
                            caption: formatTextPokemon(pokemon),
                            photo_width: 340,
                            thumb_url: pokemon.images.small, 
                            photo_url: pokemon.images.large
                        }
                    })

                answerInlineQuery({
                    inlineQueryId: inlineQueryId, 
                    results: results,
                    optionals: {
                        next_offset: pokemons.next_offset	
                    }
                })
            }
        )
}

module.exports = { botSearch, botStart, botAbout, botHelp, botMyCards, botHacker, botRandom, botCallbackQuery, botInlineQuery, botSettings}