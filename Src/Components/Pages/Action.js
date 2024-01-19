// GenreFilter.js
import React from 'react';
import { View, Text } from 'react-native';

const Action = ({ label, color, data, textcolor }) => (
    <View style={{ width: '30%', height: '80%', backgroundColor: color, borderRadius: 30, justifyContent: 'center', alignItems: 'center', borderColor : data, borderWidth : 1 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: textcolor }}>{label}</Text>
    </View>
);

export default Action;