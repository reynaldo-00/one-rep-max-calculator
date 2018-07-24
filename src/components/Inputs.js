import React from 'react';
import { View, Text, TextInput, Switch, Slider, } from 'react-native';

const Inputs = ({ load, reps, isKgOn, loadChanged, repsChanged, kgChanged }) => {
    const { inputStyle } = styles;
    return (
        <View style={{ paddingTop: 30 }}>
            <View 
                style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 50 }}
            >
                <View 
                    style={{ flexDirection: 'column', alignItems: 'center', width: 70 }}
                >
                    <Text style={{ color: 'white', marginTop: -20 }}>
                        {`${(isKgOn) ? 'KG' : 'LB'}`}
                    </Text>
                    <TextInput 
                        style={inputStyle} 
                        maxLength={4}
                        placeholder={'LOAD'}
                        placeholderTextColor={'white'}
                        textAlign={'center'}
                        onChangeText={(value) => loadChanged(value)}
                        value={`${load}`}
                        keyboardType={'numeric'}
                    />
                </View>
                <Text style={{ color: 'white', fontWeight: '700' }}>X</Text>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: 70 }}>
                    <Text style={{ color: 'white', marginTop: -20 }}>REPS</Text>
                    <Text style={{ color: 'white', fontSize: 24, }}>{`${reps}`}</Text>
                </View>
            </View>

            <Slider 
                style={{ width: 300 }}
                maximumValue={10}
                minimumValue={1}
                step={1}
                onValueChange={(value) => repsChanged(value)}
                value={reps}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
                <Text style={{ color: 'white', fontSize: 20, padding: 15 }} >LB</Text>
                <Switch 
                    value={isKgOn}
                    style={{ alignSelf: 'center', }} 
                    onTintColor={'grey'}
                    tintColor={'grey'}
                    thumbTintColor={'white'}
                    onValueChange={kgChanged}
                />
                <Text style={{ color: 'white', fontSize: 20, padding: 15 }} >KG</Text>
            </View>
        </View>
    );
};

const styles = {
    inputContainer: { 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignSelf: 'center',
        // backgroundColor: 'rgba(255,0,0,0.4)',
    },
    inputStyle: {
        color: 'white',
        width: '100%',
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        fontSize: 24,
        // backgroundColor: 'rgba(255,0,0,0.4)',
    },
    
};

export { Inputs };
