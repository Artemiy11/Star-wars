import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import ItemList from '../itemlist/itemlist';

function App() {
  return (
    <>
      <div className="container">
        <Header/>
        <RandomPlanet/>
        <ItemList/>
      </div>
    </>
  );
}

export default App;
