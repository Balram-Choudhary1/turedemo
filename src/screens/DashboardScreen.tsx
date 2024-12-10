import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useUserStore } from '../state/userStore'
import { getAbbrName } from '../utils/miscUtils'
import UserAvatar from '../components/ui/UserAvatar'

const DashboardScreen = () => {

  const {user} = useUserStore()
  console.log(user);
  
  return (
    <SafeAreaView className='px-2 py-1'>
        <View className='flex-row items-center justify-between'>
          <Image 
          source={require('../assets/images/logo_text.png')}
          className='h-6 w-32 resize self-center'
          />
          <UserAvatar onPress={()=> {}} text={getAbbrName(user?.name) || "UN"}/>
        </View>
    </SafeAreaView>
  )
}

export default DashboardScreen