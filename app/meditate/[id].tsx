import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import meditationImages from '@/constants/Meditation-images';
import AppGradient from '@/components/AppGradient';
import { router, useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import CustomeButton from '@/components/CustomeButton';
import {Audio } from  "expo-av"
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/MeditationData';
import { unloadAsync } from 'expo-font';
const Meditate = () => {
  const { id } = useLocalSearchParams();
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [isMeditating, setIsMeditating] = useState(false);
  const [audioSound, setSound]=useState<Audio.Sound>();
  const [isPlayingAudio,setisPlayingAudio]= useState(false);
  const handleAdjustDuration=()=>{
    if(isMeditating) toggleMeditation();
    router.push("/(modal)/adjust-meditation-duration");
  }
  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      setIsMeditating(false);
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, isMeditating]);

  useEffect(()=>{

    return ()=>{
      audioSound?.unloadAsync();
    }
  },[audioSound]);
  const formattedTimeMinutes=String(Math.floor(secondsRemaining/ 60)).padStart(2,"0");

  const toggleMeditation=async()=>{
    if(secondsRemaining===0 ) setSecondsRemaining(10);
    setIsMeditating(!isMeditating);
    await toggleSound();

  }
  const toggleSound=async()=>{
    const sound= audioSound? audioSound: await initializeSound();
    const status=await sound?.getStatusAsync();
    if(status?.isLoaded && !isPlayingAudio){
      await sound.playAsync();
      setisPlayingAudio(true);
    }else{
      await sound.pauseAsync();
      setisPlayingAudio(false);

    }

  }
  
  const initializeSound=async()=>{
    const audioFileName=MEDITATION_DATA[Number(id)-1].audio;
    const {sound}=await Audio.Sound.createAsync(
      AUDIO_FILES[audioFileName]
    );
    setSound(sound);
    return sound;
  };
  const formattedTimeSeconds=String(secondsRemaining% 60).padStart(2,"0");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={meditationImages[Number(id) - 1]}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View style={styles.centerContent}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomeButton
              title="Adjust duration"
              onPress={handleAdjustDuration}
            />
              <CustomeButton
              title="Start meditation"
              onPress={toggleMeditation}
              containerStyle={styles.customButtonstyle}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  customButtonstyle:{
    marginTop:4,

  },
  imageBackground: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 64, // equivalent to top-16 in Tailwind (16 * 4 = 64)
    left: 24, // equivalent to left-6 in Tailwind (6 * 4 = 24)
    zIndex: 10,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#e5e7eb', // equivalent to bg-neutral-200
    borderRadius: 100, // rounded-full
    width: 176, // equivalent to w-44 (44 * 4 = 176)
    height: 176, // equivalent to h-44 (44 * 4 = 176)
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontFamily:"rmono",
    fontSize: 32, // equivalent to text-4xl
    color: '#1e3a8a', // equivalent to text-blue-800
  },
  buttonContainer: {
    marginBottom: 20, // equivalent to mb-5 (5 * 4 = 20)
  },
});

export default Meditate;
