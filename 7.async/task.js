class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if(this.alarmCollection.find(watch => watch.time === time)){
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({callback, time, canCall: true})
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(watch => watch.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
        //let hours = new Date().getHours;
        //let minute = new Date().getMinutes;
        //return hours, minute;
    }

    start() {
        if(this.intervalId) {
            return;
        }
        this.intervalId = setInterval (() => this.alarmCollection.forEach(watch => {
            if (watch.time === this.getCurrentFormattedTime() && watch.canCall) {
                watch.canCall = false;
                watch.callback();
            }
        }),
        1000
        )  
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(watch => (watch.canCall = true))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}