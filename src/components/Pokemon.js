import { useEffect, useState } from "react"
import axios from "axios"

const Pokemon = ({ pokemonType, userSelection }) => {

  const slicedPokemonType = pokemonType.slice(0, 10)
  const [pokeName, setPokeName] = useState ([])
  // console.log(pokemonType)

  console.log(slicedPokemonType)

  useEffect(() => {
    axios({
      url: `https://pokeapi.co/api/v2/pokemon/${pokeName}`,
      method: "GET",
      dataResponse: "json",
    }).then(response => {
      console.log(response)
      const pokeImg = (response.data.sprites.other.home.front_default)

      slicedPokemonType.map(type => {
        console.log(type.pokemon.name)
        setPokeName(type.pokemon.name)
      })
      console.log(pokeName)

    })

    

  }, [pokeName])



  return (
    <section className={userSelection}>
      {pokemonType.length === 0 ? (<p></p>)
      :
      <>
      <h3>some Pokemon of this type: </h3>
        <div className="infoContainer">
        {
          slicedPokemonType.map(type => {
            return (
              <div key={type.pokemon.url} className="moveContainer">
                <p>{type.pokemon.name}</p>
              </div>
              )
              
            })
          }
        </div>
        </>
      }
    </section>
  )
}


export default Pokemon