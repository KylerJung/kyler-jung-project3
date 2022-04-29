const DisplayType = ({ userSelection }) => {
  return (
    <section>
      { userSelection.length === 0 ? (<h2></h2>) : (<h2>You've selected {userSelection}!</h2>) }
    </section>
  )
}

export default DisplayType