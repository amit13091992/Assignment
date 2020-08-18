import React, { Component } from 'react';
import { View, Text, BackHandler, TouchableOpacity, Dimensions } from 'react-native';

import styles from '../styles/tabScreenStyle';
import * as Storage from '../services/storage/index';
import prefKeys from '../services/storage/prefKeys';
import { resetAndNavigateIntroScreen } from '../services/helpers';

export default class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        this.props.navigation.navigate('Home');
        return true;
    };

    logoutApp() {
        Storage.removeItem(prefKeys.INTRO_VISITED);
        Storage.removeItem(prefKeys.MOBILE);
        Storage.removeItem(prefKeys.PRODUCT);
        resetAndNavigateIntroScreen(this.props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Select Address</Text>

                <View style={{ width: "100%", alignItems: "center" }}>
                    <TouchableOpacity
                        style={{
                            width: Dimensions.get("window").width / 1.1,
                            height: 50,
                            elevation: 5,
                            marginTop: 30,
                            borderRadius: 5,
                            backgroundColor: "#fbc02d",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 30
                        }}
                        onPress={() => { this.logoutApp(); }}
                    >
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
