// Header.js
import React from 'react';
import { View, Text } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => (
    <View style={{
        width: 'auto', height: '8%', flexDirection: 'row', marginHorizontal: 10,
        alignItems: 'center', justifyContent: 'space-between'
    }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#FFFFFF' }}>VELLE</Text>
        <Icons size={30} color="white" name="bell" style={{}} />
    </View>
);

export default Header;