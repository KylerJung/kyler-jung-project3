const DoubleDamageFrom = ({ allDoubleDmgFrom }) => {
  return (
    <section>

      {allDoubleDmgFrom.length === 0 ? (<p></p>)
        :
        <>
        <h3>double damage from:</h3>
          {
            allDoubleDmgFrom.map(type => {
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


export default DoubleDamageFrom