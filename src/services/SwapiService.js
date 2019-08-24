

export default class SwapiService {

	_baseUrl = 'https://swapi.co/api';

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

	getAllPlanets = async () => {
		const res = await this.getResource ('/planets/');
		return res.results.map(this._transformPlanet);
	}

	getAllStarships = async () =>{
		const res = await this.getResource ('/starships/');
		return res.results.map(this._transformStarship);
	}

	async getPerson(id) {
		const person = await this.getResource (`/people/${id}/`);
		return this._transformPerson(person);
	}

	async getPlanet(id) {
		const planet = await this.getResource (`/planets/${id}/`);
		return this._transformPlanet(planet);
	}

	async getStarship(id) {
		const starship = await this.getResource (`/starship/${id}/`);
		return this._transformPlanet(starship);
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
		return {
			id: this._extractId(starship),
			name: starship.name,
			manufacturer: starship.manufacturer,
			costInCredits: starship.costInCredits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargoCapacity
		};
	}

	_transformPerson = (person) => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birthYear,
			eyeColor: person.eyeColor
		};
	}








}

