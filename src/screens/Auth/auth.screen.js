import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Images } from "../../upload";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const AuthScreen = ({ navigation }) => {
  const [selectTab, setSelecTab] = useState("Kirish");
  const TabPress = (tab) => {
    setSelecTab(tab);
  };
  return (
    <View>
      <View className="justify-center items-center w-full mt-5">
        <View>
          <View className="flex-row items-center">
            <Ionicons
              name="call-outline"
              size={25}
              color="#B2B2B2"
              style={{ position: "absolute", zIndex: 1, left: 10 }}
            />
            <TextInput
              placeholder="Telefon raqamingizni kiriting"
              className="text-lg w-72 h-16 bg-gray-50 pl-10 pt-0 rounded-2xl"
              keyboardType="phone-pad"
            />
          </View>
          <View className="flex-row items-center mt-4">
            <Ionicons
              name="mail-outline"
              size={25}
              color="#B2B2B2"
              style={{ position: "absolute", zIndex: 1, left: 10 }}
            />
            <TextInput
              placeholder="Email manzilingizni kiriting"
              className="text-lg w-72 h-16 bg-gray-50 pl-10 pt-0 rounded-2xl"
              keyboardType="email-address"
            />
          </View>
          <View className="flex-row items-center mt-3">
            <Ionicons
              name="key-outline"
              size={25}
              color="#B2B2B2"
              style={{ position: "absolute", zIndex: 1, left: 10 }}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Parolingizni kiriting"
              className="text-lg w-72 h-16 bg-gray-50 pl-10 pt-0 rounded-2xl"
              keyboardType="default"
            />
          </View>
          <View className="mt-3">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
            >
              <Text
                className="text-base font-medium"
                style={{ color: "#fa4a0c" }}
              >
                Parol esingizdan chiqdimi?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ position: "absolute", bottom: "-50%" }}>
          <TouchableOpacity
            style={{ backgroundColor: "#fa4a0c" }}
            className="w-72 h-16 rounded-xl justify-center items-center"
          >
            <Text className="text-xl text-white font-bold tracking-widest">
              Hisobga kirish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const RegisterScreen = ({ navigation }) => {
  const [selectTab, setSelecTab] = useState("Kirish");
  const TabPress = (tab) => {
    setSelecTab(tab);
  };
  return (
    <View>
      <View className="justify-center items-center w-full mt-5">
        <View>
          <View className="flex-row items-center">
            <Ionicons
              name="call-outline"
              size={25}
              color="#B2B2B2"
              style={{ position: "absolute", zIndex: 1, left: 10 }}
            />
            <TextInput
              placeholder="Telefon raqamingizni kiriting"
              className="text-lg w-72 h-16 bg-gray-50 pl-10 pt-0 rounded-2xl"
              keyboardType="phone-pad"
            />
          </View>
          <View className="flex-row items-center mt-2">
            <Ionicons
              name="mail-outline"
              size={25}
              color="#B2B2B2"
              style={{ position: "absolute", zIndex: 1, left: 10 }}
            />
            <TextInput
              placeholder="Email manzilingizni kiriting"
              className="text-lg w-72 h-16 bg-gray-50 pl-10 pt-0 rounded-2xl"
              keyboardType="email-address"
            />
          </View>
          <View className="flex-row items-center mt-2">
            <Ionicons
              name="key-outline"
              size={25}
              color="#B2B2B2"
              style={{ position: "absolute", zIndex: 1, left: 10 }}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Parolingizni kiriting"
              className="text-lg w-72 h-16 bg-gray-50 pl-10 pt-0 rounded-2xl"
              keyboardType="default"
            />
          </View>
          <View className="flex-row items-center mt-2">
            <Ionicons
              name="shield-checkmark-outline"
              size={25}
              color="#B2B2B2"
              style={{ position: "absolute", zIndex: 1, left: 10 }}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Parolni qayta kiriting"
              className="text-lg w-72 h-16 bg-gray-50 pl-10 pt-0 rounded-2xl"
              keyboardType="default"
            />
          </View>
        </View>
        <View style={{ position: "absolute", bottom: "-35%" }}>
          <TouchableOpacity
            style={{ backgroundColor: "#fa4a0c" }}
            className="w-72 h-16 rounded-xl justify-center items-center"
          >
            <Text className="text-xl text-white font-bold tracking-widest">
              Hisob yaratish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Authentication = ({ navigation }) => {
  const [selectTab, setSelectTab] = useState("Kirish");

  const TabPress = (tab) => {
    setSelectTab(tab);
  };

  return (
    <View>
      <View
        className="items-center justify-center bg-gray-50 h-72 shadow-2xl"
        style={{ borderBottomEndRadius: 50, borderBottomStartRadius: 50 }}
      >
        <Image
          source={Images.BRAND}
          style={styles.authImage}
          className="mt-5"
        />
        <View className="flex-row w-full justify-evenly mt-5">
          <TouchableOpacity>
            <Text
              className="font-bold text-xl tracking-wider"
              onPress={() => TabPress("Kirish")}
              style={[selectTab === "Kirish" && { color: "#fa4a0c" }]}
            >
              Kirish
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              className="font-bold text-xl tracking-wider"
              onPress={() => TabPress("Yaratish")}
              style={[selectTab === "Yaratish" && { color: "#fa4a0c" }]}
            >
              Yaratish
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {selectTab === "Kirish" ? (
        <AuthScreen navigation={navigation} />
      ) : (
        <RegisterScreen navigation={navigation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  authImage: {
    width: 200,
    height: 200,
  },
});

export default Authentication;
