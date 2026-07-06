import { forgetPasswordDTO, loginDTO, SignupDTO } from "./auth.dto";

class AuthService{
    constructor(){}
    checkUser(){}
    signup(data : SignupDTO){
        data.email;
        data.password;
        data.phoneNumber
        data.userName
    }
    login(data : loginDTO){
        data.email;
        data.password
    }
    forgetPassword(data : forgetPasswordDTO){
        data.email;
    }
    sendOTP(){}
    verifyAccount(){}

}
export default AuthService
