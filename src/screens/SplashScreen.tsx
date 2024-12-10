import { View,Image, ActivityIndicator} from 'react-native'
import React, { useEffect,FC } from 'react'
import { Colors } from '../utils/Constants'
import { resetAndNavigate } from '../utils/NavigationUtils'
import { storage } from "../state/storage";
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  exp: number
}

const SplashScreen:FC = () => {
  
  const tokenCheck = async () => {
     const accessToken = storage.getString('accessToken') as string
     if(accessToken){
       const decodeAccessToken = jwtDecode<DecodedToken>(accessToken)
       const  currentTime = Date.now()/1000;
       if( decodeAccessToken?.exp >= currentTime){
         resetAndNavigate('DashboardScreen')
         return
       }
     }
     resetAndNavigate("AuthScreen")
  }




     useEffect(()=>{
         setTimeout(()=>{
           tokenCheck()
         },1000)
     },[])


  return (
    
    <View className=' bg-white  justify-center items-center flex-1'> 
    <Image  source={require('../assets/logo.png')} 
     className='h-36 w-36 rounded-full '
    />
      <View className=' absolute bottom-10 '>
        <ActivityIndicator size='large' color={Colors.primary}/>
      </View>
    </View>
    
   
  )
}

export default SplashScreen
