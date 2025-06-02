import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import CategoriesPage from "../components/CategoriesPage";

const DataPage = () => {
  return (
    <View className="p-[8px] flex-1">
      <StatusBar style="dark" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-1 flex-row justify-between ">
          <Image
            source={require("../assets/images/profile.jpeg")}
            style={{
              height: hp(4),
              width: hp(4),
            }}
            className="rounded-full"
          />
          <View
            style={{ height: hp(5), width: hp(5) }}
            className="rounded-full bg-[#8338ec]  items-center justify-center"
          >
            <FontAwesome5 name="bell" size={24} color="white" />
          </View>
        </View>
        <View className="mt-[3px]">
          <Text style={{ fontSize: hp(2.5) }}>Hello, Ranjit</Text>
          <Text style={{ fontSize: hp(3.2) }} className="font-[600] ">
            Make your own food,
          </Text>
          <Text style={{ fontSize: hp(3.2) }} className="font-[600] mt-[-5px]">
            Stay at,
            <Text style={{ color: "#8338ec" }}> Home</Text>
          </Text>
        </View>
        <View className="flex-row items-center w-full justify-between relative ">
          <TextInput
            className="mt-[10px] bg-[#f2f2f2] rounded-[13px] p-[10px] py-[5px]
            items-center justify-center w-full"
            placeholder="Search"
            placeholderTextColor={"#808080"}
            style={{ fontSize: hp(2.1), height: hp(6) }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ height: hp(5), width: hp(5) }}
            className="rounded-full bg-white items-center justify-center
            absolute right-[10px] top-[12px]"
          >
            <FontAwesome name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <CategoriesPage />
      </ScrollView>
    </View>
  );
};

export default DataPage;
