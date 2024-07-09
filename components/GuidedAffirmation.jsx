import { View, Text, FlatList, Pressable, Image } from 'react-native';
import React from 'react';
import { Link } from "expo-router";
import GalleryPreviewData from "@/components/models/AffirmationsCategory";

interface GuidedAffirmationProps {
    title: string;
    previews: GalleryPreviewData[];
}

const GuidedAffirmation = ({ title, previews }: GuidedAffirmationProps) => {
    return (
        <View style={{ marginVertical: 20 }}>
            <View style={{ marginBottom: 8 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
            </View>
            <View>
                <FlatList
                    data={previews}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Link href={`/affirmations/${item.id}`} asChild>
                            <Pressable>
                                <View style={{ height: 144, width: 128, borderRadius: 8, marginRight: 16 }}>
                                    <Image 
                                        source={item.image}
                                        resizeMode="cover"
                                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                                    />
                                </View>
                            </Pressable>
                        </Link>
                    )}
                    horizontal
                />
            </View>
        </View>
    );
};

export default GuidedAffirmation;
