import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

import "../global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Jua-Regular": require("../assets/fonts/Jua-Regular.ttf"),
    "KiteOne-Regular": require("../assets/fonts/KiteOne-Regular.ttf"),
    "Montserrat-VariableFont_wght": require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    "OpenSans-VariableFont_wdth,wght": require("../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
    "Pattaya-Regular": require("../assets/fonts/Pattaya-Regular.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "ProzaLibre-Bold": require("../assets/fonts/ProzaLibre-Bold.ttf"),
    "ProzaLibre-Medium": require("../assets/fonts/ProzaLibre-Medium.ttf"),
    "ProzaLibre-MediumItalic": require("../assets/fonts/ProzaLibre-MediumItalic.ttf"),
    "ProzaLibre-Regular": require("../assets/fonts/ProzaLibre-Regular.ttf"),
    "ProzaLibre-SemiBold": require("../assets/fonts/ProzaLibre-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default RootLayout;
