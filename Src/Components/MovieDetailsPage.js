// MovieDetailsPage
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import FastImage from 'react-native-fast-image';
import Action from './Pages/Action';
import Button from './Pages/Button';

const MovieDetailsPage = ({ route }) => {
    const [ImageList, setImageList] = useState(route.params?.item);

    useEffect(() => {
        console.log("ImageList ==> ", ImageList)
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <FastImage style={styles.image} source={{ uri: ImageList.Poster }} resizeMode={FastImage.resizeMode.cover} />

                <View style={{
                    width: 'auto', height: '6.5%', flexDirection: 'row', marginHorizontal: 20, alignItems: 'center', marginTop: 20
                }}>
                    <Action label="Top" color="#FF5CAD" data="#000000" textcolor="#FFFFFF" />
                    <Action label="RPG" color="lightblue" data="#000000" textcolor="#FFFFFF" />
                </View>

                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>{ImageList.Title}</Text>
                <Button label="PLAY STREAM" />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    title: {
        color: 'darkblue',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20
    },
});

export default MovieDetailsPage;