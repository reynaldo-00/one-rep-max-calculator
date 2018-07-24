import React from 'react';
import { View, Text } from 'react-native';

const Weight = ({ orm }) => {
    return (
        <View>
            <Text style={{ color: 'white', fontSize: 60 }}>{orm}</Text>
        </View>
    );
};

export { Weight };
