import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const AddtoCartButton = (props) => {
    const [count, setCount] = useState(0);

    return (
        <View
            style={{
                width: Dimensions.get("window").width / 1.1,
                marginTop: 5, backgroundColor: '#fbc02d', alignSelf: "center", borderRadius: 10,
                height: 40, alignItems: 'center'
            }}>
            <View style={{
                padding: 15,
                marginLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                {count < 1 ?
                    <TouchableOpacity onPress={() => {
                        setCount(count + 1);
                        props.totalItems(count + 1, 'plus');
                        // props.totalItems(props.calculationType, props.levelName, count + 1, props.headerTitle);
                    }} style={{
                        flex: 1,
                        flexDirection: "row",
                    }}>
                        <Text style={{
                            flex: 1,
                            textAlign: "center",
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: 10
                        }}>Add to cart</Text>
                        <Text style={{
                            marginEnd: 8, fontSize: 16,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>+</Text>
                    </TouchableOpacity>
                    :
                    <View style={{
                        width: "100%",
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={() => {
                            setCount(count - 1);
                            props.totalItems(count - 1, 'minus');
                            // props.totalItems(props.calculationType, props.levelName, count - 1, props.headerTitle)
                        }}
                            style={{
                                flex: 1,
                                alignItems: "center",
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'white',
                            }}>
                            <Text style={{
                                marginEnd: 8, fontSize: 16,
                                fontWeight: 'bold',
                                color: 'white'
                            }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{
                            flex: 1,
                            textAlign: "center",
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>{count}</Text>
                        <TouchableOpacity onPress={() => {
                            setCount(count + 1);
                            props.totalItems(count + 1, 'plus');
                            // props.totalItems(props.calculationType, props.levelName, count + 1, props.headerTitle)
                        }}
                            style={{
                                flex: 1,
                                alignItems: "center",
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'white',
                            }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'white'
                            }}>+</Text>
                        </TouchableOpacity>
                    </View>}
            </View>
        </View>
    )
}

export default AddtoCartButton;