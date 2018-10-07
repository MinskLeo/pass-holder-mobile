var JsonFormatter = {
    stringify: function (cipherParams) { 
      var jsonObj = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) };
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
      var cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
      });
      if (jsonObj.iv) {
        cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv)
      }
      if (jsonObj.s) {
        cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s)
      }
      return cipherParams;
    }
};
  var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase", { format: JsonFormatter }); alert(encrypted);
  var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase", { format: JsonFormatter }); alert(decrypted.toString(CryptoJS.enc.Utf8));
  // {"ct":"tZ4MsEnfbcDOwqau68aOrQ==","iv":"8a8c8fd8fe33743d3638737ea4a00698","s":"ba06373c8f57179c"}