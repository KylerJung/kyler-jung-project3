const DoubleDamageTo = ({ allDoubleDmgTo }) => {
  return (
    <section>


      {allDoubleDmgTo.length === 0 ? (<p></p>)
        :
        <>
          <h3>double damage to:</h3>
          {
            allDoubleDmgTo.map(type => {
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


export default DoubleDamageTo