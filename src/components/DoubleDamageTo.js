const DoubleDamageTo = ({ allDoubleDmgTo, userSelection }) => {
  return (
    <section className={userSelection}>


      {allDoubleDmgTo.length === 0 ? (<p></p>)
        :
        <>
          <h3>double damage to:</h3>
          <div className="infoContainer">
          {
            allDoubleDmgTo.map(type => {
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


export default DoubleDamageTo