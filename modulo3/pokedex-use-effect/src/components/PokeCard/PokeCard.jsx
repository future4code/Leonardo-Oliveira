import React, { useEffect, useState } from 'react'
import axios from "axios";

const  PokeCard = ({pokemon}) => {
  const [individualPokemon, setIndividualPokemon] = useState({name:'', weight: 0, types:[
    {slot:0, type:{name:'', url:''}}
  ], sprites:{front_default:''}});

  const getPokemon = async (namePokemon) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
      const pokemonItem = await response.data;
      console.log(pokemonItem)
      console.log('Renderizou!')
      setIndividualPokemon(pokemonItem);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemon(pokemon);
  }, [pokemon])

  return (
    <div>
        <p>{individualPokemon.name}</p>
        <p>{individualPokemon.weight} Kg</p>
        {individualPokemon.types && <p>{individualPokemon.types[0].type.name}</p>}
        {individualPokemon.sprites && (
          <img src={individualPokemon.sprites.front_default} alt={individualPokemon.name} />
        )}
      </div>
  )
}
export default PokeCard