import { View, Text, ImageBackground, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { GalleryPreviewData } from '@/components/models/AffirmationsCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const AffirmationPractice = () => {
    const { itemid } = useLocalSearchParams();
    const [affirmation, setAffirmation] = useState<GalleryPreviewData | null>(null);

    useEffect(() => {
        let foundAffirmation: GalleryPreviewData | undefined;

        for (let index = 0; index < AFFIRMATION_GALLERY.length; index++) {
            const affirmationData = AFFIRMATION_GALLERY[index].data;
            foundAffirmation = affirmationData.find(a => a.id === Number(itemid));
            if (foundAffirmation) break;
        }

        if (foundAffirmation) {
            setAffirmation(foundAffirmation);
            const affirmationArray= foundAffirmation.text.split(",");
            if(affirmationArray[affirmationArray.length-1]===""){
                affirmationArray.pop();
            }
        }
    }, [itemid]);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={affirmation?.image} resizeMode='cover' style={{flex:1}}>
                <AppGradient colors={["rgba(0,0,0.3)", "rgba(0,0,0,0.9)"]}>
                    <Pressable style={{position:'absolute', top:16, left:6, zIndex:10}} onPress={()=>router.back()}><AntDesign name="leftcircleo" size={50} color="white" /></Pressable>
                    <ScrollView style={{marginTop:20}} showsVerticalScrollIndicator={false}>
                        <View style={{height:100, justifyContent:'center'}}>
                            <Text style={{color:"white", fontSize:300,marginBottom:12, fontWeight:"bold", textAlign:"center" }}>                            {affirmation?.text}
                            </Text>
                        </View></ScrollView>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default AffirmationPractice;
