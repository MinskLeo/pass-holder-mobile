class AuthService {
  static checkKey (key, storage) {
    if(key===storage.key) {
      return true;
    }

    return false;
  }
}

export default AuthService;