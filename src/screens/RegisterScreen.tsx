import { View, Text,Image, Keyboard, Alert, ScrollView } from 'react-native'
import React, { FC, useState } from 'react'
import Custominput from '../components/global/Custominput';
import CustomButton from '../components/ui/CustomButton';
import { signup} from '../service/authService';
import {  resetAndNavigate } from '../utils/NavigationUtils';
import { RouteProp, useRoute } from '@react-navigation/native';

type RegisterScreenRoute = {
   phone:number
}

type RegisterScreenRouteProp =  RouteProp<{RegisterScreen:RegisterScreenRoute},'RegisterScreen'>

const RegisterScreen: FC = () => {

    const route = useRoute<RegisterScreenRouteProp>()
    console.log(route.params.phone)
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [loading,setLoading] = useState(false);

    const handleRegister = async () =>{
       Keyboard.dismiss()
       setLoading(true)
       let name = firstName + "" + lastName
       try {
          await  signup (route.params.phone,email,name)
          resetAndNavigate('DashboardScreen')
       } catch (error) {
          Alert.alert("There was an error")
       } finally {
         setLoading(false)
       }
    }

  return (
   
      
        <ScrollView >
        <Image  source={require('../assets/logo_text.png')}
          className='h-6 w-32 resize self self-center'/>
 
      <Text className='mt-6 font-semibold text-lg text-text'>Create Profile</Text> 
      <Text className='mb-2 text-lg text-text'>Your name and profile picture will be used for caller ID and profile details </Text> 

      <Custominput  
        label='Email'
        value={email}
        keyboardType='email-address'
        placeholder='your email address'
        onChangeText={setEmail}
        className='mr-2 ml-2'
      />

      < Custominput  
        label='First Name'
        value={firstName}
        placeholder='enter your name firstname'
        onChangeText={setFirstName}
        className='mr-2 ml-2'
      />

     < Custominput  
        label='last Name'
        value={lastName}
        placeholder='enter your name lastname'
        onChangeText={setLastName}
        className='mr-2 ml-2'
      />

      <View  style={{marginTop:40}} className='absolute  -bottom-96  self-center '>
         <CustomButton 
         title='Continue'
          onPress={handleRegister}
          loading={loading}
         />
      </View>
        </ScrollView>
         
  
  )
}

export default RegisterScreen;


