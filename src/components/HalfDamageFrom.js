const HalfDamageFrom = ({ allHalfDmgFrom }) => {
  return (
    <section>

      {allHalfDmgFrom.length === 0 ? (<p></p>)
        :
        <>
          <h3>half damage from:</h3>
          {
            allHalfDmgFrom.map(type => {
              return (
                <div key={type.url}>
                  <p>{type.name}</p>
                </div>
              )
            })
          }
        </>
      }
    </section>
  )
}


export default HalfDamageFrom