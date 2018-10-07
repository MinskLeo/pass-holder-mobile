const crypto = require("crypto-js");
import config from 'App/Configs/Encryption';

const JsonFormatter = {
  stringify: function (cipherParams) {
    var jsonObj = {
      ct: cipherParams.ciphertext.toString(crypto.enc.Base64)
    };
    if (cipherParams.iv) {
      jsonObj.iv = cipherParams.iv.toString();
    }
    if (cipherParams.salt) {
      jsonObj.s = cipherParams.salt.toString();
    }
    return JSON.stringify(jsonObj);
  },
  parse: function (jsonStr) {
    var jsonObj = JSON.parse(jsonStr);
    var cipherParams = crypto.lib.CipherParams.create({
      ciphertext: crypto.enc.Base64.parse(jsonObj.ct)
    });
    if (jsonObj.iv) {
      cipherParams.iv = crypto.enc.Hex.parse(jsonObj.iv)
    }
    if (jsonObj.s) {
      cipherParams.salt = crypto.enc.Hex.parse(jsonObj.s)
    }
    return cipherParams;
  }
};


class EncryptionService {
  static encrypt (payload) {
    const encrypted = crypto.AES.encrypt(payload, config.secret, { format: JsonFormatter });
    return encrypted;
  }

  static decrypt(payload) {
    const decrypted = crypto.AES.decrypt(payload, config.secret, { format: JsonFormatter });
    console.log('DECRYPTED: ', decrypted.toString(crypto.enc.Utf8));
    return decrypted.toString(crypto.enc.Utf8);
  }
}

export default EncryptionService;
