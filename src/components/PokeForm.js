import { useState } from "react";

const PokeForm = (props) => {

  const [userChoice, setUserChoice] = useState("Choose a type!")

  const handleChoice = (change) => {
    setUserChoice(change.target.value)
  }


  return(
    <select onChange={handleChoice} value={userChoice} id="pokemonType" name="pokemonType">
      <option value="normal">Normal</option>
      <option value="fighting">Fighting</option>
      <option value="flying">Flying</option>
      <option value="poison">Poison</option>
      <option value="ground">Ground</option>
      <option value="rock">Rock</option>
      <option value="bug">Bug</option>
      <option value="ghost">Ghost</option>
      <option value="steel">Steel</option>
      <option value="fire">Fire</option>
      <option value="water">Water</option>
      <option value="grass">Grass</option>
      <option value="electric">Electric</option>
      <option value="psychic">Psychic</option>
      <option value="ice">Ice</option>
      <option value="dragon">Dragon</option>
      <option value="dark">Dark</option>
      <option value="fairy">Fairy</option>
    </select>

  )
}





export default PokeForm