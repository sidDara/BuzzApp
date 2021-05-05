import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

export default class Instagram extends React.Component {
    render() {
        return (
            <View style={styles.text}>
                <Text>INSTAGRAM</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontStyle: 'monospace',
        fontSize: 40,
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
})
