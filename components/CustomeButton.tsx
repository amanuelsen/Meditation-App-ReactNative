import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

interface CustomeButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: object;
    containerStyle?: object;
}

const CustomeButton = ({ onPress, title, textStyles = {}, containerStyle = {} }: CustomeButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, containerStyle]}
            onPress={onPress}
        >
            <Text style={[styles.text, textStyles]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 12,
        minHeight: 62,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: '600',
        fontSize: 18,
    },
});

export default CustomeButton;
