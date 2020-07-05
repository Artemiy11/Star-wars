import React from 'react';

const PeopleView = ({ person}) => {
    const { birth_year, mass, eye_color, name, gender, height, id } = person;
    return (
        <>
            <img className="person-img" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person" />
            <div className="person-ul-wrapper">
                <h3 className="person-name">{name}</h3>
                <ul className="person-props">
                    <li>Birth year</li>
                    <li>{birth_year}</li>
                </ul>
                <hr />
                <ul className="person-props">
                    <li>Mass</li>
                    <li>{mass}</li>
                </ul>
                <hr />
                <ul className="person-props">
                    <li>Eye color</li>
                    <li>{eye_color}</li>
                </ul>
                <hr />
                <ul className="person-props">
                    <li>Gender</li>
                    <li>{gender}</li>
                </ul>
                <hr />
                <ul className="person-props">
                    <li>Height</li>
                    <li>{height}</li>
                </ul>
                <hr />
            </div>
        </>
    )
}

export default PeopleView;