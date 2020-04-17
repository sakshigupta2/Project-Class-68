import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader2 extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Bed-Time Stories</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'red',
    marginBottom: 220,
  },
  text:{
     
    color: 'yellow',
    padding: 20,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader2;