export interface SignupDTO{
    email : string;
    password : string;
    phoneNumber?: string;
    userName : string;
}
export interface loginDTO{
    email : string;
    password:string;
}
export interface forgetPasswordDTO{
    email : string;
}
export interface resetPasswordDTO{
    password : string;
    email : string;
    otp : string;
}
