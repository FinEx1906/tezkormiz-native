import { Image, StyleSheet, View } from "react-native";
import { Images } from "../upload";
import { StatusBar } from "expo-status-bar";
import Display from "../utils/Display";
import { useEffect } from "react";
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={Images.BRAND}
        resizeMode="contain"
        style={styles.splashImage}
      />
      <StatusBar translucent />
    </View>
  );
};

const styles = StyleSheet.create({
  splashImage: {
    width: Display.setWidth(70),
    height: Display.setHeight(70),
  },
});

export default SplashScreen;
