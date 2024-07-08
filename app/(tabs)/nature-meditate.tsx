import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import React from "react";
import {
    FlatList,
    ImageBackground,
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";

import MEDITATION_IMAGES from "@/constants/Meditation-images";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import AppGradient from "@/components/AppGradient";

const NatureMeditation = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1 }}>
                <AppGradient
                    colors={["#161b2e", "#0a4d4a", "#766e67"]}
                >
                    <View style={{ marginBottom: 24 }}>
                        <Text style={{
                            color: '#E5E7EB',
                            marginBottom: 12,
                            fontWeight: 'bold',
                            fontSize: 32,
                            textAlign: 'left'
                        }}>
                            Welcome Steven
                        </Text>
                        <Text style={{
                            color: '#C7D2FE',
                            fontSize: 20,
                            fontWeight: '500'
                        }}>
                            Start your meditation practice today
                        </Text>
                    </View>
                    <View>
                        <FlatList
                            data={MEDITATION_DATA}
                            contentContainerStyle={{ paddingBottom: 150 }}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <Pressable
                                    onPress={() => router.push(`/meditate/${item.id}`)}
                                    style={{
                                        height: 192,
                                        marginVertical: 12,
                                        borderRadius: 8,
                                        overflow: 'hidden'
                                    }}
                                >
                                    <ImageBackground
                                        source={MEDITATION_IMAGES[item.id - 1]}
                                        resizeMode="cover"
                                        style={{
                                            flex: 1,
                                            borderRadius: 10,
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <LinearGradient
                                            colors={["transparent", "rgba(0,0,0,0.8)"]}
                                            style={{
                                                alignItems: 'center',
                                                height: '100%',
                                                justifyContent: 'center',
                                                width: '100%'
                                            }}
                                        >
                                            <Text  style={{
                                                color: '#F3F4F6',
                                                fontSize: 24,
                                                fontWeight: 'bold',
                                                textAlign: 'center'
                                            }}>
                                                {item.title}
                                            </Text>
                                        </LinearGradient>
                                    </ImageBackground>
                                </Pressable>
                            )}
                        />
                    </View>
                </AppGradient>
                <StatusBar style="light" />
            </View>
        </ScrollView>
    );
};

export default NatureMeditation;
