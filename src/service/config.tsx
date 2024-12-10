import { Platform } from "react-native"




// For Emulater or simulator
export const BASE_URL = Platform.OS === 'android' ? 
'http://10.0.2.2:3000/user':
'http://localhost:3000/user'



// For Phycical device
//export const BASE_URL = 'http://192.168.29.88:3000/user'

