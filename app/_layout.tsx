import { useFonts } from "expo-font"
import {SplashScreen, Stack} from "expo-router"
import { useEffect } from "react";
import TimerProvider from "@/context/TimerContext";

SplashScreen.preventAutoHideAsync();

export default function Rootlayout(){
    const [fontsLoaded, error] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    });
    useEffect(()=>{
    if(error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
    },[fontsLoaded, error])
    if(!fontsLoaded) return null;
    if(!fontsLoaded&& !error) return null;
    return (
   <TimerProvider>
        <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown:false}} />    
        <Stack.Screen name="index" options={{headerShown:false}} /> 
        <Stack.Screen name="meditate/[id]" options={{headerShown:false}} />
        <Stack.Screen name="(model)/adjust-meditation-duration" options={{headerShown:false, presentation:"modal"}} />    
    
   

        </Stack>
   </TimerProvider>
    )
}