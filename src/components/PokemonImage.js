import { useState, useEffect } from "react"
import axios from "axios"

const PokemonImage = ({pokemonType}) => {
  const slicedPokemonType = pokemonType.slice(0, 10)

  const [pokeImg, setPokeImg] = useState()

  let pokeNameArray = slicedPokemonType.map((e) => {
    return (e.pokemon.name)
  })

  useEffect(() => {
    axios({
      url: `https://pokeapi.co/api/v2/pokemon/${pokeNameArray[0]}`,
      method: "GET",
      dataResponse: "json",
    }).then(response => {
      const pokemonImage = (response.data.sprites.other.home.front_default)
      setPokeImg(pokemonImage)

    })

  }, [pokeNameArray[0]])

  return (
    <div className="imgContainer" >
      {pokemonType.length === 0 ? (<></>) 
      : 
      (<img src={pokeImg} alt={`photo of ${pokeNameArray[0]}`}></img>)
      }
    </div> 
  )



}

export default PokemonImage