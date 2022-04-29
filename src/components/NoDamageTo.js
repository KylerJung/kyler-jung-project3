const NoDamageTo = ({ allNoDmgTo }) => {
  return (
    <section>

      {allNoDmgTo.length === 0 ? (<p></p>)
        :
        <>
          <h3>no damage to:</h3>
          {
            allNoDmgTo.map(type => {
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


export default NoDamageTo