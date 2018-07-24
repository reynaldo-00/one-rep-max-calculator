import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Header } from './';

const Settings = ({ onPress, onGoBack, calculations, selected }) => {
    const showSelected = () => {
        return (
            <View style={{ position: 'absolute', right: 20, top: 20 }} >
                <Text style={{ color: 'white' }}>SELECTED</Text>
            </View>
        );
    };
    return (
        <View style={styles.container} >
            <Header onPress={onGoBack} settings />
            <View style={styles.flatlistContainer}>
                <FlatList
                    data={calculations}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={styles.itemContainer}
                                onPress={onPress.bind(this, item)}
                            >
                                <Text style={styles.itemText} >{`${item.title}`}</Text>
                                {(selected === item.key) ? showSelected() : null }
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => `${item.key}`}
                />
            </View>
        </View>
    );
};

const styles = {
    container: {
        height: '100%', 
        width: '100%', 
        position: 'absolute',  
        zIndex: 99,
        backgroundColor: 'black',
    },
    itemContainer: {
        width: '100%',
        height: 60,
        borderBottomWidth: 1,
        borderColor: 'white',
        paddingTop: 16,
        paddingLeft: 20,
    },
    itemText: {
        color: 'white',
        fontSize: 16,
    },
    flatlistContainer: {
        position: 'absolute',
        top: 60,
        width: '100%',
    },
};

export { Settings };
