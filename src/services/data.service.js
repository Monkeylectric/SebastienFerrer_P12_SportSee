import axios from "axios";
import { UserActivityFormat, UserAverageSessionFormat, UserFormat, UserPerformanceFoomat } from "./utils";

export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);

        return UserFormat(response.data.data);
    } catch (error) {
        throw error;
    }
}

export const getUserActivityById = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);

        return UserActivityFormat(response.data.data.sessions);
    } catch (error) {
        throw error;
    }
}

export const getUserAverageSession = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        
        return UserAverageSessionFormat(response.data.data.sessions);
    } catch (error) {
        throw error;
    }
}

export const getUserPerformance = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);

        return UserPerformanceFoomat(response.data.data);
    } catch (error) {
        throw error;
    }
}