import axios from "axios";

export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);

        return response.data.data;
    } catch (error) {
        throw error;
    }
}

export const getUserActivityById = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);

        return response.data.data;
    } catch (error) {
        throw error;
    }
}

export const getUserAverageSession = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

export const getUserPerformance = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);

        return response.data.data;
    } catch (error) {
        throw error;
    }
}