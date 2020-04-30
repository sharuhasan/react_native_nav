import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput, ScrollView, TouchableWithoutFeedback, Keyboard, ImageBackground} from 'react-native';
import {Formik} from 'formik';
import  RNPickerSelect from 'react-native-picker-select'
import * as yup from 'yup'

const FormValidation=yup.object({
    name : yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().required().min(6),
    confirmpassword:yup.string().required().min(6).oneOf([yup.ref('password'), null], "Passwords don't match"),
    number:yup.number().positive().integer().test('Mobile number ',"Mobile No must be of 10 digits" ,
    (val)=>{ if(val!=null) return val.toString().length == 10; else return false}
    )
})

export default function VForm() {
    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <ScrollView>

        
        <View style={styles.container} >
        
            <Formik 
            initialValues={{name:"" , email : "" , password : "" , confirmpassword : "",number:"" ,state :""}} 
            validationSchema={FormValidation}
            onSubmit={(values,action)=>{
                action.resetForm();
                console.log(values);

            }}
            >
                {(props)=>(
                   
                    <View style={styles.form}>
                        <Text style={styles.label}>NAME :</Text>
                        <TextInput 
                        style={styles.input} 
                        placeholder="Name" 
                        onChangeText={props.handleChange('name')} 
                        value={props.values.name}
                        onBlur={props.handleBlur('name')}
                        />
                        <Text style ={styles.error}>{props.touched.name && props.errors.name}</Text>

                        <Text style={styles.label}>EMAIL :</Text>
                        <TextInput 
                        style={styles.input} 
                        placeholder="Email" 
                        onChangeText={props.handleChange('email')} 
                        value={props.values.email}
                        onBlur={props.handleBlur('email')}
                        />
                        <Text style ={styles.error}>{props.touched.email && props.errors.email}</Text>

                        <Text style={styles.label}>PASSWORD :</Text>
                        <TextInput 
                        style={styles.input} 
                        placeholder="password" 
                        onChangeText={props.handleChange('password')} 
                        secureTextEntry={true}
                        value={props.values.password}
                        onBlur={props.handleBlur('password')}
                        />
                        <Text style ={styles.error}>{props.touched.password && props.errors.password}</Text>

                        <Text style={styles.label}>CONFIRM PASSWORD :</Text>
                        <TextInput 
                        style={styles.input} 
                        placeholder="confirmpassword" 
                        onChangeText={props.handleChange('confirmpassword')} 
                        secureTextEntry={true}
                        value={props.values.confirmpassword}
                        onBlur={props.handleBlur('confirmpassword')}
                        />
                        <Text style ={styles.error}>{props.touched.confirmpassword && props.errors.confirmpassword}</Text>

                        <Text style={styles.label}>MOBILE NUMBER :</Text>
                        <TextInput 
                        style={styles.input} 
                        keyboardType="numeric"
                        placeholder="Mobile Number" 
                        onChangeText={props.handleChange('number')} 
                        value={props.values.number}
                        onBlur={props.handleBlur('number')}
                        />
                        <Text style ={styles.error}>{props.touched.number && props.errors.number}</Text>

                         <RNPickerSelect
                            
                            onValueChange={props.handleChange('state')}
                            placeholder={{label : 'SELECT STATE',value:'NO STATE SELECTED'}}
                            items={[
                                { label: 'Tamil Nadu', value: 'Tamil Nadu' },
                                { label: 'Karnataka', value: 'Karnataka' },
                                { label: 'Kerala', value: 'Kerala' },
                                { label:'Andhra Pradesh' , value: 'Andhra Pradesh' },
                                { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
                                { label: 'Assam', value: 'Assam' },
                                { label: 'Bihar', value: 'Bihar' },
                                { label: 'Chhatisgarh', value: 'Chhatisgarh' },
                                { label: 'Goa', value: 'Goa' },
                                { label: 'Gujarat', value: 'Gujarat' },
                                { label: 'Haryana', value: 'Haryana' },
                                { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
                                { label: 'Jharkhand', value: 'Jharkhand' },
                                { label: 'Karnataka', value: 'Karnataka' },
                                { label: 'Kerala', value: 'Kerala' },
                                { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
                                { label: 'Maharashtra', value: 'Maharashtra' },
                                { label: 'Manipur', value: 'Manipur' },
                                { label: 'Meghalaya', value: 'Meghalaya' },
                                { label: 'Mizoram', value: 'Mizoram' },
                                { label: 'Nagaland', value: 'Nagaland' },
                                { label: 'Odisha', value: 'Odisha' },
                                { label: 'Punjab', value: 'Punjab' },
                                { label: 'Rajasthan', value: 'Rajasthan' },
                                { label: 'sikkim', value: 'Sikkim' },
                                { label: 'Telangana', value: 'Telangana' },
                                { label: 'Tripura', value: 'Tripura' },
                                { label: 'Uttarakhand', value: 'Uttarakhand' },
                                { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
                                { label: 'West Bengal', value: 'West Bengal' },
                            ]} />
                        <View style={styles.button}>
                            <Button title="SUBMIT" color ='maroon' onPress={props.handleSubmit} />
                        </View>
                     </View>
                     
                
                )}

            </Formik>
            
        </View>
        </ScrollView>
       
       
    </TouchableWithoutFeedback>
    )
}

const styles=StyleSheet.create({
    container: {
        
        backgroundColor: '#fff',
        
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        
       
      },
      form:{
          marginTop:100,
          flex:1
      },
    input:{
        borderColor:"#777",
        borderWidth:1,
        padding:4,
        marginTop:4,
        width:300,
        borderRadius: 6,
        flex:1

      },
    button:{
        marginTop:20,
        flex:1
        
    },
    error:{
        color:'crimson',
        marginTop:6,
        marginBottom:8,
        textAlign:'center',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:12,
        flex:1
    },
   
    label:{
        fontWeight:"bold",
        fontSize:15,
        marginTop:10   ,
        flex:1

    }
}

)