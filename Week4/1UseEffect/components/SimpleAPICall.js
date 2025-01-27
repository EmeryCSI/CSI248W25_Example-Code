import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";

export default function SimpleAPICall() {
  //state variable to store our pikachu
  const [pokemon, setPokemon] = useState(null);
  //we want an effect thats ONCE on component load
  //retrieve the pokemon info and update the pokemon state
  useEffect(() => {
    //fetch library to make this api call
    //make an async function
    //then call it - all inside useeffect
    const fetchPokemon = async () => {
      //fetch(url) - give you a response
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      //use response to parse to json
      const data = await response.json();
      //update the state with the data
      //console.log(data);
      console.log(data.sprites.front_default);
      setPokemon(data);
    };
    fetchPokemon();
  }, []);
  return (
    <View>
      <Text>SimpleAPICall</Text>
      <Text>Name: {pokemon?.name}</Text>
      <Text>Height: {pokemon?.height}</Text>
      <Text>Weight: {pokemon?.weight}</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: pokemon?.sprites.front_default }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({});
