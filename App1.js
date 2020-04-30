import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';

export default function App() {
  const[name,setName]=useState('san andreas');
  const[item,setItem]=useState({name:'maggi' , price:60});
  
  const handleclick=()=>{
    setName('gta');
    setItem({name:"hide and seek",price:20});

  }

  return (
    <View style={styles.container}>
      <View style={styles.head}><Text >Open up App.js to start working on your app!</Text></View>
      
      <View style={styles.body}><Text style={styles.bold}>Open up App.js to start working on your app!</Text></View>
      
      <View>
        <Text>My name is :{name} </Text>
        <Text>My Item is :{item.name} and its price is {item.price}</Text>
      </View>
      
      <View>
        <Text >ENTER NAME</Text>
       
        <TextInput
        style={styles.input} 
        onChangeText={(val)=>setName(val)}
        placeholder="Name"
        />
      </View>
      
      <View style={styles.button}>
        <Button title="Change Content" onPress={handleclick} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    backgroundColor:"green",
    margin:20,
    padding:20,
  },
  bold:{
    fontWeight:"bold",
    margin:20,
    color:"yellow"
  },
  head:{
    fontSize:20,
    margin:20,
  },
  button:{
    padding:20,
    margin:20,
    backgroundColor:"pink",
  },
  input:{
    borderColor:"#777",
    borderWidth:1,
    padding:8,
    margin:10,
    width:200


  }
});
