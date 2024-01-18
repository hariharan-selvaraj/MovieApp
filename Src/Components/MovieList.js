// MovieList
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Animated, ImageBackground, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';
import { MovieDataAPI } from '../ApiServices/Services';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const MovieList = ({ navigation }) => {
   const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    // const slideIn = () => {
    //     Animated.timing(slideAnim, {
    //         toValue: 0,
    //         duration: 1000,
    //         useNativeDriver: true,
    //     }).start();
    // };

    React.useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        AllMovieData();
    }

    const AllMovieData = async () => {
        setIsLoading(true)
        MovieDataAPI().then((result) => {
            setIsLoading(false)
            console.log("MovieDataAPI ====> ", JSON.stringify(result.data.Search));
            setData(result.data.Search)
        }).catch((error) => {
            setIsLoading(false)
            console.log("false----->", error)
        });
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('MovieDetailsPage', { item })}>
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
    return (
        <View style={{ flex: 1, backgroundColor: '#000000' }}>
            <View style={{
                width: 'auto', height: '8%', flexDirection: 'row', marginHorizontal: 10,
                alignItems: 'center', justifyContent: 'space-between'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#FFFFFF' }}>VELLE</Text>
                <Icons size={30}
                    color="white"
                    name="bell" style={{}} />
            </View>
            <View style={{
                width: 'auto', height: '6.5%', flexDirection: 'row', marginHorizontal: 10, alignItems: 'center', justifyContent: 'space-between'
            }}>
                <View style={{ width: '30%', height: '80%', backgroundColor: '#FFFFFF', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000' }}>Top</Text>
                </View>

                <View style={{ width: '30%', height: '80%', borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' }}>RPG</Text>
                </View>

                <View style={{ width: '30%', height: '80%', borderRadius: 30, borderColor: '#FFFFFF', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' }}>Action</Text>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.imdbID}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
            {isLoading ? (
                <View
                    style={{
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        justifyContent: "center",
                        alignSelf: "center",
                        backgroundColor: 'transparent',
                        top: 50
                    }}
                >
                    <ActivityIndicator
                        size={40}
                        color={"orange"}
                        backgroundColor={"transparent"}
                    />
                </View>
            ) : null}
        </View>
    );
};

export default MovieList;