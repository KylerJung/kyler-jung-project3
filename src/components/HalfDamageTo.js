const HalfDamageTo = ({allHalfDmgTo}) => {
  return (
    <section>


      {allHalfDmgTo.length === 0 ? (<p></p>) 
      :
      <>
      <h3>half damage to:</h3>
      {
        allHalfDmgTo.map(type => {
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


export default HalfDamageTo