const Pokemon = ({ pokemonType, userSelection }) => {
  const slicedPokemonType = pokemonType.slice(0, 10)
  return (
    <section className={userSelection} id="pokemonSection">
      {pokemonType.length === 0 ? (<></>)
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