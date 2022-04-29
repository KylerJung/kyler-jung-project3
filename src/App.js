import axios from 'axios';
import { useEffect, useState, } from 'react';
import './App.css';
import DisplayType from './components/DisplayType';
import DoubleDamageFrom from './components/DoubleDamageFrom';
import DoubleDamageTo from './components/DoubleDamageTo';
import HalfDamageFrom from './components/HalfDamageFrom';
import HalfDamageTo from './components/HalfDamageTo';
import NoDamageFrom from './components/NoDamageFrom';
import NoDamageTo from './components/NoDamageTo';
import PokeForm from './components/PokeForm';

function App() {

  const [allDoubleDmgTo, setAllDoubleDmgTo] = useState([])
  const [allHalfDmgTo, setAllHalfDmgTo] = useState([])
  const [allNoDmgTo, setAllNoDmgTo] = useState([])
  const [allDoubleDmgFrom, setAllDoubleDmgFrom] = useState([])
  const [allHalfDmgFrom, setAllHalfDmgFrom] = useState([])
  const [allNoDmgFrom, setAllNoDmgFrom] = useState([])

  const [userSelection, setUserSelection] = useState([])

  useEffect(() => {
    axios({
      url: `https://pokeapi.co/api/v2/type/${userSelection}/`,
      method: "GET",
      dataResponse: "json",
    }).then(response => {
      // console.log(response)

      // const testResponse = response.data.results
      // console.log(testResponse)

      const responseData = response.data.damage_relations
      console.log(responseData)

      // different states for each array
      setAllDoubleDmgTo(response.data.damage_relations.double_damage_to)
      setAllHalfDmgTo(response.data.damage_relations.half_damage_to)
      setAllNoDmgTo(response.data.damage_relations.no_damage_to)

      setAllDoubleDmgFrom(response.data.damage_relations.double_damage_from)
      setAllHalfDmgFrom(response.data.damage_relations.half_damage_from)
      setAllNoDmgFrom(response.data.damage_relations.no_damage_from)

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
      <h1>Test Div</h1>
      <PokeForm getTypes={getTypes}/>
      <DisplayType userSelection={userSelection}/>
      <DoubleDamageTo allDoubleDmgTo={allDoubleDmgTo}/>
      <HalfDamageTo allHalfDmgTo={allHalfDmgTo}/>
      <NoDamageTo allNoDmgTo={allNoDmgTo}/>
      <DoubleDamageFrom allDoubleDmgFrom={allDoubleDmgFrom}/>
      <HalfDamageFrom allHalfDmgFrom={allHalfDmgFrom}/>
      <NoDamageFrom allNoDmgFrom={allNoDmgFrom}/>
    </div>
  );
}

export default App;
