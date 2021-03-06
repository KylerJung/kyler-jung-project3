const NoDamageTo = ({ allNoDmgTo, userSelection }) => {
  return (
    <section className={userSelection}>
      {allNoDmgTo.length === 0 ? (<></>)
        :
        <>
          <h3>no damage to:</h3>
          <div className="infoContainer">
          {
            allNoDmgTo.map(type => {
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


export default NoDamageTo