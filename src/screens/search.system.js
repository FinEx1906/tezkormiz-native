import { useState } from "react";
import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
const foods = [
  {
    title: "Palovlar Menyusi",
    data: [
      {
        id: 1,
        foodImg: "../../assets/images/food.png",
        foodPrice: "15 000 - 50 000",
      },
    ],
  },
  {
    title: "Koffeelar Menyusi",
    data: [
      {
        id: 2,
        foodImg: "../../assets/images/food.png",
        foodPrice: "15 000 - 50 000",
      },
    ],
  },
  {
    title: "Somsalar Menyusi",
    data: [
      {
        id: 3,
        foodImg: "../../assets/images/food.png",
        foodPrice: "5 000 - 25 000",
      },
    ],
  },
];
const SearchScreen = ({ navigation }) => {

  return (
    <SafeAreaView className="pl-5 pr-5 pt-2">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity onPress={() => navigation.goBack("Home")}>
          <Ionicons name="chevron-back-outline" size={35} />
        </TouchableOpacity>
        <View className="items-center flex-row">
          <Ionicons
            name="search-outline"
            size={30}
            color={"#C7C7C7"}
            style={{ position: "absolute", zIndex: 1, left: 10 }}
          />
          <TextInput
            placeholder="Mahsulotlarni izlang..."
            className="w-64 pl-11 bg-gray-50 h-16 rounded-2xl text-xl"
          />
        </View>
      </View>
      <View className="items-center justify-center h-full hidden searching-error">
        <View>
          <Ionicons name="search-outline" size={150} color={"#C7C7C7"} />
        </View>
        <View className="px-4">
          <Text className="text-center text-red-300 text-2xl font-bold px-5">
            Hech qanday mahsulot izlanmadi :(
          </Text>
          <Text className="text-center text-base my-3">
            Mahsulotlarni izlash uchun yuqoridagi "Mahsulotlarni izlang..."
            nomli izlash bo'limiga o'ting!
          </Text>
        </View>
      </View>
      <View>
        <SectionList
          sections={foods}
          keyExtractor={(item) => item.id}
          renderItem={({ item, section }) => (
            <View className="mr-4 mt-4">
              <TouchableOpacity onPress={() => navigation.navigate("FoodInfo")}>
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
                      {section.title}
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  foodImg: {
    width: 120,
    height: 115,
  },
});
export default SearchScreen;
