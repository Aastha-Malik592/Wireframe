import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const App = () => {
  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Food Delivery
      </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text>Pizza - ₹299</Text>
      </View>

      <View style={styles.card}>
        <Text>Burger - ₹199</Text>
      </View>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    marginTop:50
  },

  title:{
    fontSize:30,
    fontWeight:'bold'
  },

  input:{
    borderWidth:1,
    marginTop:15,
    padding:10
  },

  button:{
    backgroundColor:'black',
    padding:15,
    marginTop:15
  },

  buttonText:{
    color:'white',
    textAlign:'center'
  },

  card:{
    borderWidth:1,
    padding:20,
    marginTop:15
  }

});