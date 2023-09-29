export class User {
    constructor(userData) {
        this.userData = userData;
    }

    UserFormat() {
        const score = this.userData.todayScore || this.userData.score;
    
        this.userData.todayScore ? delete this.userData.todayScore : delete this.userData.score
    
        return {
            ...this.userData,
            score
        };
    }

    UserActivityFormat() {
        let data = [];
    
        this.userData.forEach(session => {
            const day = new Date(session.day).getDate();
    
            data.push({
                ...session,
                day
            });
        });
    
        return data;
    }

    UserAverageSessionFormat() {
        let data = [];
        const letterDays = ["L", "M", "M", "J", "V", "S", "D"];
    
        this.userData.forEach(session => {
            const day = letterDays[session.day - 1];
    
            data.push({
                ...session,
                day
            });
        });
    
        return data;
    }

    UserPerformanceFoomat() {
        const translateKind = {
            "cardio": "Cardio",
            "energy": "Energie",
            "endurance": "Endurance",
            "strength": "Force",
            "speed": "Vitesse",
            "intensity": "Intensité"
        }
    
        const currentKind = this.userData.kind;
        const currentData = this.userData.data;
    
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
}