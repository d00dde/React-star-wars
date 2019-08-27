

export default class SwapiService {

	_baseUrl = 'https://swapi.co/api';
	_baseImg = 'https://starwars-visualguide.com/assets/img';

	async getResource (url) {
		const res = await fetch (this._baseUrl + url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}

		return await res.json();
	}

	getAllPeople = async () => {
		const res = await this.getResource ('/people/');
		return res.results.map(this._transformPerson);
	}

	getAllPlanets  = async () => {
		const res = await this.getResource ('/planets/');
		return res.results.map(this._transformPlanet);
	}

	getAllStarships = async () =>{
		const res = await this.getResource ('/starships/');
		return res.results.map(this._transformStarship);
	}

	getPerson = async (id) => {
		const person = await this.getResource (`/people/${id}/`);
		return this._transformPerson(person);
	}

	getPlanet = async (id) => {
		const planet = await this.getResource (`/planets/${id}/`);
		return this._transformPlanet(planet);
	}

	getStarship = async (id) => {
		const starship = await this.getResource (`/starships/${id}/`);
		return this._transformStarship(starship);
	}

	getPersonImg = (id) => {
		return `${this._baseImg}/characters/${id}.jpg`;
	}

	getPlanetImg = (id) => {
		return `${this._baseImg}/planets/${id}.jpg`;
	}

	getStarshipImg = (id) => {
		return `${this._baseImg}/starships/${id}.jpg`;
	}

	_extractId (item) {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	}

	_transformPlanet = (planet) => {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.orbital_period,
			diameter: planet.diameter
		};
	}

	_transformStarship = (starship) => {
		console.log(starship);
		return {
			id: this._extractId(starship),
			name: starship.name,
			manufacturer: starship.manufacturer,
			costInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargo_capacity
		};
	}

	_transformPerson = (person) => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		};
	}








}

