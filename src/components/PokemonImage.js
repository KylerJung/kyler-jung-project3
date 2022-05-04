import { useState, useEffect } from "react"
import axios from "axios"

const PokemonImage = ({pokemonType}) => {
  const slicedPokemonType = pokemonType.slice(0, 10)

  const [pokeImg, setPokeImg] = useState()

  const pokeNameArray = slicedPokemonType.map((e) => {
    return (e.pokemon.name)
  })

  const pokeNameArrayOne = pokeNameArray[0]

  useEffect(() => {
    axios({
      url: `https://pokeapi.co/api/v2/pokemon/${pokeNameArrayOne}`,
      method: "GET",
      dataResponse: "json",
    }).then(response => {
      const pokemonImage = (response.data.sprites.other.home.front_default)
      setPokeImg(pokemonImage)

    })

  }, [pokeNameArrayOne])

  return (
    <div className="imgContainer" >
      {pokemonType.length === 0 ? (<></>) 
      : 
      (<img src={pokeImg} alt={`${pokeNameArrayOne}`}></img>)
      }
    </div> 
  )



}

export default PokemonImage