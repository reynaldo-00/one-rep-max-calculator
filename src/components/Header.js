import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header = ({ settings, onPress }) => {
    return (
        <View style={styles.contianer}>
            <Text 
                style={{ color: 'white', fontSize: 24, marginTop: -10 }}
            >ONERM</Text>
            <TouchableOpacity
                style={{ position: 'absolute', right: 20 }}
                onPress={onPress}
            >
                <Text style={{ color: 'white' }} >{`${(settings) ? 'BACK' : 'FORMULAS'}`}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    contianer: {
        position: 'absolute',
        top: 20,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '100%',
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
};

export { Header };
