import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust the URL based on your backend configuration

export const recognizeGesture = async (gestureData) => {
    try {
        const response = await axios.post(`${API_URL}/recognize`, { data: gestureData });
        return response.data;
    } catch (error) {
        console.error('Error recognizing gesture:', error);
        throw error;
    }
};

export const fetchLiveCaptions = async () => {
    try {
        const response = await axios.get(`${API_URL}/live-captions`);
        return response.data;
    } catch (error) {
        console.error('Error fetching live captions:', error);
        throw error;
    }
};