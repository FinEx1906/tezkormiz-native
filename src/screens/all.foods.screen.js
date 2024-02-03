import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
const AllFoodScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View className="flex-row justify-between">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={35} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AllFoodScreen;
