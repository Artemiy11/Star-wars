import React from 'react';

const PlanetView = ( { planet } ) => {
    const {name, population, diameter, gravity, id} = planet;
    return (
        <>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
            <div className="planet-ul-wrapper">
                <h3 className="planet-name">{name}</h3>
                <ul className="planet-props">
                    <li>Population</li>
                    <li>{population}</li>
                </ul>
                <hr />
                <ul className="planet-props">
                    <li>Diameter</li>
                    <li>{diameter}</li>
                </ul>
                <hr />
                <ul className="planet-props">
                    <li>Gravity</li>
                    <li>{gravity}</li>
                </ul>
                <hr />
            </div>
        </>
    )
}

export default PlanetView;