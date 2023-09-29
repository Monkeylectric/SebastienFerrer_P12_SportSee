import axios from "axios";
import { User } from "./utils";

export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);

        return new User(response.data.data).UserFormat();
    } catch (error) {
        throw error;
    }
}

export const getUserActivityById = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);

        return new User(response.data.data.sessions).UserActivityFormat();
    } catch (error) {
        throw error;
    }
}

export const getUserAverageSession = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        
        return new User(response.data.data.sessions).UserAverageSessionFormat();
    } catch (error) {
        throw error;
    }
}

export const getUserPerformance = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);

        return new User(response.data.data).UserPerformanceFoomat();
    } catch (error) {
        throw error;
    }
}