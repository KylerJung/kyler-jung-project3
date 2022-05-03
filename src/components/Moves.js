const Moves = ({ moveType, userSelection }) => {

  const slicedMoveType = moveType.slice(0,20)
  return (
    <section className={userSelection} id="moveWrap">
      {moveType.length === 0 ? (<></>)
      :
      <>
      <h3>some moves of this type: </h3>
        <div className="infoContainer">
        {
          slicedMoveType.map(move => {
            return(
                <div key={move.url} className="moveContainer">
                  <p>{move.name}</p>
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


export default Moves