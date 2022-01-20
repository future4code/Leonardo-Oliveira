import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import { AppContainer } from "./App.styled";


const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokeName, setPokeName] = useState('');
  
    // O UseEffect saberá qual será o "estado" que vai ser mudado
    // baseado no que está dentro da função ou das funções internas,
    // OLHANDO para o setState daquela função.
    
    const getAllPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
        const pokemons = await response.data.results;
        setPokemons(pokemons);

      } catch (error) {
        console.log(error)
      }
    }

    const changePokeName = (event) => {
      setPokeName(event.target.value)
    }


    useEffect(() => {
      getAllPokemons();
    }, [])
    
    
    return (
    <AppContainer>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokemons.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </AppContainer>
  );
}

export default App;
