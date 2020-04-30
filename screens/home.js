import React from 'react';
import {StyleSheet,View,Text, Button} from 'react-native'

export default function Home({navigation}){

    const pressHandler=()=>{
     navigation.navigate('Form')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>HOME </Text>
            <Text style={styles.text}>SCREEN</Text>
            <Text style={styles.content}>Register for Shaastra </Text>
            <View style={styles.Button}>
                 <Button title="SIGN-UP" onPress={pressHandler} /> 
            </View>
        </View>
        
    )
}

const styles=StyleSheet.create({

    container:{
        padding:24,
        backgroundColor:"#abc",
        marginTop:0,
        flex:1
    },
    text:{
        textAlign:'center',
        fontSize:24,
        fontFamily:'nun-bold'
    },
    Button:{
        width :150,
        marginTop:50,
        marginHorizontal:100,
        
       
    },
    content:{
        fontSize:24,
        color :'red',
        fontFamily:'pacifico',
        marginTop:50,
        textAlign:'center'
    }

})