const Pokemon = ({ pokemonType }) => {

  const slicedPokemonType = pokemonType.slice(0, 10)

  return (
    <section>
      {pokemonType.length === 0 ? (<p></p>)
      :
      <>
      <h3>some Pokemon of this type: </h3>
        {
          slicedPokemonType.map(type => {
            return (
              <div key={type.pokemon.url}>
                <p>{type.pokemon.name}</p>
              </div>
              )
            })
          }
        </>
      }
    </section>
  )
}


export default Pokemon