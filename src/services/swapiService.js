export default class SwapiService {

    _apiBase = `https://swapi.dev/api`;
  
    async getResourse(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Can't fetch url!`);
      }
    
      const body = await res.json();
      return body;
    }
  
    async getAllPeople() {
      const res = await this.getResourse(`/people/`);
      return res.results.map(res => this._transformPerson(res));
    }
  
    async getPerson(id) {
      const person = await this.getResourse(`/people/${id}/`);
      return await this._transformPerson(person);
    }
  
    async getAllPlanets() {
      const res = await this.getResourse(`/planets/`);
      return res.results.map(planet => this._transformPlanet(planet))
    }
  
    async getPlanet(id) {
      const planet = await this.getResourse(`/planets/${id}/`);
      return this._transformPlanet(planet);
    }
  
    async getAllShips() {
      const res = await this.getResourse(`/starships/`);
      return res.results.map(res => this._transformShip(res));
    }
  
    async getShip(id) {
      const ship = await this.getResourse(`/starships/${id}/`);
      return this._transformShip(ship);
    }

    _extractId(item) {
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
        class: starship.class,
        cost: starship.cost,
        speed: starship.speed,
        length: starship.length
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