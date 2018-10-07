import ValidationConfig from 'App/Configs/Validation';

type ValidationResponse = {
  state: boolean,
  message: string
}

class ValidationHelper {


  static password (pass: string): ValidationResponse {
    let result = {
      state: true,
      message: 'OK'
    }

    // Length
    if(pass.length<ValidationConfig.passwordMin) {
      result.state=false;
      result.message=`Needs to be more than ${ValidationConfig.passwordMin}`;
    }
    else if (pass.length>ValidationConfig.passwordMax) {
      result.state = false;
      result.message = `Needs to be less than ${ValidationConfig.passwordMax}`;
    }

    return result;
  }
}

export default ValidationHelper;