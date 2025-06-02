import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import dataItems from "../data/items.json";
import '../global.css';

const imageMap = {
  momos: require('../assets/images/momo.jpg'),
  samosa: require('../assets/images/somosa.jpg'),
  sel: require('../assets/images/sel.jpeg'),
};

const CategoriesPage = () => {
  return (
    <View className="mt-[10px]">
      <Text className="font-[600]" style={{ fontSize: hp(2.5) }}>
        Categories :
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: wp(2) }}
        className="mt-[10px] flex-1 w-full flex-row"
      >
        {dataItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex items-center space-y-1"
            style={{ marginRight: wp(3) }}
          >
            <View className="rounded-full items-center justify-center flex bg-white">
              <Image
                source={imageMap[item.image]}
                style={{ height: hp(8), width: hp(8) }}
                className="rounded-full"
              />
              <Text>
                <Text className="font-[600]">{item.name}</Text>
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesPage;
