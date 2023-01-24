
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Button } from 'react-native';


const AnimeCard = ({ title, synopsis, image }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image style={styles.imageStyle} source={{ uri: image }} />
                <View style={styles.infoStyle}>
                    <Button
                        style={styles.titleStyle}
                        onPress={() => navigation.navigate("Modal", synopsis)}
                        title={title}
                        color='#000000'
                    />
                </View>
            </View>
        </View >
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 20,
        alignItems: 'center',
        marginTop: 25,
    },
    cardContainer: {
        width: deviceWidth - offset,
        backgroundColor: '#fff0db',
        height: 420,
        borderRadius: radius,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: 350,
        width: deviceWidth - offset,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#000000',
    },
    categoryStyle: {
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    }
});

export default AnimeCard;