export default class SwapiService {

    _apiBase = `https://swapi.dev/api`;
    _imageBase = `https://starwars-visualguide.com/assets/img`;
  
    getResourse = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Can't fetch url!`);
      }
    
      const body = await res.json();
      return body;
    }

    getPersonImage = ({id}) => {
      return `${this._imageBase}/characters/${id}.jpg`   
    }

    getStarshipImage = ({id}) => {
      return `${this._imageBase}/starships/${id}.jpg`
    }

    getPlanetImage = ({id}) => {
      return `${this._imageBase}/planets/${id}.jpg`
    }
  
    getAllPeople = async () => {
      const res = await this.getResourse(`/people/`);
      return await res.results.map(res => this._transformPerson(res));
    }
  
    getPerson = async (id) => {
      const person = await this.getResourse(`/people/${id}/`);
      return await this._transformPerson(person);
    }
  
    getAllPlanets = async () => {
      const res = await this.getResourse(`/planets/`);
      return res.results.map(planet => this._transformPlanet(planet))
    }
  
    getPlanet = async (id) => {
      const planet = await this.getResourse(`/planets/${id}/`);
      return this._transformPlanet(planet);
    }
  
    getAllStarships = async () => {
      const res = await this.getResourse(`/starships/`);
      return res.results.map(res => this._transformShip(res));
    }
  
    getStarship = async (id) => {
      const ship = await this.getResourse(`/starships/${id}/`);
      return this._transformShip(ship);
    }

    _extractId = (item) => {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
      return {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        diameter: planet.diameter,
        gravity: planet.gravity
      }
    }

    _transformShip = (starship) => {
      return {
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.cost_in_credits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargo_capacity
  
      }
    }

    _transformPerson = (person) => {
      return {
        id: this._extractId(person),
        name: person.name,
        birth_year: person.birth_year,
        mass: person.mass,
        eye_color: person.eye_color,
        gender: person.gender,
        height: person.height
      }
    }
  }