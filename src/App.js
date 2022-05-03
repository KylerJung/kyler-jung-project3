import axios from 'axios';
import { useEffect, useState, } from 'react';
import './styles/sass/App.scss';
import DisplayType from './components/DisplayType';
import DoubleDamageFrom from './components/DoubleDamageFrom';
import DoubleDamageTo from './components/DoubleDamageTo';
import HalfDamageFrom from './components/HalfDamageFrom';
import HalfDamageTo from './components/HalfDamageTo';
import NoDamageFrom from './components/NoDamageFrom';
import NoDamageTo from './components/NoDamageTo';
import PokeForm from './components/PokeForm';
import Moves from './components/Moves';
import Pokemon from './components/Pokemon';
import Title from './components/Title';

function App() {

  const [allDoubleDmgTo, setAllDoubleDmgTo] = useState([])
  const [allHalfDmgTo, setAllHalfDmgTo] = useState([])
  const [allNoDmgTo, setAllNoDmgTo] = useState([])
  const [allDoubleDmgFrom, setAllDoubleDmgFrom] = useState([])
  const [allHalfDmgFrom, setAllHalfDmgFrom] = useState([])
  const [allNoDmgFrom, setAllNoDmgFrom] = useState([])

  const [userSelection, setUserSelection] = useState([])
  const [moveType, setMoveType] = useState([])
  const [pokemonType, setPokemonType] = useState([])

  useEffect(() => {
    axios({
      url: `https://pokeapi.co/api/v2/type/${userSelection}/`,
      method: "GET",
      dataResponse: "json",
    }).then(response => {
      // console.log(response)


      const responseData = response.data.damage_relations
      // console.log(responseData)

      // different states for each array
      setAllDoubleDmgTo(response.data.damage_relations.double_damage_to)
      setAllHalfDmgTo(response.data.damage_relations.half_damage_to)
      setAllNoDmgTo(response.data.damage_relations.no_damage_to)

      setAllDoubleDmgFrom(response.data.damage_relations.double_damage_from)
      setAllHalfDmgFrom(response.data.damage_relations.half_damage_from)
      setAllNoDmgFrom(response.data.damage_relations.no_damage_from)

      // state for pokemon moves of said type
      setMoveType(response.data.moves)
      // state for pokemon of said type
      setPokemonType(response.data.pokemon)
      
    })
  }, [userSelection])

  const getTypes = (event, type) => {
    event.preventDefault();
    // console.log(type)
    
    setUserSelection(type)
  }
  // console.log(userSelection)

  



  return (
    <div className="App">
      <header>
        <Title />
        <PokeForm getTypes={getTypes}/>
        <DisplayType userSelection={userSelection}/>


        <div className="resultsContainer">
          <div className='toContainer'>
            <DoubleDamageTo allDoubleDmgTo={allDoubleDmgTo} userSelection={userSelection}/>
            <HalfDamageTo allHalfDmgTo={allHalfDmgTo} userSelection={userSelection}/>
            <NoDamageTo allNoDmgTo={allNoDmgTo} userSelection={userSelection}/>
          </div>
          <div className='fromContainer'>
            <DoubleDamageFrom allDoubleDmgFrom={allDoubleDmgFrom} userSelection={userSelection}/>
            <HalfDamageFrom allHalfDmgFrom={allHalfDmgFrom} userSelection={userSelection}/>
            <NoDamageFrom allNoDmgFrom={allNoDmgFrom} userSelection={userSelection}/>
          </div>
        </div>
      </header>
      <div className="extraInfoContainer">
      <Pokemon pokemonType={pokemonType} userSelection={userSelection}/>
      <Moves moveType={moveType} userSelection={userSelection}/>
      </div>
      
    </div>
  );
}

export default App;
