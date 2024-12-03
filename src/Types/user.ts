export interface UserRegistration {
    full_name: string;
    user_name: string;
    password: string;
    email: string | "";
    phone_number: string | "";
}

export interface UserType {
    user_type: string;
}
export interface UserAccounType {
    account_type: string;
}

export type CompleteUserRegistration = UserRegistration & UserType & UserAccounType & BotToken;


export interface UserLogin {
    user_name: string;
    password: string;
}

export interface BotToken {
    bot_token: string;
}

export type CompleteUserLogin = UserLogin & UserType & BotToken;


export interface User {
    id: string;
    name: string;
    email: string;
    picture: string;
  }

export interface Token {
    token : string
  }


