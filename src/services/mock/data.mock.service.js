import DATA from "./data.mock.js";
import { User } from "../utils.js";

export const getUserById = (id) => {
    try {
        const promise = new Promise((resolve, reject) => {
            const USER_MAIN_DATA_MOCK = DATA.USER_MAIN_DATA
                .filter(user => user.id === id)
                .shift()

            if (!USER_MAIN_DATA_MOCK) reject(new Error('Oops, une erreur est survenue...'));
            resolve(new User(USER_MAIN_DATA_MOCK).UserFormat());
        });

        return promise;
    } catch (error) {
        throw error;
    }
}

export const getUserActivityById = (id) => {
    try {
        const promise = new Promise((resolve, reject) => {
            const USER_ACTIVITY_MOCK = DATA.USER_ACTIVITY
                .filter(userActivity => userActivity.userId === id)
                .shift()

            if (!USER_ACTIVITY_MOCK) reject(new Error('Oops, une erreur est survenue...'));
            resolve(new User(USER_ACTIVITY_MOCK.sessions).UserActivityFormat());
        });

        return promise;
    } catch (error) {
        throw error;
    }
}

export const getUserAverageSession = (id) => {
    try {
        const promise = new Promise((resolve, reject) => {
            const USER_AVERAGE_SESSIONS_MOCK = DATA.USER_AVERAGE_SESSIONS
                .filter(userActivity => userActivity.userId === id)
                .shift()

            if (!USER_AVERAGE_SESSIONS_MOCK) reject(new Error('Oops, une erreur est survenue...'));
            resolve(new User(USER_AVERAGE_SESSIONS_MOCK.sessions).UserAverageSessionFormat());
        });

        return promise;
    } catch (error) {
        throw error;
    }
}

export const getUserPerformance = (id) => {
    try {
        const promise = new Promise((resolve, reject) => {
            const USER_PERFORMANCE_MOCK = DATA.USER_PERFORMANCE
                .filter(userPerformance => userPerformance.userId === id)
                .shift()

            if (!USER_PERFORMANCE_MOCK) reject(new Error('Oops, une erreur est survenue...'));
            resolve(new User(USER_PERFORMANCE_MOCK).UserPerformanceFoomat());
        });

        return promise;
    } catch (error) {
        throw error;
    }
}