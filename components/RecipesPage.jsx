import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from '@react-native-seoul/masonry-list';
import Animated, { FadeInDown } from "react-native-reanimated";

const RecipesPage = ({ dataRecipe, dataCategory }) => {
    const renderItem = ({ item, index }) => {
        const isEven = index % 2 === 0;

        return (
            <Animated.View
                entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}
                style={{
                    flex: 1,
                    alignItems: "center",
                    marginBottom: hp(2),
                    paddingLeft: isEven ? 0 : 8,
                    paddingRight: isEven ? 8 : 0,
                }}
            >
                <TouchableOpacity activeOpacity={0.8}>
                    <Image
                        style={{
                            width: "100%",
                            height: index % 3 === 0 ? hp(25) : hp(35),
                            borderRadius: 10,
                            backgroundColor: "rgba(0,0,0,0.05)",
                        }}
                        source={{ uri: item.strMealThumb }}
                        resizeMode="cover"
                    />
                    <Text
                        style={{
                            fontSize: hp(1.5),
                            fontWeight: "600",
                            marginTop: 4,
                            marginLeft: 4,
                        }}
                        numberOfLines={1}
                    >
                        {item.strMeal.length > 20
                            ? item.strMeal.slice(0, 20) + "..."
                            : item.strMeal}
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        );
    };

    return (
        <View style={{ marginTop: 10 }}>
            <Text
                style={{
                    fontSize: hp(2.5),
                    marginTop: 6,
                    marginLeft: 4,
                    fontWeight: "600",
                }}
            >
                Recipes:
            </Text>
            <View>
                {(dataCategory.length === 0 || dataRecipe.length === 0) ? null : (
                    <MasonryList
                        data={dataRecipe}
                        keyExtractor={(item) => item.idMeal}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                        onEndReachedThreshold={0.1}
                    />
                )}
            </View>
        </View>
    );
};

export default RecipesPage;
