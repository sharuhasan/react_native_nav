import React,{useState} from 'react';
import { StyleSheet, Text, View , ScrollView, FlatList,TouchableOpacity} from 'react-native';

export default function App() {
 
  const[PROD,setItem]=useState([
  {name:'maggi' , price:"60"},
  {name:'magg' , price:"600"},
  {name:'ma' , price:"601"},
  {name:'m' , price:"620"}]);

  const presshandler=(price)=>{
    console.log(price);
    setItem((rem)=>{
      return rem.filter(x=>x.price!=price)
    })

  }
  
  return (
    <View style={styles.container}>
     
     {/* <ScrollView>
     {PROD.map((x)=>{
       return(
         
         <View style={styles.item} key={x.price}>
          <Text>{x.name}</Text>      
         </View>
       )
     })}
     </ScrollView> */}

     <FlatList 
      
      numColumns={2}
      keyExtractor={(item)=>item.price}
      data={PROD}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>presshandler(item.price)}>
        <Text style={styles.item} >{item.name}</Text>
        </TouchableOpacity>
      )} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:50
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


  },
  item:{
    padding:10,margin:8,backgroundColor:"pink"
  }
});
