import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import * as Font from "expo-font";
import { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const getFonts = () =>
  Font.loadAsync({
    "abril-regular": require("../../assets/fonts/AbrilFatface-Regular.ttf"),
    "sf-pro-bold": require("../../assets/fonts/SF-Pro-Rounded-Bold.otf"),
  });

const routes = [
  {
    id: 1,
    routeName: "Ovqatlar",
  },
  {
    id: 2,
    routeName: "Ichimliklar",
  },
  {
    id: 3,
    routeName: "Ro'zg'or uchun",
  },
  {
    id: 4,
    routeName: "Erkaklar uchun",
  },
  {
    id: 5,
    routeName: "Ayollar uchun",
  },
];

const foods = [
  {
    id: 1,
    foodImg: "../../assets/images/food.png",
    foodMenu: "Palovlar Menyusi",
    foodPrice: "15 000 - 50 000",
  },
  {
    id: 2,
    foodImg: "../../assets/images/food.png",
    foodMenu: "Koffeelar Menyusi",
    foodPrice: "15 000 - 50 000",
  },
  {
    id: 3,
    foodImg: "../../assets/images/food.png",
    foodMenu: "Somsalar Menyusi",
    foodPrice: "5 000 - 25 000",
  },
  {
    id: 4,
    foodImg: "../../assets/images/food.png",
    foodMenu: "Burgerlar Menyusi",
    foodPrice: "20 000 - 70 000",
  },
  {
    id: 5,
    foodImg: "../../assets/images/food.png",
    foodMenu: "Sho'rvalar Menyusi",
    foodPrice: "10 000 - 75 000",
  },
];

const HomeScreen = ({ navigation }) => {
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
    <SafeAreaView className="ml-10 mr-10">
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
      <View className="my-5">
        <Text style={{ fontFamily: "abril-regular" }} className="text-4xl">
          Yangi ovqatlar faqat siz uchun!
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <View className="flex-row items-center">
          <Ionicons
            name="search-outline"
            size={30}
            style={styles.searchIcon}
            color={"#B2B2B2"}
          />
          <TextInput
            placeholder="Ovqatlarni izlang..."
            className="pl-12 text-xl font-medium w-full bg-gray-50 h-16 rounded-xl"
            keyboardType="default"
          />
        </View>
      </TouchableOpacity>
      <View className="mt-5">
        <FlatList
          keyExtractor={(item) => item.id}
          data={routes}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text className="mr-3 pl-2 pr-2 pt-3 pb-3 bg-gray-50 text-xl font-medium text-gray-400 rounded-lg">
                {item.routeName}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View className="mt-12 w-full">
          <View className="items-end">
            <TouchableOpacity>
              <Text className="text-orange-600 text-xl font-normal">
                Barchasini ko'ring
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-6">
            <FlatList
              keyExtractor={(item) => item.id}
              data={foods}
              horizontal
              renderItem={({ item }) => (
                <View className="mr-4">
                  <TouchableOpacity
                    onPress={() => navigation.navigate("FoodInfo")}
                  >
                    <View className="bg-gray-50 w-44 h-60 rounded-xl relative pl-5 pr-5 pt-2 pb-4 drop-shadow-2xl">
                      <View className="justify-center items-center">
                        <Image
                          source={require("../../assets/images/food.png")}
                          style={styles.foodImg}
                          resizeMode="contain"
                        />
                      </View>
                      <View className="mt-2">
                        <Text
                          className="text-center text-xl"
                          style={{ fontFamily: "sf-pro-bold" }}
                        >
                          {item.foodMenu}
                        </Text>
                        <Text
                          className="text-center text-lg text-orange-600"
                          style={{ fontFamily: "abril-regular" }}
                        >
                          {item.foodPrice} summa atorifda
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  searchIcon: {
    position: "absolute",
    zIndex: 1,
    left: 10,
  },
  foodImg: {
    width: 120,
    height: 115,
  },
});
export default HomeScreen;
