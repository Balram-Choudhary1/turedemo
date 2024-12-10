import { View, Text ,TextInput} from 'react-native'
import React, { FC, useState } from 'react'
import { Colors } from '../../utils/Constants';

interface CustominputProps {
     value:string;
     label:string;
     placeholder:string;
     onFocus?:()=>void;
     onChangeText:(t: string) => void;

}

const Custominput:FC <CustominputProps & React.ComponentProps<typeof TextInput >> = ({
    value,
    placeholder,
    onFocus,
    label,
    onChangeText,
    ...props
}) => {

    const [isFocused,setIsFoused] = useState(false)

    const handleFocus=()=>{
        setIsFoused(true)
        if(onFocus) onFocus()
    }

    const handleBlur=()=>{
        setIsFoused(false)
    }

  return (
    <View className='my-2'> 
      <Text 
       className={`text-md font-semibold ${isFocused ? 'text-primary':'text-gray-400'}`}
      >{label}
      </Text>

      <View 
       className={`mt-2 border-3 text-lg rounded-2xl h-14 w-auto ${isFocused ? 'border-primary':'border-gray-300'}`}
      >
       <TextInput 
         value={value}
         onFocus={handleFocus}
         onBlur={handleBlur}
         onChangeText={onChangeText}
         placeholderTextColor={Colors.lightText}
         placeholder={placeholder}
         {...props}
         className={`text-md text-text h-full bottom-0 border-primary border-2 rounded-2xl`}
       />


      </View>
    </View>
  )
}

export default Custominput