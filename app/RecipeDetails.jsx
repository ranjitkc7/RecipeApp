import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign, FontAwesome6, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import LoaderFile from './components/LoaderFile';

const RecipeDetails = () => {
  const { id, name, image } = useLocalSearchParams();
  const [isfav, setIsFav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mealData, setMealData] = useState(null);

  useEffect(() => {
    getMeals(id);
  });

  const getMeals = async (id) => {
    const resposne = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await resposne.json();
    setMealData(data.meals[0]);
    setIsLoading(false);
  }
 const ingredientsIndex = (mealData) => {
   if(!mealData) return [];
   let indexes = [];
   for(let i=1; i<=20; i++){
     if(mealData[`strIngredient${i}`]) {
      indexes.push(i);
     }
    }
     return indexes;
 }
  const router = useRouter();
  return (
    <ScrollView className="p-[10px] flex-1 relative">
      <Image
        style={{ width: wp(94), height: hp(46) }}
        source={{ uri: image }}
        className=" rounded-[10px]"
      />
      <View className="absolute top-[14px] left-[13px]">
        <TouchableOpacity
          onPress={() => router.back()}
          className="h-[3rem] w-[3rem] flex items-center
        justify-center rounded-full bg-white">
          <AntDesign name="arrowleft" size={34} color="#8338ec" />
        </TouchableOpacity>
      </View>
      <View className="absolute top-[6px] right-[11px]">
        <TouchableOpacity
          onPress={() => setIsFav(!isfav)}
          className="h-[3rem] w-[3rem]  flex items-center
           justify-center rounded-full bg-white ">
          <AntDesign name="heart" size={30} color={`${isfav ? "red" : "gray"}`} />
        </TouchableOpacity>
      </View>
      <View className="mt-[1rem]">
        {
          isLoading ? (<LoaderFile size="large" color="#8338ec"
            className="mt-[2rem]" />) : (
            <View>
              <View>
                <Text style={{ fontSize: hp(3) }} className="font-[550] ">{mealData?.strMeal}</Text>
                <Text style={{ fontSize: hp(2.5) }} className="font-[550] mt-[-4px] text-slate-700">{mealData?.strArea}</Text>
              </View>
              <View className="flex-row justify-around mt-[4px]">
                <View className="flex rounded-full p-2 bg-[#8338ec]">
                  <View style={{ height: hp(7), width: hp(7) }}
                    className="bg-white rounded-full flex items-center justify-center"
                  >
                    <AntDesign name="clockcircle" size={30} color="black" />
                  </View>
                  <View className="flex my-[3px] items-center space-y-1">
                    <Text className="font-[600] text-white">35</Text>
                    <Text className="font-[600] text-white">Mins</Text>
                  </View>
                </View>
                <View className="flex rounded-full p-2 bg-[#8338ec]">
                  <View style={{ height: hp(7), width: hp(7) }}
                    className="bg-white rounded-full flex items-center justify-center"
                  >
                    <FontAwesome6 name="user" size={25} color="black" />
                  </View>
                  <View className="flex my-[3px] items-center space-y-1">
                    <Text className="font-[600] text-white">03</Text>
                    <Text className="font-[600] text-white">Serves</Text>
                  </View>
                </View>
                <View className="flex rounded-full p-2 bg-[#8338ec]">
                  <View style={{ height: hp(7), width: hp(7) }}
                    className="bg-white rounded-full flex items-center justify-center"
                  >
                    <FontAwesome name="firefox" size={30} color="black" />
                  </View>
                  <View className="flex my-[3px] items-center space-y-1">
                    <Text className="font-[600] text-white">223</Text>
                    <Text className="font-[600] text-white">Cal</Text>
                  </View>
                </View>
                <View className="flex rounded-full p-2 bg-[#8338ec]">
                  <View style={{ height: hp(7), width: hp(7) }}
                    className="bg-white rounded-full flex items-center justify-center"
                  >
                    <AntDesign name="solution1" size={30} color="black" />
                  </View>
                  <View className="flex my-[3px] items-center space-y-1">
                    <Text className="font-[600] text-white">....</Text>
                    <Text className="font-[600] text-white">Easy</Text>
                  </View>
                </View>
              </View>
              <View className="my-[1rem] ">
                <Text style={{ fontSize: hp(3.5) }} className="font-[700] tracking-[1px]">Ingredients</Text>
                  <View className="space-y-4 ml-[1rem]">
                    {
                      ingredientsIndex(mealData).map(i => (
                        <View key={i} className="flex-row items-center">
                          <View
                            style={{ height: hp(2), width: hp(2) }}
                            className="bg-[#8338ec] rounded-full"
                          />
                          <View className="flex-row space-x-2 ml-[1rem]">
                            <Text style={{fontSize: hp(2.5)}} className="font-[600] ml-12px]">{mealData[`strIngredient${i}`]}</Text>
                            <Text style={{fontSize: hp(2.5)}} className="font-[500] text-slate-700 ml-[12px]">- {mealData[`strMeasure${i}`]}</Text>
                          </View>
                        </View>
                      ))
                    }
                  </View>

              </View>
            </View>

          )
        }
      </View>
    </ScrollView>
  )
}

export default RecipeDetails