import { constants } from '../constants';
import axios from '../scripts/axiosInstance'; // Import the custom axios instance


export const registerNewUser = async (values) => {
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


export const LoginNormalUser = async (values) => {
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

export const CustomGoogleLogin = async (token) => {
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

export const getPictureGallery = async (pageNumber, limit) => {
  try {
    console.log("Making api call ----------------------")
    const response = await axios.get(`/assets/picture_gallery/?page=${pageNumber}&limit=${limit}`);
    console.log('API Response:', response); // Add this line to check the response structure
    return { 
      status: response.status,
      images: response.data.images,
      total_pages: response.data.total_pages,
      next_page: response.data.next_page 
    };
  } catch (error) {
    console.error('API Error:', error); // Log errors
    return { status: 500, message: 'An unexpected error occurred.' };
  }
};

export const sendOtp = async (email, captchaToken) => {
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

  export const verifyOtp = async (email, otp, captchaToken) => {
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


  export const logOutUser = async () => {
    try {
      const response = await fetch(`${constants.BACKEND_API_URL}/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
      const data = await response.json();
      return { status: response.status, message : data.message };
    } catch (error) {
      return { status: 500, message: 'An unexpected error occurred.' };
    }
  };

  export const fetchCarouselImages = async () => {
    try {
      const response = await fetch(`${constants.BACKEND_API_URL}/assets/carousel`);
      const data = await response.json();
      return { status: response.status , images: data.images};
    } catch (error) {
      return { status: 500, message: 'An unexpected error occurred.' };
    }
  };