// MovieList.js
import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import MovieItem from './Pages/MovieItem';
import Header from './Pages/Header';
import Action from './Pages/Action';
import LoadingIndicator from './Pages/LoadingIndicator';
import { MovieDataAPI } from '../ApiServices/Services';

const MovieList = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
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
        <MovieItem item={item} onPress={() => navigation.navigate('MovieDetailsPage', { item })} />
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#000000' }}>
            <Header />
            <View style={{
                width: 'auto', height: '6.5%', flexDirection: 'row', marginHorizontal: 10, alignItems: 'center', justifyContent: 'space-between'
            }}>
                <Action label="Top" color="#FFFFFF" data="#000000" textcolor="#000000" />
                <Action label="RPG" color="#000000" data="#FFFFFF" textcolor="#FFFFFF" />
                <Action label="Action" color="#000000" data="#FFFFFF" textcolor="#FFFFFF" />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.imdbID}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
            {isLoading && <LoadingIndicator />}
        </View>
    );
};

export default MovieList;