import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { GalleryPreviewData } from '@/components/models/AffirmationsCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';

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
        }
    }, [itemid]);

    return (
        <View style={{ flex: 1 }}>
            <Text>Affirmation Practice</Text>
            {affirmation && (
                <View>
                    <Text>{affirmation.text}</Text>
                </View>
            )}
        </View>
    );
};

export default AffirmationPractice;
