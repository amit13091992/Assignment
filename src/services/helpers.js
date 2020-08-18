
import * as Storage from '../services/storage/index';
import prefKeys from '../services/storage/prefKeys';
import { StackActions, NavigationActions } from 'react-navigation';

export function isValidName(text) {
    var regex = /^[a-zA-Z]+((['. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (regex.test(text)) {
        return true;
    } else {
        return false;
    }
}

export function isNumberOnly(text) {
    var regex = /^[0-9]+$/;
    if (regex.test(text)) {
        return true;
    } else {
        return false;
    }
}

export const isLoggedIn = () => {
    if (Storage.retrieveItem(prefKeys.INTRO_VISITED)) {
        return true;
    } else {
        return false;
    }
}

export function resetAndNavigateToHome(props) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    props.navigation.dispatch(resetAction);
}

export function resetAndNavigateIntroScreen(props) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'SignUp' })],
    });
    props.navigation.dispatch(resetAction);
}