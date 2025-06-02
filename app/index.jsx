import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import "../global.css";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useRouter } from "expo-router";

const HomePage = () => {
    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    useEffect(() => {
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(() => {
            ring1padding.value = withSpring(ring1padding.value + hp(3))
        }, 100)
        setTimeout(() => {
            ring2padding.value = withSpring(ring2padding.value + hp(3.5))
        }, 300)
    })
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/dataPage");
        }, 4000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <View
            className="flex-1 items-center justify-center space-y-10
       bg-[#8338ec]"
        >
            <StatusBar style="dark" />
            <Animated.View
                className="bg-white/10 rounded-full "
                style={{ padding: ring1padding }}
            >
                <Animated.View
                    className="bg-white/20 rounded-full "
                    style={{ padding: ring2padding }}
                >
                    <Image
                        source={require("../assets/images/mixit.png")}
                        style={{ width: hp(30), height: hp(30) }}
                    />
                </Animated.View>
            </Animated.View>
            <View className="flex items-center space-y-2 mt-[1rem] ">
                <Text
                    className=" font-bold  text-white
                 tracking-[2px]"
                    style={{ fontSize: hp(5) }}
                >
                    Foody
                </Text>
                <Text
                    className="text[1.3rem] font-[600] text-white"
                    style={{ fontSize: hp(2) }}
                >
                    Food is always right
                </Text>
            </View>
        </View>
    );
};

export default HomePage;
