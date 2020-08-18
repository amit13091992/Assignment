import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput, Alert } from 'react-native';

import { isNumberOnly } from '../services/helpers';
import * as Storage from '../services/storage/index';
import prefKeys from '../services/storage/prefKeys';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userNumber: '',
            userPassword: ''
        };
    }

    componentDidMount() {
        this.setState({ userNumber: Storage.retrieveItem(prefKeys.MOBILE) })
    }

    validatedata() {
        if (this.state.userNumber === '') {
            Alert.alert('Mobile number can not be empty.')
        } else if (this.state.userPassword === '') {
            Alert.alert('Password can not be empty.')
        } else if (this.state.userNumber.length < 10) {
            Alert.alert('Mobile number length is minimum 10 digits.')
        } else if (this.state.userNumber.length < 8) {
            Alert.alert('password length is minimum 8 digits.')
        } else if (!isNumberOnly(this.state.userNumber)) {
            Alert.alert('Enter Valid Mobile Number.')
        } else if (!isNumberOnly(this.state.userPassword)) {
            Alert.alert('Enter numeric password.')
        } else if (this.state.userNumber.charAt(0) != 6 && this.state.userNumber.charAt(0) != 7 && this.state.userNumber.charAt(0) != 8 && this.state.userNumber.charAt(0) != 9) {
            Alert.alert('Enter Valid Mobile Number.')
        } else {
            Storage.saveItem(prefKeys.INTRO_VISITED, true);
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <View style={{ width: "100%", height: "100%" }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ marginBottom: 20, color: "#78909c", fontWeight: "bold", fontSize: 22 }}>LOGIN</Text>
                </View>
                <View style={{ flex: 1.5, }}>
                    <View style={{ width: "100%", alignItems: "center", }}>

                        <TextInput
                            placeholder="Mobile Number"
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
                            value={this.state.userNumber}
                            onChangeText={text => this.setState({ userNumber: text })}
                        />

                        <TextInput
                            placeholder="Password"
                            maxLength={8}
                            keyboardType={'numeric'}
                            secureTextEntry={true}
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
                            value={this.state.userPassword}
                            onChangeText={text => this.setState({ userPassword: text })}
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
                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 14 }}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
