const NoDamageFrom = ({ allNoDmgFrom }) => {
  return (
    <section>

      {allNoDmgFrom.length === 0 ? (<p></p>)
        :
        <>
          <h3>no damage from:</h3>
          {
            allNoDmgFrom.map(type => {
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


export default NoDamageFrom