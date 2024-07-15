import { View, Text, Pressable } from 'react-native'
import {AppGradient} from "@compenents/AppGradient"
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import {CustomeButton} from "@compenents/CustomeButton"

const AdjustMeditation = () => {
    const handlepress=(duration: number)=>{
        router.back();
    }
  return (
    <View className="flex-1 relative">
        <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}></AppGradient>
        <Text>Test</Text>
        <Pressable onPress={()=> router.back()} className="absolute top-8 left-6 z-10">
            <AntDesign name="leftcircle" size={50} color="white"></AntDesign>
        </Pressable>
        <View className="justify-center h-4/5">
        <Text className="text-center font-bold text-3xl text-white mb-8">Adjust your meditation duration</Text>
        <View>
            <CustomeButton title="5 minute" onPress={()=> handlepress(5*60)} containerStyles="mb-5"></CustomeButton>
            <CustomeButton title="15 minute" onPress={()=> handlepress(15*60)} containerStyles="mb-5"></CustomeButton>
            <CustomeButton title="30 minutes" onPress={()=> handlepress(30 *60)} containerStyles="mb-5"></CustomeButton>
            <CustomeButton title="1 hour" onPress={()=> handlepress(60 * 60)} containerStyles="mb-5"></CustomeButton>
        </View>
        </View>
      <Text>AdjustMeditation</Text>
    </View>
  )
}

export default AdjustMeditation