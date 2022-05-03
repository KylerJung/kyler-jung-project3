const NoDamageFrom = ({ allNoDmgFrom, userSelection }) => {
  return (
    <section className={userSelection}>
      {allNoDmgFrom.length === 0 ? (<></>)
        :
        <>
          <h3>no damage from:</h3>
          <div className="infoContainer">
          {
            allNoDmgFrom.map(type => {
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


export default NoDamageFrom