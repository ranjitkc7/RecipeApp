import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import dataItems from "../data/items.json";
import '../global.css';
import Animated, { FadeInDown } from "react-native-reanimated";
// const imageMap = {
//   momos: require('../assets/images/momo.jpg'),
//   samosa: require('../assets/images/somosa.jpg'),
//   sel: require('../assets/images/sel.jpeg'),
// };

const CategoriesPage = ({ dataCategory, activity, handleChangeCategory }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(500).springify()}
      className="mt-[10px]">
      <Text className="font-[600]" style={{ fontSize: hp(2.5) }}>
        Categories :
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: wp(2) }}
        className="mt-[10px] flex-1 w-full flex-row"
      >
        {dataCategory.map((item, index) => {
          let isActive = activity === item.strCategory;
          let color = isActive ? "bg-[#8338ec]" : "bg-black/10";
          return (
            <TouchableOpacity
              onPress={() => handleChangeCategory(item.strCategory)}
              key={index}
              className="flex items-center space-y-1"
              style={{ marginRight: wp(3) }}
            >
              <View className={"rounded-[50%] p-[2px] flex items-center justify-center " + color}
                style={{ width: hp(9), height: hp(9) }}>
                <Image
                  source={{ uri: item.strCategoryThumb }}
                  style={{ height: hp(8), width: hp(8) }}
                  className="rounded-full"
                />
              </View>
              <Text>
                <Text className="font-[600] ml-[1px]">{item.strCategory}</Text>
              </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default CategoriesPage;
