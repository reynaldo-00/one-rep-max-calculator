import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Percentages = ({ orm }) => {
    const percentages = [1.1, 1.05, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
    return (
        <View style={style.containerStyle}>
            <View style={style.headerContainer} >
                <Text style={style.headerText}>Percentage</Text>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList 
                    data={percentages}
                    renderItem={({ item }) => {
                        return (
                            <View style={style.itemContainer}>
                                <Text style={style.textStyle}>{`${Math.floor(item * 100)}%`}</Text>
                                <Text style={style.textStyle}>{`${Math.floor(orm * item)}`}</Text>
                            </View>
                        );
                    }}
                    keyExtractor={(item) => `${item}`}
                />
            </View>
        </View> 
    );
};

const style = {
    containerStyle: {
        paddingTop: 10,
        paddingBottom: 150,
        width: '100%',
        height: '100%',
    },
    headerContainer: {
        width: '100%', 
        borderBottomWidth: 1,
        borderColor: 'white',
        paddingBottom: 10,
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    textStyle: {
        color: 'white',
    },
};

export { Percentages };
