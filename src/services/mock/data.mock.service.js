import DATA from "./data.mock.js";

export const getUserById = (id) => {
    try {
        const promise = new Promise((resolve, reject) => {
            const USER_MAIN_DATA_MOCK = DATA.USER_MAIN_DATA
                .filter(user => user.id === id)
                .shift()

            if (!USER_MAIN_DATA_MOCK) reject(new Error('Oops, une erreur est survenue...'));
            resolve(USER_MAIN_DATA_MOCK);
            // return USER_MAIN_DATA_MOCK;
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
            resolve(USER_ACTIVITY_MOCK);
            // return USER_ACTIVITY_MOCK;
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
            resolve(USER_AVERAGE_SESSIONS_MOCK);
            // return USER_AVERAGE_SESSIONS_MOCK;
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
            resolve(USER_PERFORMANCE_MOCK);
            // return USER_PERFORMANCE_MOCK;
        });

        return promise;
    } catch (error) {
        throw error;
    }
}

// const dataMockFunctions = {
//     getUserById,
// }

// export default dataMockFunctions