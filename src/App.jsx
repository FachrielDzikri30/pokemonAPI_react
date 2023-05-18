import { useState, useEffect } from "react"
import PokeList from './components/PokeList'
import PokeDetail from './components/PokeDetail'

function App () {
  const [pokemonList, setPokemonList] = useState([])

  const [selectedPokemon, setSelectedPokemon] = useState("")

  const [pokemonDetail, setPokemonDetail] = useState()

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=36")
    .then((result) => result.json())
    .then((data) => setPokemonList(data.results))
    .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (!selectedPokemon) return
    fetch (`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
    .then((result) => result.json())
    .then((data) => setPokemonDetail(data))
    .catch((err) => console.log(err))
  }, [selectedPokemon])

  const clear = () => {
    setSelectedPokemon("")
    setPokemonDetail()
  }

  return (
    <div style={styles.container}>
      <h2>Pokemon API</h2>
      <PokeList 
        pokemonList={pokemonList}
        setSelectedPokemon={setSelectedPokemon} 
      />
      {pokemonDetail && (
        <div>
          <h2>Pokemon Detail</h2>
          <PokeDetail pokemonDetail={pokemonDetail} />
          <button style={styles.button} onClick={() => clear()}>
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    width: '90%',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: '6px',
    padding: '12px 24px',
    fontSize: '1em',
    cursor: 'pointer',
    marginTop: '32px',
  },
}

export default App