import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import CardView from 'react-native-cardview';

import styles from '../styles/tabScreenStyle';

const CardItem = (props) => {
    return (
        <CardView
            style={styles.cardItem}
            cardElevation={0}>
            <TouchableOpacity style={styles.itembg} onPress={() => props.navigation.navigate('ProductDetails', { name: props.name, price: props.price, img: props.img_url, description: props.description, offer: props.offer })}>
                <View style={styles.imgView}>
                    <Image source={{ uri: props.img_url }}
                        style={styles.imgbg} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ ...styles.name, fontSize: 16 }}>{props.name}</Text>
                </View>
                <View style={styles.chatView}>
                    <Text style={{ ...styles.name, color: 'black', fontSize: 16 }}>{props.price} &#8377;</Text>
                    <Text style={{ ...styles.name, color: 'grey', textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{props.price + 150} &#8377;</Text>
                    <Text style={{ ...styles.name, color: 'green' }}>{props.offer}% off</Text>
                </View>
            </TouchableOpacity>
        </CardView>
    )
}

export default CardItem