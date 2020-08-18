import React, { Component } from 'react';
import { Dimensions, View, Text, Image, TouchableOpacity, BackHandler } from 'react-native';

import * as Storage from '../services/storage/index';
import prefKeys from '../services/storage/prefKeys';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            img: '',
            count: 0,
            noItems: false
        };
        console.log(" --- " + JSON.stringify(Storage.retrieveItem(prefKeys.PRODUCT)))
    }
    componentDidMount() {
        this._onFocusListener = this.props.navigation.addListener('didFocus', (payload) => {
            let product = Storage.retrieveItem(prefKeys.PRODUCT)
            if (product) {
                this.setState({ name: product.title, price: product.price, count: product.count, img: product.img });
            } else {
                this.setState({
                    noItems: true
                })
            }
        });
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    };

    deleteItem() {
        Storage.removeItem(prefKeys.PRODUCT);
    }

    render() {
        if (!this.state.noItems) {
            return (
                <View style={{ width: "100%", height: "100%" }}>
                    <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: this.state.img }}
                            resizeMode="contain"
                            style={{ width: '50%', height: 250, marginStart: 8, marginEnd: 8 }} />

                        <View style={{ marginRight: 30 }}>
                            <Text style={{ fontSize: 24, color: 'black' }}>{this.state.name}</Text>
                            <Text style={{ fontSize: 18, color: 'green' }}>{this.state.price} &#8377;</Text>
                            <Text style={{ fontSize: 18, color: 'black' }}>{this.state.count}</Text>
                        </View>
                    </View>

                    <View style={{ width: "100%", alignItems: "center" }}>
                        <TouchableOpacity
                            style={{
                                width: Dimensions.get("window").width / 1.1,
                                height: 50,
                                elevation: 5,
                                marginTop: '50%',
                                borderRadius: 5,
                                backgroundColor: "#fbc02d",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: 30
                            }}
                            onPress={() => { this.props.navigation.navigate('Address') }}
                        >
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>Select Address</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        } else {
            return (
                <View>
                    <Text>Hello</Text>
                </View>
            );
        }
    }
}
