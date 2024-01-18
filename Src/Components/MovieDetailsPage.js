// MovieDetailsPage
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import FastImage from 'react-native-fast-image';

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
                    <View style={{ width: '30%', height: '80%', backgroundColor: '#FF5CAD', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000' }}>Top</Text>
                    </View>

                    <View style={{ width: '30%', height: '80%', borderRadius: 30, backgroundColor: 'lightblue', borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000' }}>RPG</Text>
                    </View>
                </View>

                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>{ImageList.Title}</Text>
                <View style={{
                    width: 'auto', height: '14%', flexDirection: 'row', marginHorizontal: 20, marginTop: 20, alignItems : 'center', justifyContent : 'center'
                }}>
                    <View style={{ width: '100%', height: '60%', backgroundColor: '#FFFFFF', borderRadius : 20, alignItems : 'center', justifyContent : 'center'  }}>
                        <Text style = {{ fontSize : 20, color : '#000000', fontWeight : 'bold' }}>PLAY STREAM</Text>
                    </View>
                </View>
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