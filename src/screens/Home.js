import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Ionicons from "react-native-vector-icons/Ionicons";
import 'react-native-gesture-handler';
const HomeScreen = () => {
    return (
        <SafeAreaView className="ml-5 mr-5">
            <View className="flex-row justify-between items-center w-full mt-5">
                <View>
                    <TouchableOpacity className="opacity-100">
                        <Ionicons name="menu-outline" size={35} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity className="opacity-50 border-gray-300 border w-14 h-14 flex justify-center items-center rounded-lg active:bg-gray-600">
                        <Ionicons name="cart-outline" size={35} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

// npm install @react-navigation/drawer
// npm install react-native-gesture-handler react-native-reanimated