import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import beachImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={beachImage} resizeMode="cover" style={{ flex: 1 }}>
        <LinearGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]} style={{ flex: 1 }}>
          <SafeAreaView  style={{ flex: 1, marginHorizontal: 20, marginVertical: 48, justifyContent: 'space-between' }}>
            <View>
              <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 32 }}>Simple Meditation</Text>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 24, marginTop: 12 }}>Simplifying for everyone</Text>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 12,
                  minHeight: 62,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onPress={() => console.log("tap")}
              >
                <Text style={{ color: 'black', fontWeight: '600', fontSize: 18 }}>Get started</Text>
              </TouchableOpacity>
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default App;
