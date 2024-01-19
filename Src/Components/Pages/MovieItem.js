// MovieItem.js
import React from 'react';
import { TouchableOpacity, ImageBackground, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

const MovieItem = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <ImageBackground
            source={{ uri: item.Poster }}
            style={{
                flex: 1,
                margin: 10,
                height: 300,
                borderRadius: 10,
                overflow: 'hidden',
            }}
            blurRadius={25}>
            <FastImage
                style={{
                    width: '100%',
                    height: '80%',
                    borderRadius: 10
                }}
                source={{ uri: item.Poster }}
                resizeMode={FastImage.resizeMode.stretch}
            />
            <Text style={{ color: 'white', fontSize: 18, marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}>{item.Title}</Text>
            <Text style={{ color: 'white', fontSize: 16, marginTop: 3, textAlign: 'center', marginBottom: 20 }}>{item.Type}</Text>
        </ImageBackground>
    </TouchableOpacity>
);

export default MovieItem;