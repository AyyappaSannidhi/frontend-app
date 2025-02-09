import { constants } from '../constants';
import axios from '../scripts/axiosInstance'; // Import the custom axios instance


export const registerNewUser = async (values) => {
    try {
        const { bot_token, ...modifiedValues } = values

        const response = await axios.post("user/register", modifiedValues, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bot_token,
            },
        });
        return { 
          status: response.status, 
          message: response.data.message 
        };
    } catch (error) {
        return { status: 500, message: 'An unexpected error occurred.' };
    }
};

// website registered user login
export const LoginNormalUser = async (values) => {
  try {
      const { bot_token, ...modifiedValues } = values;
      const response = await axios.post("auth/login", modifiedValues, {
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${bot_token}`,
          },
      });
      return { 
          status: response.status, 
          message: response.data.message, 
          user: response.data.user 
      };
  } catch (error) {
      return { 
          status: error.response?.status || 500, 
          message: error.response?.data?.message || "An unexpected error occurred." 
      };
  }
};

// Google Auth login
export const CustomGoogleLogin = async (token) => {
    try {
        const response = await axios.post("auth/google_login",token);
        return { status: response.status, message: response.data.message , user: response.data.user };
    } catch (error) {
        return { status: 500, message: 'An unexpected error occurred.' };
    }
};

// send OTP to user email
export const sendOtp = async (email, captchaToken) => {
    try {
      const response = await axios.post('auth/otp_request', { email }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': captchaToken,
        },
      });
      return { status: response.status, message : response.data.message };
    } catch (error) {
      return { status: 500, message: 'An unexpected error occurred.' };
    }
  };

  export const verifyOtp = async (email, otp, captchaToken) => {
    try {
        const response = await axios.post(`${constants.BACKEND_API_URL}/auth/otp_verify`, 
            { email, otp },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${captchaToken}`, // Ensure it's formatted correctly
                },
            }
        );

        return { 
            status: response.status, 
            message: response.data.message, 
            user: response.data.user 
        };
    } catch (error) {
        return { 
            status: error.response?.status || 500, 
            message: error.response?.data?.message || "An unexpected error occurred." 
        };
    }
};

// logout user from backend perspective
  export const logOutUser = async () => {
    try {
      const response = await axios.post("auth/logout");
      return { status: response.status, message : response.data.message };
    } catch (error) {
      return { status: 500, message: 'An unexpected error occurred.' };
    }
  };

  // Fetch carousel images in home page
  export const fetchCarouselImages = async () => {
    try {
      const response = await axios.get("assets/carousel");
      return { status: response.status , images: response.data.images};
    } catch (error) {
      return { status: 500, message: 'An unexpected error occurred.' };
    }
  };

  // Fetch picture gallery
  export const getPictureGallery = async (pageNumber, limit) => {
    try {
      const response = await axios.get(`assets/picture_gallery/?page=${pageNumber}&limit=${limit}`);
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