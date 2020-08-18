import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput, Alert } from 'react-native';
import SyncStorage from 'sync-storage';

import { isNumberOnly, isValidName, isLoggedIn, resetAndNavigateToHome } from '../services/helpers';
import * as Storage from '../services/storage/index';
import prefKeys from '../services/storage/prefKeys';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            init: false,
            userFirstName: '',
            userLastName: '',
            userNumber: ''
        };
        this.checkIsOpenFirstTime();
    }

    checkIsOpenFirstTime = async () => {
        SyncStorage.init()
            .then(() => {
                if (isLoggedIn()) {
                    resetAndNavigateToHome(this.props);
                } else {
                    setTimeout(() => { this.setState({ init: true }); });
                }
            })
            .catch(() => {
                setTimeout(() => { this.setState({ init: true }); })
            });
    }

    validatedata() {
        if (this.state.userFirstName === '') {
            Alert.alert('First Name can not be empty.')
        } else if (this.state.userLastName === '') {
            Alert.alert('Last Name can not be empty.')
        } else if (this.state.userNumber === '') {
            Alert.alert('Mobile number can not be empty.')
        } else if (this.state.userNumber.length < 10) {
            Alert.alert('Mobile number length is minimum 10 digits.')
        } else if (!isValidName(this.state.userFirstName)) {
            Alert.alert('Enter Valid First Name.')
        } else if (!isValidName(this.state.userLastName)) {
            Alert.alert('Enter Valid Last Name.')
        } else if (!isNumberOnly(this.state.userNumber)) {
            Alert.alert('Enter Valid Mobile Number.')
        } else if (this.state.userNumber.charAt(0) != 6 && this.state.userNumber.charAt(0) != 7 && this.state.userNumber.charAt(0) != 8 && this.state.userNumber.charAt(0) != 9) {
            Alert.alert('Enter Valid Mobile Number.')
        } else {
            Storage.saveItem(prefKeys.MOBILE, this.state.userNumber);
            this.props.navigation.navigate('Login');
        }
    }

    render() {
        if (this.state.init) {
            return (
                <View style={{ width: "100%", height: "100%" }}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ marginBottom: 20, color: "#78909c", fontWeight: "bold", fontSize: 22 }}>SIGN UP</Text>
                    </View>
                    <View style={{ flex: 1.5, }}>
                        <View style={{ width: "100%", alignItems: "center", }}>
                            <TextInput
                                placeholder="First Name"
                                keyboardType={'default'}
                                maxLength={30}
                                underlineColorAndroid='transparent'
                                style={{
                                    textAlign: 'left',
                                    width: Dimensions.get("window").width / 1.2,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: '#78909c',
                                    paddingStart: 10,
                                    fontWeight: "bold",
                                    color: "#000000",
                                    borderRadius: 5,
                                    marginBottom: 15
                                }}
                                maxLength={20}
                                value={this.state.userFirstName}
                                onChangeText={text => this.setState({ userFirstName: text })}
                            />

                            <TextInput
                                placeholder="Last Name"
                                keyboardType={'default'}
                                maxLength={30}
                                underlineColorAndroid='transparent'
                                style={{
                                    textAlign: 'left',
                                    width: Dimensions.get("window").width / 1.2,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: '#78909c',
                                    paddingStart: 10,
                                    fontWeight: "bold",
                                    color: "#000000",
                                    borderRadius: 5
                                }}
                                maxLength={20}
                                value={this.state.userLastName}
                                onChangeText={text => this.setState({ userLastName: text })}
                            />

                            <TextInput
                                placeholder="Mobile Number"
                                maxLength={10}
                                keyboardType={'numeric'}
                                underlineColorAndroid='transparent'
                                style={{
                                    textAlign: 'left',
                                    width: Dimensions.get("window").width / 1.2,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: '#78909c',
                                    paddingStart: 10,
                                    fontWeight: "bold",
                                    color: "#000000",
                                    marginTop: 15,
                                    borderRadius: 5
                                }}
                                value={this.state.userNumber}
                                onChangeText={text => this.setState({ userNumber: text })}
                            />

                            <View style={{ width: "100%", alignItems: "center" }}>
                                <TouchableOpacity
                                    onPress={() => { this.validatedata() }}
                                    style={{
                                        width: Dimensions.get("window").width / 1.2,
                                        height: 50,
                                        marginTop: 15,
                                        borderRadius: 5,
                                        backgroundColor: "#fbc02d",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 14 }}>SIGN UP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            );
        } else {
            return <View />;
        }
    }
}
