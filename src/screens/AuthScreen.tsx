import { View, Text, KeyboardAvoidingView, Image,SafeAreaView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import CustomSafeAreaView from '../components/global/CustomSafeAreaView';
import Custominput from '../components/global/Custominput';
import CustomButton from '../components/ui/CustomButton';
import { login } from '../service/authService';
import { navigate, resetAndNavigate } from '../utils/NavigationUtils';

const AuthScreen = () => {
    const [phone,setPhone] = useState("");
    const [loading,setLoading] = useState(false);

    const handleAuth = async () =>{
       Keyboard.dismiss()
       setLoading(true)
       try {
          await  login(phone)
          resetAndNavigate('DashboardScreen')
       } catch (error) {
          navigate('RegisterScreen',{phone:phone})
       } finally {
         setLoading(false)
       }
    }

  return (
    <KeyboardAvoidingView 
      className='flex-1'
      keyboardVerticalOffset={10}
      behavior='padding'
    >
      <SafeAreaView className='py-2 px-2'>
         <Image  source={require('../assets/logo_text.png')}
          className='h-6 w-32 resize self self-center'/>
 
      <Text className='mt-6 font-semibold text-lg text-text'>Enter your phone number</Text> 
      <Text className='mb-2 text-lg text-text'>Truecaller will send you a one-time password via SMS to verify you phone number</Text> 

      <Custominput  
        label='Phone number (+91)'
        value={phone}
        maxLength={10}
        keyboardType='number-pad'
        placeholder='Your Phone Number'
        onChangeText={setPhone}
      />

      <View  style={{marginTop:40}} className='-bottom-96 absolute self-center'>
         <CustomButton 
         title='Continue'
          onPress={handleAuth}
          loading={loading}
         />
      </View>

      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen