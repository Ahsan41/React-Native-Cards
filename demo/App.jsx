import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';

export default function App() {
  const { height, width } = Dimensions.get('screen');
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=edcaa7a5&s=${search}`);
        const data = await response.json();

        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [search]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.Text}>{movies.length} movies found in this list</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search for movies..."
        />

        {movies.map((movie) => (
          <View style={styles.moviesList} key={movie.imdbID}>
            <Image
              style={{
                width: 250,
                height: 200,
                display: 'flex',
                alignItems: 'center',
                objectFit: 'cover',
                flexWrap: 'wrap',
                backgroundColor: '#fff',
              }}
              source={{ uri: movie.Poster }}
            />
            <Text style={{ color: 'gold', marginTop: 20, fontSize: 15 }}>{movie.Title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'gold',
    fontWeight: 'bold',
    marginTop: 50,
    fontSize: 20,
    textAlign: 'center',
  },
  moviesList: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 8,
    color: 'black',
    backgroundColor: 'gold',
    marginTop: 30,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
  },
});