import { createStackNavigator, createAppContainer } from 'react-navigation';

//app screens
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import Address from '../screens/Address';

const MainNavigator = createStackNavigator(
    {
        SignUp: {
            screen: SignUp,
            navigationOptions: ({ navigation }) => ({
                title: '',
                headerTransparent: true,
                headerLeft: null,
            })
        },
        Login: {
            screen: Login,
            navigationOptions: ({ navigation }) => ({
                title: '',
                headerTransparent: true,
                headerLeft: null,
            })
        },
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                title: 'Product List',
                headerLeft: null,
            })
        },
        ProductDetails: {
            screen: ProductDetails,
            navigationOptions: ({ navigation }) => ({
                title: 'Product Details',
            })
        },
        Cart: {
            screen: Cart,
            navigationOptions: ({ navigation }) => ({
                title: 'Your Cart',
            })
        },
        Address: {
            screen: Address,
            navigationOptions: ({ navigation }) => ({
                title: '',
                headerTransparent: true,
                headerLeft: null,
            })
        }
    },
    {
        initialRouteName: 'SignUp'
    }
);

export default AppContainer = createAppContainer(MainNavigator);