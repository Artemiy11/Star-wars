import React from 'react';

const BtnToggle = ({onTogglePlanet}) => {
    return <button className="btn btn-danger toggle-planet" onClick={onTogglePlanet}>Toggle Random Planet</button>
}

export default BtnToggle;