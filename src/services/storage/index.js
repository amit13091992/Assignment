import AsyncStorage from '@react-native-community/async-storage';
import SyncStorage from 'sync-storage';

export function retrieveItem(storageKey) {
    try {
        var retrievedItem = SyncStorage.get(storageKey);
        return retrievedItem;
    } catch (error) {
        //console.log(error.message);
        return null;
    }
}

export function saveItem(storageKey, storageValue) {
    try {
        SyncStorage.set(storageKey, storageValue);
        return true;
    } catch (error) {
        return false;
    }
}

export function saveObject(storageKey, storageValue) {
    try {
        AsyncStorage.setItem(storageKey, JSON.stringify(storageValue), (err) => {
            if (err) {
                console.log("an error in object storing. ");
                throw err;
            }
        }).catch((err) => {
            console.log("error is: " + err);
        });
        return true;
    } catch (error) {
        return false;
    }
}

export function removeItem(storageKey) {
    try {
        SyncStorage.remove(storageKey)
        return true;
    } catch (error) {
        return false;
    }
}
