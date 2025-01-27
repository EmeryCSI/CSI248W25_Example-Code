import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { fetchPokemonDetails, fetchPokemonList } from "../data/PokeRepo";

export default function BetterAPICall() {
  //state variable to store the pokemon
  const [pokemonList, setPokemonList] = useState([]);
  //state variable to track when the component is loading (waiting on API response)
  const [isLoading, setIsLoading] = useState(true);
  //state variable for errors
  const [error, setError] = useState(null);

  useEffect(() => {
    //we need async function
    const fetchPokemon = async () => {
      try {
        //set loading to true
        setIsLoading(true);
        //fetch the list of pokemon
        const list = await fetchPokemonList();
        //console.log(list);
        //list.forEach((poke) => console.log(poke));
        //lets make an array to store a collection of pokemon details
        const detailedList = [];
        for (const pokemon of list) {
          const details = await fetchPokemonDetails(pokemon.url);
          detailedList.push(details);
        }
        // const detailedList = await Promise.all(
        //   list.map((pokemon) => fetchPokemonDetails(pokemon.url))
        // );
        //console.log(detailedList);
        setPokemonList(detailedList);
      } catch (error) {
        //update the error state
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  function renderPokemon({ item }) {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.height}</Text>
        <Text>{item.weight}</Text>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item.sprites.front_default }}
        ></Image>
      </View>
    );
  }

  return (
    <ScrollView>
      <Text>BetterAPICall</Text>
      {/* conditional Rendering to show the UI
       */}
      {isLoading && <Text>...Loading</Text>}
      {error && <Text>Error {error}</Text>}
      {/* if no error and no loading */}
      {!error && !isLoading && (
        <FlatList
          data={pokemonList}
          keyExtractor={(item) => item.id}
          renderItem={renderPokemon}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
