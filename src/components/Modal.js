import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Modal = ({ route }) => {
    const synopsis = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{synopsis}</Text>
        </View>
    )

}

export default Modal;

const styles = StyleSheet.create({
    container: {
        alignContent: 'center'
    },
    titleStyle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000000',
    }
});