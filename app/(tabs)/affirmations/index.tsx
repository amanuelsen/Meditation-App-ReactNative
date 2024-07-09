import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import GuidedAffirmations from "@/components/GuidedAffirmation";

const Affirmations = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.scrollview}
        >
          <Text style={styles.title}>Change your beliefs</Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmations key={g.title} title={g.title} previews={g.data} />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

const styles = {
  scrollview: {
    padding: 16,
  },
  title: {
    color: '#f4f4f5', // Equivalent to text-zinc-50
    fontSize: 24,     // Equivalent to text-3xl
    fontWeight: 'bold', // Equivalent to font-bold
    marginBottom: 16, // Added some margin to separate the title from the content
  },
};

export default Affirmations;
