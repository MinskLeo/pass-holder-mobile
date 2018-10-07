import {
  AsyncStorage
} from 'react-native';
import EncryptionService from 'App/Services/EncryptionService';

class StorageService {
  static async loadStorage () {
    return AsyncStorage.getItem('storage')
    .then( storage => {

      const unjsonedStorage = JSON.parse(storage);
      // const decryptedStorage = EncryptionService.decrypt(unjsonedStorage);
      // const unjsonedDecryptedStorage = EncryptionService.decrypt(decryptedStorage);

      console.log('Loaded STORAGE: ', unjsonedStorage);
      return unjsonedStorage;
    })
    .catch( err => {
      console.log('Error with getting STORAGE');
      return null;
    })
  }

  static saveStorage (newStorage) {
    const jsonedStorage = JSON.stringify(newStorage);
    // const encryptedStorage = EncryptionService.encrypt(jsonedStorage);
    // const jsonedEncryptedStorage = JSON.stringify(encryptedStorage);

    AsyncStorage.setItem('storage', jsonedStorage)
    .then( storage => {
      console.log('New Storage: ', storage);
      return true;
    })
    .catch( err => {
      console.log('Storage SAVE Error: ', err);
      return false;
    })
  }

  static async clearStorage () {
    await AsyncStorage.clear();
    return true;
  }
}


export default StorageService;