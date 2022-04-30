const HalfDamageFrom = ({ allHalfDmgFrom, userSelection }) => {
  return (
    <section className={userSelection}>

      {allHalfDmgFrom.length === 0 ? (<p></p>)
        :
        <>
          <h3>half damage from:</h3>
          <div className="infoContainer">
          {
            allHalfDmgFrom.map(type => {
              return (
                <div key={type.url}>
                  <p>{type.name}</p>
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


export default HalfDamageFrom