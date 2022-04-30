const Moves = ({ moveType }) => {

  const slicedMoveType = moveType.slice(0,10)

  return (
    <section>
      {moveType.length === 0 ? (<p></p>)
      :
      <>
      <h3>some moves of this type: </h3>
        {
          slicedMoveType.map(move => {
            return(
              <div key={move.url}>
                <p>{move.name}</p>
              </div>
            )
          })
        }
      </>
      }
    </section>
  )
}


export default Moves