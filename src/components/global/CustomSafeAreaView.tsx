import { SafeAreaView ,View} from "react-native";
import { ReactNode ,FC} from "react";

interface CustomSafeAreaViewProps{
    children:ReactNode;
    classStyle?:string
}


const CustomSafeAreaView:FC<CustomSafeAreaViewProps>=({children,classStyle})=>{
const stylesClass = `flex-1 bg-white  ${classStyle}`
return (
    <SafeAreaView>
         <View className={stylesClass}>
            {children}
         </View>
    </SafeAreaView>
)

}


export default CustomSafeAreaView;