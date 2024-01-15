import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="justify-center items-center w-full mt-5">
        <View>
          <View className="flex-row items-center mt-4">
            <TextInput
              placeholder="0"
              keyboardType="number-pad"
              className="w-16 h-16 rounded-xl bg-gray-50 text-center text-2xl m-2"
              style={{ borderWidth: 2, borderColor: "#d9d9e3" }}
            />
            <TextInput
              placeholder="0"
              keyboardType="number-pad"
              className="w-16 h-16 rounded-xl bg-gray-50 text-center text-2xl m-2"
              style={{ borderWidth: 2, borderColor: "#d9d9e3" }}
            />
            <TextInput
              placeholder="0"
              keyboardType="number-pad"
              className="w-16 h-16 rounded-xl bg-gray-50 text-center text-2xl m-2"
              style={{ borderWidth: 2, borderColor: "#d9d9e3" }}
            />
            <TextInput
              placeholder="0"
              keyboardType="number-pad"
              className="w-16 h-16 rounded-xl bg-gray-50 text-center text-2xl m-2"
              style={{ borderWidth: 2, borderColor: "#d9d9e3" }}
            />
          </View>
          <View className="mt-2">
            <Text
              className="text-base text-center font-medium"
              style={{ color: "#fa4a0c" }}
            >
              Bu parol orqali siz hisobingizni tiklashingiz mumkin!
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: "#fa4a0c" }}
            className="w-72 h-16 mt-5 rounded-xl justify-center items-center"
            onPress={() => {
              navigation.navigate("NewPassword");
            }}
          >
            <Text className="text-xl text-white font-bold tracking-widest">
              Parolni yangilash
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authImage: {
    width: 200,
    height: 200,
  },
});

export default ForgotPasswordScreen;
