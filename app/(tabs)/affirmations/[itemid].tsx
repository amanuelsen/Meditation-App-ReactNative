import { AntDesign } from "@expo/vector-icons";
import { GalleryPreviewData } from "@/components/models/AffirmationsCategory";
import { router, useLocalSearchParams } from "expo-router";
import {
    View,
    Text,
    ImageBackground,
    Pressable,
    ScrollView,
} from "react-native";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import AppGradient from "@/components/AppGradient";
import React, { useEffect, useState } from "react";

const AffirmationPractice = () => {
    const { itemId } = useLocalSearchParams();

    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
    const [sentences, setSentences] = useState<string[]>([]);

    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationData = AFFIRMATION_GALLERY[idx].data;

            const affirmationToStart = affirmationData.find(
                (a) => a.id === Number(itemId)
            );

            if (affirmationToStart) {
                setAffirmation(affirmationToStart);

                const affirmationsArray = affirmationToStart.text.split(".");

                // Remove the last element if it's an empty string
                if (affirmationsArray[affirmationsArray.length - 1] === "") {
                    affirmationsArray.pop();
                }

                setSentences(affirmationsArray);
                return;
            }
        }
    }, [itemId]);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={affirmation?.image}
                resizeMode="cover"
                style={{ flex: 1 }}
            >
                <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
                    <Pressable
                        onPress={() => router.back()}
                        style={{
                            position: 'absolute',
                            top: 64, // 16 * 4 (for 16px top-16 in Tailwind)
                            left: 24, // 6 * 4 (for 6px left-6 in Tailwind)
                            zIndex: 10,
                        }}
                    >
                        <AntDesign name="leftcircleo" size={50} color="white" />
                    </Pressable>

                    <ScrollView
                        style={{ marginTop: 80 }} // 20 * 4 (for mt-20 in Tailwind)
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ height: '100%', borderColor: 'white', justifyContent: 'center' }}>
                            <View style={{ height: '80%', justifyContent: 'center' }}>
                                {sentences.map((sentence, idx) => (
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 24, // text-3xl equivalent
                                            marginBottom: 48, // 12 * 4 (for mb-12 in Tailwind)
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}
                                        key={idx}
                                    >
                                        {sentence}.
                                    </Text>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default AffirmationPractice;
