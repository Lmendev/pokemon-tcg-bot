const fetch = require('node-fetch')
const sets = require('../../database/sets.json')
const { pokemonApiKey } = require('./../../config/bot')

class pokemonTCGAPI {

	constructor() {
		this.URL = 'https://api.pokemontcg.io/v2'
		this.LIMIT_RESULTS = 50 /* No more than 50 results per query are allowed by Telegram. */
	}

	getPokemon = async (query, page) => {
		page = page || 1

		let {id: setId, total: setTotal} = sets.data[Math.floor(Math.random() * sets.data.length)]
		let url = query? `${this.URL}/cards?q=name:*${query}*&pageSize=${this.LIMIT_RESULTS}&page=${page}` : `${this.URL}/cards/${setId}-${setTotal}`
		
		let response = await fetch(url, { headers: { "X-Api-Key": pokemonApiKey } })

		if (response.ok) { 
			let { data, page, pageSize, totalCount } = await response.json()
			let next_offset = null
			
			if (page * pageSize < totalCount){
				next_offset = ++page
			}
			
			return {data: data, next_offset: next_offset}
		} else {
			console.log("HTTP-Error: " + response.status)
			console.log("url" + url)
			console.log(response)
		}
	}


}

module.exports = new pokemonTCGAPI();