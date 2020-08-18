import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, BackHandler } from 'react-native';

import styles from '../styles/tabScreenStyle';
import AddtoCartButton from '../components/AddtoCartButton';
import * as Storage from '../services/storage/index';
import prefKeys from '../services/storage/prefKeys';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noItems: true
        };
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    };

    getTotalCartItems(count, type) {
        const prop = this.props.navigation.state.params;
        console.log("========== " + count + " " + type);
        if (count != 0) {
            this.setState({ noItems: false })
        }
        let item = {
            title: prop.name,
            price: prop.price,
            count: count,
            img: prop.img
        }

        if (type === 'plus') {
            Storage.saveItem(prefKeys.PRODUCT, item);
        }

        if (type === 'minus') {
            Storage.saveItem(prefKeys.PRODUCT, item);
        }
        // console.log(" --- " + JSON.stringify(Storage.retrieveItem(prefKeys.PRODUCT)))
    }

    render() {
        const prop = this.props.navigation.state.params;
        return (
            <ScrollView contentContainerStyle={{ flex: 1, width: "100%", height: "100%", alignItems: "center" }} showsVerticalScrollIndicator={false}>
                <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
                    <Image source={{ uri: prop.img }}
                        resizeMode="cover"
                        style={{ width: '100%', height: 250, marginStart: 8, marginEnd: 8 }} />
                    <View style={{ width: '100%', margin: 20 }}>
                        <Text style={{ fontSize: 26, marginLeft: 20, color: 'black', fontWeight: 'bold' }}>{prop.name}</Text>
                        <Text style={{ fontSize: 20, marginLeft: 20, color: 'green' }}>Special price</Text>

                        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 25, marginTop: 10 }}>
                            <Text style={{ ...styles.name, marginRight: 10, color: 'black', fontSize: 16 }}>{prop.price} &#8377;</Text>
                            <Text style={{ ...styles.name, marginRight: 10, color: 'grey', textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{prop.price + 150} &#8377;</Text>
                            <Text style={{ ...styles.name, color: 'green' }}>{prop.offer}% off</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 16, marginHorizontal: 20, color: 'grey', textAlign: 'justify' }}>{prop.description}</Text>

                    <View style={{ width: "100%", alignItems: "center" }}>
                        <AddtoCartButton
                            totalItems={this.getTotalCartItems.bind(this)}
                        />
                        <TouchableOpacity
                            style={{
                                width: Dimensions.get("window").width / 1.1,
                                height: 50,
                                elevation: 5,
                                marginTop: 10,
                                borderRadius: 5,
                                backgroundColor: "#fbc02d",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: 30
                            }}
                            onPress={() => { this.props.navigation.navigate('Cart'); }}
                        >
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>Open cart</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        );
    }
}
