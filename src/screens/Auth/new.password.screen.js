import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const NewPasswordScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="justify-center items-center w-full mt-5">
        <View>
          <View className="items-center mt-4">
            <View className="items-center mt-3">
              <TextInput
                secureTextEntry={true}
                placeholder="YANGI PAROLNI KIRITING"
                className="text-lg w-72 h-16 bg-gray-50 text-center rounded-2xl"
                keyboardType="default"
              />
            </View>
            <View className="items-center mt-3">
              <TextInput
                secureTextEntry={true}
                placeholder="PAROLNI TAKRORLANG"
                className="text-lg w-72 h-16 bg-gray-50 text-center rounded-2xl"
                keyboardType="default"
              />
            </View>
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
          >
            <Text className="text-xl text-white font-bold tracking-widest">
              Hisbobni yangilash
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

export default NewPasswordScreen;
