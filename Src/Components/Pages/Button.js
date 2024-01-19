// GenreFilter.js
import React from 'react';
import { View, Text } from 'react-native';

const Button = ({ label }) => (
    <View style={{
        width: 'auto', height: '14%', flexDirection: 'row', marginHorizontal: 20, marginTop: 20, alignItems: 'center', justifyContent: 'center'
    }}>
        <View style={{ width: '100%', height: '60%', backgroundColor: '#FFFFFF', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, color: '#000000', fontWeight: 'bold' }}>{label}</Text>
        </View>
    </View>
);

export default Button;