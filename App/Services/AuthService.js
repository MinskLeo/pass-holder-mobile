class AuthService {
  static checkKey (key) {
    if(key==='123') {
      return true;
    }

    return false;
  }
}

export default AuthService;