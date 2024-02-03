import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Font from "expo-font";
import { useEffect } from "react";
const getFonts = () =>
  Font.loadAsync({
    "abril-regular": require("../../assets/fonts/AbrilFatface-Regular.ttf"),
    "sf-pro-bold": require("../../assets/fonts/SF-Pro-Rounded-Bold.otf"),
    "sf-pro-heavy": require("../../assets/fonts/SF-Pro-Rounded-Heavy.otf"),
    "sf-pro-meduim": require("../../assets/fonts/SF-Pro-Rounded-Medium.otf"),
    "sf-pro-regular": require("../../assets/fonts/SF-Pro-Rounded-Regular.otf"),
  });

const FoodInfoScreen = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleHeartPress = () => {
    setIsPressed(!isPressed);
  };

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await getFonts();
        setFontsLoaded(true);
      } catch (error) {
        console.error("Font yuklashda xatolik:", error);
      }
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="pl-5 pr-5 pt-2">
      <View className="flex-row justify-between">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={35} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHeartPress}>
          <Ionicons
            name={isPressed ? "heart-circle-outline" : "heart-outline"}
            size={35}
            color={isPressed ? "#FA4A0C" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View className="my-5">
        <View className="justify-center items-center">
          <Image
            source={require("../../assets/images/food.png")}
            className="w-64 object-cover h-60 drop-shadow-xl"
            resizeMode="contain"
          />
        </View>
        <View className="my-5">
          <Text
            className="text-center text-2xl"
            style={{ fontFamily: "sf-pro-heavy" }}
          >
            Tovuq go'shtli palov
          </Text>
          <Text
            className="text-center text-xl my-1 text-orange-600"
            style={{ fontFamily: "abril-regular" }}
          >
            45 000 so'm
          </Text>
        </View>
        <View className="my-4">
          <Text
            className="text-lg font-light tracking-widest"
            style={{ fontFamily: "sf-pro-bold" }}
          >
            Yetkazib berish haqida ma'lumot
          </Text>
          <Text
            className="text-lg -tracking-tight"
            style={{ fontFamily: "sf-pro-regular" }}
          >
            20-yanvar dushanba kuni, soat 12:00 dan 12:30 vaqt oralig'ida
            yetkazib beriladi
          </Text>
        </View>
        <View className="my-1">
          <Text
            className="text-lg font-light tracking-widest"
            style={{ fontFamily: "sf-pro-bold" }}
          >
            Mahsulotni qaytarish
          </Text>
          <Text
            className="text-lg -tracking-tight"
            style={{ fontFamily: "sf-pro-regular" }}
          >
            mahsulotni qaytarish qoiladilariga ko'ra, agar ovqat/mahsulotingizni
            yorqisiz(mudati o'tgan, yirtilgan) va buyurtmachiga yoqmasa
            qaytarish imkoniyatiga egasiz!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FoodInfoScreen;
