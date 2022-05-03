const DisplayType = ({ userSelection }) => {
  return (
    <section id="typeTitle">
      { userSelection.length === 0 ? (<></>) : (<h2>You've selected {userSelection}!</h2>) }
    </section>
  )
}

export default DisplayType