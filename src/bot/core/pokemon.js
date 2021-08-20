import fetch from 'node-fetch'
import sets from './sets.json'

class pokemon {
    constructor (){
		this.URL = process.env.API_URL || 'https://api.pokemontcg.io/v2'
		this.LIMIT_RESULTS = process.env.API_URL || 50 /* No more than 50 results per query are allowed by Telegram. */
	}

	async getPokemonsByQuery (query, page) {
		page = page || 1

		let url = `${this.URL}/cards?q=name:*${query}*&pageSize=${this.LIMIT_RESULTS}&page=${page}`
		
		let response = await fetch(url)
		sendResponse(response)
	}

	async getRandomPokemon (){
		let {id: setId, total: setTotal} = sets.data[Math.floor(Math.random() * sets.data.length)]
		let url = `${this.URL}/cards/${setId}-${setTotal}`

		let response = await fetch(url)
		sendResponse(response)
	}

	async sendResponse(response){
		if (response.ok) { 
			let { data, page, pageSize, totalCount } = await response.json()
			let next_offset = null
			
			if (page * pageSize < totalCount){
				next_offset = ++page
			}
			
			return {data: data, next_offset: next_offset}
		} else 
			alert("HTTP-Error: " + response.status)
	}
}

export default pokemon