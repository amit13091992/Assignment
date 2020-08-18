import React, { Component } from 'react';
import { View, FlatList, BackHandler, Alert } from 'react-native';

import styles from '../styles/tabScreenStyle';
import CardItem from '../components/cardItem';

const dataArray = [
    {
        "name": "Beans",
        "price": 120,
        "offer": 20,
        "description": "A bean is the seed of one of several genera of the flowering plant family Fabaceae, which are used as vegetables for human or animal food.They can be cooked in many different ways,including boiling, frying, and baking, and are used in several traditional dishes throughout the world.",
        "img_url": "https://cdn.pixabay.com/photo/2016/08/28/16/52/spices-1626385_960_720.jpg"
    },
    {
        "name": "Spices",
        "price": 50,
        "offer": 10,
        "description": "A spice is a seed, fruit, root, bark, or other plant substance primarily used for flavoring or coloring food. Spices are distinguished from herbs, which are the leaves, flowers, or stems of plants used for flavoring or as a garnish. Spices are sometimes used in medicine, religious rituals, cosmetics or perfume production.",
        "img_url": "https://media.istockphoto.com/photos/bags-of-colorful-spices-for-sale-at-the-souq-picture-id115799171"
    },
    {
        "name": "Oil",
        "price": 200,
        "offer": 25,
        "description": "An oil is any nonpolar chemical substance that is a viscous liquid at ambient temperatures and is both hydrophobic (does not mix with water, literally water fearing) and lipophilic (mixes with other oils, literally fat loving). Oils have a high carbon and hydrogen content and are usually flammable and surface active. Most oils are unsaturated lipids that are liquid at room temperature.",
        "img_url": "https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg"
    },
    {
        "name": "Veggies",
        "price": 45,
        "offer": 5,
        "description": "Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. The alternate definition of the term is applied somewhat arbitrarily, often by culinary and cultural tradition.",
        "img_url": "https://cdn.pixabay.com/photo/2015/09/09/17/38/basil-932079_960_720.jpg"
    },
    {
        "name": "Shirts",
        "price": 2000,
        "offer": 60,
        "description": "Exclusive offers on shirts. A shirt is a cloth garment for the upper body (from the neck to the waist).Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper- body garments and undergarments.",
        "img_url": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
        "name": "Shoes",
        "price": 3000,
        "offer": 45,
        "description": "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with appearance originally being tied to function.",
        "img_url": "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
        "name": "Jeans",
        "price": 1800,
        "offer": 80,
        "description": "Jeans are a type of pants or trousers, typically made from denim or dungaree cloth. Often the term jeans refers to a particular style of trousers, called blue jeans, which were invented by Jacob W. Davis in partnership with Levi Strauss & Co. in 1871[1] and patented by Jacob W. Davis and Levi Strauss on May 20, 1873.",
        "img_url": "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
        "name": "Shampoo",
        "price": 600,
        "offer": 15,
        "description": "Shampoo is a hair care product, typically in the form of a viscous liquid, that is used for cleaning hair. Less commonly, shampoo is available in bar form, like a bar of soap. Shampoo is used by applying it to wet hair.",
        "img_url": "https://images-na.ssl-images-amazon.com/images/I/51TnUCOleYL._SL1000_.jpg"
    },
];

export default class Home extends Component {
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
        this.openCloseAppPopup();
        return true;
    };

    openCloseAppPopup() {
        Alert.alert(
            'App', 'Are you sure want to exit?',
            [
                {
                    text: 'NO',
                    onPress: () => {
                        //console.log('Cancel Pressed')
                    },
                    style: 'cancel',
                },
                { text: 'Yes', onPress: () => BackHandler.exitApp() },
            ],
            { cancelable: false },
        );
    }

    render() {
        return (
            <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                <View style={styles.flatView}>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            numColumns={2}
                            data={dataArray}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => {
                                return (
                                    <CardItem
                                        name={item.name}
                                        price={item.price}
                                        offer={item.offer}
                                        description={item.description}
                                        img_url={item.img_url}
                                        navigation={this.props.navigation}
                                    />
                                )
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
