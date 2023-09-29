export const UserFormat = (userData) => {
    const score = userData.todayScore || userData.score;

    userData.todayScore ? delete userData.todayScore : delete userData.score

    return {
        ...userData,
        score
    };
}

export const UserActivityFormat = (userActivityData) => {
    let data = [];

    userActivityData.forEach(session => {
        const day = new Date(session.day).getDate();

        data.push({
            ...session,
            day
        });
    });

    return data;
}

export const UserAverageSessionFormat = (averageSessionData) => {
    let data = [];
    const letterDays = ["L", "M", "M", "J", "V", "S", "D"];

    averageSessionData.forEach(session => {
        const day = letterDays[session.day - 1];

        data.push({
            ...session,
            day
        });
    });

    return data;
}

export const UserPerformanceFoomat = (performanceData) => {
    const translateKind = {
        "cardio": "Cardio",
        "energy": "Energie",
        "endurance": "Endurance",
        "strength": "Force",
        "speed": "Vitesse",
        "intensity": "Intensité"
    }

    const currentKind = performanceData.kind;
    const currentData = performanceData.data;

    let dataFormat = [];
    
    for (let k in currentKind) {
        dataFormat.push({
            "name": translateKind[currentKind[k]],
            "value": currentData[k-1].value,
            "kind": currentData[k-1].kind,
        });
    }

    const data = dataFormat.reverse();

    return data;
}