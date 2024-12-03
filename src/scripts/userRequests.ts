import { CompleteUserLogin, CompleteUserRegistration, Token } from "../Types/user";
import { constants } from '../constants';


export const registerNewUser = async (values: CompleteUserRegistration) => {
    try {
        const { bot_token, ...modifiedValues } = values

        const response = await fetch(`${constants.BACKEND_API_URL}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': values.bot_token,
            },
            body: JSON.stringify(modifiedValues),
        });

        const data = await response.json();
        return { status: response.status, message: data.message };
    } catch (error) {
        return { status: 500, message: 'An unexpected error occurred.' };
    }
};


export const LoginNormalUser = async (values: CompleteUserLogin) => {
    try {
        const { bot_token, ...modifiedValues } = values
        const response = await fetch(`${constants.BACKEND_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': values.bot_token,
            },
            body: JSON.stringify(modifiedValues),
        });

        const data = await response.json();
        return { status: response.status, message: data.message , user: data.user };
    } catch (error) {
        return { status: 500, message: 'An unexpected error occurred.' };
    }
};

export const CustomGoogleLogin = async (token: Token) => {
    try {
        const response = await fetch(`${constants.BACKEND_API_URL}/auth/google_login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(token),
        });

        const data = await response.json();
        return { status: response.status, message: data.message , user: data.user };
    } catch (error) {
        return { status: 500, message: 'An unexpected error occurred.' };
    }
};

export const getPictureGallery = async (pageNumber : number, limit : number) => {
  try {
    const response = await fetch(`${constants.BACKEND_API_URL}/assets/picture_gallery/?page=${pageNumber}&limit=${limit}`);
    const data = await response.json();
    return { status: response.status,
        images: data.images, 
        total : data.total, 
        total_pages: data.total_pages, 
        next_page: data.next_page 
    };
  } catch (error) {
    return { status: 500, message: 'An unexpected error occurred.' };
  }
};

export const sendOtp = async (email : string, captchaToken : string) => {
    try {
      const response = await fetch(`${constants.BACKEND_API_URL}/auth/otp_request`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': captchaToken,
        },
        body: JSON.stringify({
            email : email
        }),
    });
      const data = await response.json();
      return { status: response.status, message : data.message };
    } catch (error) {
      return { status: 500, message: 'An unexpected error occurred.' };
    }
  };

  export const verifyOtp = async (email : string, otp: string, captchaToken : string) => {
    try {
      const response = await fetch(`${constants.BACKEND_API_URL}/auth/otp_verify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': captchaToken,
        },
        body: JSON.stringify({
            email,
            otp
        }),
    });
      const data = await response.json();
      return { status: response.status, message : data.message, user: data.user };
    } catch (error) {
      return { status: 500, message: 'An unexpected error occurred.' };
    }
  };