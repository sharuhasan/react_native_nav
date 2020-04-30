import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Form from '../screens/form';


const screens={
    Home : {
        screen : Home
    },
   
    Form : {
        screen : Form
    },  
    
}

const Homestack=createStackNavigator(screens);

export default createAppContainer(Homestack)