import axios from 'axios';

export default async function send_formData_post(url : string, formData : any, token : string | null) {
  try {
      if(token != null) {
          console.log("token ",token);
      }

      const headers = {
          'Content-Type': 'multipart/form-data',
          ...(token && { 'Authorization': `Bearer ${token}` }),
      };

      const response = await axios.post(url, formData, { headers });

      return response.data;
    } catch (error) {
      console.error(error);
    }
}