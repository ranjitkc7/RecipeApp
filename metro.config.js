const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

// Step 1: Get Expo's default config
let config = getDefaultConfig(__dirname);

// Step 2: Add NativeWind support
config = withNativeWind(config, { input: "./global.css" });

// Step 3: Add Reanimated support
config = wrapWithReanimatedMetroConfig(config);

// Step 4: Export the final combined config
module.exports = config;
