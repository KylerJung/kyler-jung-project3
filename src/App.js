import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import PokeForm from './components/PokeForm';

function App() {

  const [allDoubleDmgTo, setAllDoubleDmgTo] = useState([])
  const [allHalfDmgTo, setAllHalfDmgTo] = useState([])
  const [allNoDmgTo, setAllNoDmgTo] = useState([])
  const [allDoubleDmgFrom, setAllDoubleDmgFrom] = useState([])
  const [allHalfDmgFrom, setAllHalfDmgFrom] = useState([])
  const [allNoDmgFrom, setAllNoDmgFrom] = useState([])

  useEffect(() => {
    axios({
      url: `https://pokeapi.co/api/v2/type/10/`,
      method: "GET",
      dataResponse: "json",
    }).then(response => {
      // console.log(response)
      const responseData = response.data.damage_relations
      console.log(responseData)
      // different consts for each array
      const doubleDmgToArray = responseData.double_damage_to
      const halfDmgToArray = responseData.half_damage_to
      const noDmgToArray = responseData.no_damage_to

      const doubleDmgFromArray = responseData.double_damage_from
      const halfDmgFromArray = responseData.half_damage_from
      const noDmgFromArray = responseData.no_damage_from

      // console.log(noDmgFromArray)

      // double damage to object
      const doubleDmgToObj = doubleDmgToArray.map((doubleDmgTo) => {
        // console.log(doubleDmgTo.name)
      })

      // half damage to obj
      const halfDmgToObj = halfDmgToArray.map((halfDmgTo) => {
        // console.log(halfDmgTo.name)
      })

      // no damage to obj
      const noDmgToObj = noDmgToArray.map((noDmgTo) => {
        // console.log(noDmgTo.name)
      })

      // double damage from obj
      const doubleDmgFromObj = doubleDmgFromArray.map((doubleDmgFrom) => {
        // console.log(doubleDmgFrom.name)
      })

      // half damage from obj
      const halfDmgFromObj = halfDmgFromArray.map((halfDmgFrom) => {
        // console.log(halfDmgFrom.name)
      })

      // no damage from obj
      const noDmgFromObj = noDmgFromArray.map((noDmgFrom) => {
        // console.log(noDmgFrom.name)
      })

    setAllDoubleDmgTo(doubleDmgToObj.name)
    setAllHalfDmgTo(halfDmgToObj.name)
    setAllNoDmgTo(noDmgToObj.name)
    setAllDoubleDmgFrom(doubleDmgFromObj.name)
    setAllHalfDmgFrom(halfDmgFromObj.name)
    setAllNoDmgFrom(noDmgFromObj.name)

    })
  }, [])

const getTypes = (event, type) => {
  event.preventDefault();
  console.log("getting types", type)
}



  return (
    <div className="App">
      <h1>Test Div</h1>
      <PokeForm getTypes={getTypes}/>
    </div>
  );
}

export default App;
