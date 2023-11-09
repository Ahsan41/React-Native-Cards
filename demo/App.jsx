import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView , Image } from 'react-native';

export default function App() {
  const {height,width} = Dimensions.get('screen')
  const [movies, setMovies] = useState
  ([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=edcaa7a5&s=marvel`); // Removed backticks
        const data = await res.json();
        console.log(data.Search);
        setMovies(data.Search);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <View style={styles.container}>

      <ScrollView>
      <Text style={styles.Text}> 10 movies found in this list</Text>

   {movies.map((movie)=>(

     
     <View style={styles.moviesList} key={movie.imbdID}>
            <Image
            style={{width:250,height:200,display:'flex',alignItems:'center',objectFit:'cover',flexWrap:'wrap', backgroundColor:"#fff"}}
            source= {movie.Poster}/>
            <Text style={{color:'gold', marginTop:20, fontSize:15 }} >{movie.Title}</Text>
          </View>
            ))}
        

      </ScrollView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color:'gold',
    fontWeight:'bold',
    marginTop:50,
    fontSize:20,
    textAlign:'center'
    
  },
  moviesList:{
    display:'flex',
    alignItems:'center',
    marginTop:40,
  }
});
