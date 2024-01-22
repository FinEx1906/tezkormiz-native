import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Images } from "../../upload";
import { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const AuthScreen = ({ navigation, onSubmit }) => {
  const [selectTab, setSelecTab] = useState('Kirish');
  const [phone, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = async () => {
    try {
        const response = await fetch('http://192.168.1.128:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone,
                password,
                email,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Login successful:', data);
            navigation.navigate('Home');
        } else {
            console.error('Login failed:', data ? data.error : 'Unknown error');
            console.log(data);
        }

        console.log(response);
    } catch (error) {
        console.error('Error', error);
    }
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
              value={phone}
              onChangeText={(text) => { setPhoneNumber(text) }}
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
              value={email}
              onChangeText={(text) => { setEmail(text) }}
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
              value={password}
              onChangeText={(text) => { setPassword(text) }}
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
            onPress={Login}
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
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const TabPress = (tab) => {
    setSelecTab(tab);
  };


  // backend call
  const [name, setName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Register = async () => {
    try {
      const response = await fetch("http://192.168.1.128:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setRegistrationSuccess(true);
      } else {
        Alert.alert("Bunday foydalanuvchi allaqachon mavjud!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (registrationSuccess) {
      navigation.navigate("Home");
    }
  }, [registrationSuccess, navigation]);



  return (
    <View>
      <View className="justify-center items-center w-full mt-5">
        <View>
          <View className="flex-row items-center">
            <Ionicons
              name="person-outline"
              size={25}
              color="#B2B2B2"
              style={{ position: "absolute", zIndex: 1, left: 10 }}
            />
            <TextInput
              placeholder="Ism va familiyangizni kiriting"
              className="text-lg w-72 h-16 bg-gray-50 pl-10 pt-0 rounded-2xl"
              keyboardType="default"
              value={name}
              onChangeText={(text) => { setName(text) }}
            />
          </View>
          <View className="flex-row items-center mt-3">
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
              value={phone}
              onChangeText={(text) => { setPhoneNumber(text) }}
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
              value={email}
              onChangeText={(text) => { setEmail(text) }}
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
              value={password}
              onChangeText={(text) => { setPassword(text) }}
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
              value={confirmPassword}
              onChangeText={(text) => { setConfirmPassword(text) }}
            />
          </View>
        </View>
        <View style={{ position: "absolute", bottom: "-20%" }}>
          <TouchableOpacity
            style={{ backgroundColor: "#fa4a0c" }}
            className="w-72 h-16 rounded-xl justify-center items-center"
            onPress={Register}
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
