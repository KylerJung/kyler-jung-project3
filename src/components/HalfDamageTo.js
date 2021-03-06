const HalfDamageTo = ({allHalfDmgTo, userSelection}) => {
  return (
    <section className={userSelection}>
      {allHalfDmgTo.length === 0 ? (<></>) 
      :
      <>
          <h3>half damage to:</h3>
          <div className="infoContainer">
          {
            allHalfDmgTo.map(type => {
            return (
              <div key={type.url} className="typeContainer">
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


export default HalfDamageTo