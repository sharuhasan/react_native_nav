import React, { useState } from 'react';
import Home from "./screens/home"
import * as font from 'expo-font'
import { AppLoading } from 'expo';
import Navigator from './routes/homestack'


const getfonts=()=>{
    return (
        font.loadAsync({
            'nun-reg':require('./assets/fonts/Nunito-Regular.ttf'),
            'nun-bold':require("./assets/fonts/Nunito-Bold.ttf"),
            'pacifico': require('./assets/fonts/Pacifico-Regular.ttf')
        })
    )
}



export default function Form() {


    const[fontsloaded,setload]=useState(false)    
    if(fontsloaded){
        return(
            <Navigator />       
        )

    }
    else{
       return(
           <AppLoading startAsync={getfonts} onFinish={()=>setload(true)} />
       )
    }
    
}