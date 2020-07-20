import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader2 from '../components/AppHeader2'

export default class ReadScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AppHeader2/>
        <Text style={styles.text2}>
           An old man lived in the village. He was one of the most unfortunate people in the world. 
           The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood.
           The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him,
            because his misfortune became contagious. 
           It was even unnatural and insulting to be happy next to him.
He created the feeling of unhappiness in others.
But one day, when he turned eighty years old, an incredible thing happened. Instantly everyone started hearing the rumour:
“An Old Man is happy today, he doesn’t complain about anything, smiles, and even his face is freshened up.”
The whole village gathered together. The old man was asked:
Villager: What happened to you?
“Nothing special. Eighty years I’ve been chasing happiness, and it was useless. And then I decided to live without happiness and just enjoy life. That’s why I’m happy now.” – An Old Man
Moral of the story:
Don’t chase happiness. Enjoy your life.
           </Text>
          <Text style={styles.text}>Read story by Authors</Text>
           
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
  text:{
    marginTop: 50,
    color: 'red',
    fontSize: 30,
  },
  text2: {
    fontSize: 22,
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 30,  
  }
});