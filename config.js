const loadEnvVariables = () => {
    // For browser environments
    if (typeof process === 'undefined') {
      return {
        EMAILJS_USER_ID: 'user_xCtwFxrwN9qztgVoznqKh', // Fallback value
        EMAILJS_SERVICE_ID: 'service_965b7im', // Fallback value
        EMAILJS_TEMPLATE_ID: 'template_pbcrm0r' // Fallback value
      };
    }
    
    // For Node.js environments
    if (process.env.NODE_ENV !== 'production') {
      require('dotenv').config();
    }
    
    return {
      EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
      EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID
    };
  };
  
  const env = loadEnvVariables();
  
  export default env;