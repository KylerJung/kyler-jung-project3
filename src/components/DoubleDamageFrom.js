const DoubleDamageFrom = ({ allDoubleDmgFrom, userSelection }) => {
  return (
    <section className={userSelection}>

      {allDoubleDmgFrom.length === 0 ? (<p></p>)
        :
        <>
          
          <h3>double damage from:</h3>
          <div className="infoContainer">
          {
            allDoubleDmgFrom.map(type => {
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


export default DoubleDamageFrom