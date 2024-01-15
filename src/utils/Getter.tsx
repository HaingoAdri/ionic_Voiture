import axios from 'axios';

export default async function get(url : string, token : string | null) {
    try {
        if(token != null) {
            console.log("token ",token);
        }

        const headers = {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
        };

        const response = await axios.get(url, { headers });

        return response.data;
      } catch (error) {
        console.error(error);
      }
}
