import React from 'react';
import {AsyncStorage, Alert} from 'react-native';

export default class EventController {
    /*events[tripId][cityName][date] = {
     *                                      {name:%%%, start:%%%, end:%%%, address:%%%, id:%%%},
     *                                      {name:%%%, start:%%%, end:%%%, address:%%%, id:%%%}
     *                                   }
     */
    constructor() {
        this.data = 'initial';

        //uncomment this line to blast all events on app start up
        //AsyncStorage.setItem("events", JSON.stringify({})).done();
    }

    emptyEvents() {
        AsyncStorage.setItem("events", JSON.stringify({})).done();
    }

    async addEvent(tripName, cityName, date, name, start, end, address) {
        console.log(start);
        console.log(end);
        if(this.timeIsLessThanOrEqual(end, start)) {
            Alert.alert('Your start time wasn\'t before your end time, so it won\'t be added');
            return false;
        }
        let value = await AsyncStorage.getItem("events");
        let events = JSON.parse(value);
        let dayItems = events[tripName][cityName][date];//{name: name, start: start, end: end, address: address, id: id};
        let exit = false;
        dayItems.map((item) => {
            if ((this.timeIsLessThanOrEqual(item.start,start) && this.timeIsLessThan(start,item.end)) ||
                    (this.timeIsLessThan(item.start, end) && this.timeIsLessThanOrEqual(end,item.end))) exit = true;
        });
        if (exit) {
            Alert.alert('Your event conflicts with another event, so it won\'t be added');
            return false;
        }
        let newItem = {name: name, start: start, end: end, address: address, id: 0};
        dayItems.map((item) => {
            if (this.timeIsLessThanOrEqual(item.end, start)) {
                newItem.id = item.id + 1;
            }
        });
        events[tripName][cityName][date].splice(newItem.id,0,newItem);
        for(let i = 0; i < events[tripName][cityName][date].length; i++) {
            if(events[tripName][cityName][date][i].id != i)
                events[tripName][cityName][date][i].id = i;
        }
        await AsyncStorage.setItem("events", JSON.stringify(events));
        return true;
    }

    async getEvents(tripName, cityName, date) {
        await this.initializeEvent(tripName, cityName, date);
        let value = await AsyncStorage.getItem("events");
        console.log(value);
        return JSON.parse(value)[tripName][cityName][date];
    }

    async editEvent(tripName, cityName, date, name, start, end, address, id, refresh) {
        let value = await AsyncStorage.getItem("events");
        console.log(value);
        console.log(id);
        let events = await JSON.parse(value);
        let oldEvent = events[tripName][cityName][date][id];
        console.log(JSON.stringify(oldEvent));
        await this.deleteEvent(tripName, cityName, date, id);
        if(!(await this.addEvent(tripName, cityName, date, name, start, end, address)))
            await this.addEvent(tripName, cityName, date, oldEvent.name, oldEvent.start, oldEvent.end, oldEvent.address);
    }

    async deleteEvent(tripName, cityName, date, id) {
        let value = await AsyncStorage.getItem("events");
        let events = JSON.parse(value);
        events[tripName][cityName][date].splice(id,1);
        for(let i = 0; i < events[tripName][cityName][date].length; i++) {
            if(events[tripName][cityName][date][i].id != i)
                events[tripName][cityName][date][i].id = i;
        }
        await AsyncStorage.setItem("events", JSON.stringify(events));
    }

    async initializeEvent(tripName, cityName, date) {
        var value = await AsyncStorage.getItem("events");
        let events = await JSON.parse(value);
        if (!events.hasOwnProperty(tripName))
            events[tripName] = {};
        if (!events[tripName].hasOwnProperty(cityName))
            events[tripName][cityName] = {};
        if (!events[tripName][cityName].hasOwnProperty(date))
            events[tripName][cityName][date] = [];
        await AsyncStorage.setItem("events", JSON.stringify(events));
    }

    timeIsLessThan(time1, time2) {
        console.log(time1);
        console.log(time2);
        let time1hour = time1.split(':')[0];
        let time1minutes = time1.split(':')[1];
        let time2hour = time2.split(':')[0];
        let time2minutes = time2.split(':')[1];

        let date1 = new Date();
        date1.setHours(time1hour,time1minutes);
        let date2 = new Date();
        date2.setHours(time2hour, time2minutes);

        if(date1 < date2)
            return true;
        return false;
    }

    timeIsLessThanOrEqual(time1, time2) {
        console.log(time1);
        console.log(time2);
        let time1hour = time1.split(':')[0];
        let time1minutes = time1.split(':')[1];
        let time2hour = time2.split(':')[0];
        let time2minutes = time2.split(':')[1];

        let date1 = new Date();
        date1.setHours(time1hour,time1minutes);
        let date2 = new Date();
        date2.setHours(time2hour, time2minutes);

        if(date1 <= date2)
            return true;
        return false;
    }

}
