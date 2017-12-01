import React from 'react';
import {AsyncStorage} from 'react-native';

export default class EventController {
    /*events[tripId][cityName][date] = {
     *                                      {name:%%%, start:%%%, end:%%%, address:%%%, id:%%%},
     *                                      {name:%%%, start:%%%, end:%%%, address:%%%, id:%%%}
     *                                   }
     */
    constructor() {
        this.data = 'initial';
        console.log("INITIALIZED THE EVENT CONTROLLER");
        AsyncStorage.setItem("events", JSON.stringify({})).done();
    }

    emptyEvents() {
        AsyncStorage.setItem("events", JSON.stringify({})).done();
    }

    generateID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    async addEvent(tripName, cityName, date, name, start, end, address) {
        let id = this.generateID();
        let value = await AsyncStorage.getItem("events");
        let events = JSON.parse(value);
        events[tripName][cityName][date][id] = {name: name, start: start, end: end, address: address, id: id};
        console.log(JSON.stringify(events));
        await AsyncStorage.setItem("events", JSON.stringify(events));
        /*
        await AsyncStorage.getItem("events").then((value) => {
            let events = JSON.parse(value);
            events[tripName][cityName][date][id] = {name: name, start: start, end: end, address: address, id: id};
            AsyncStorage.mergeItem("events", JSON.stringify(events)).done();
        })*/
    }

    async getEvents(tripName, cityName, date) {
        await this.initializeEvent(tripName, cityName, date);
        let value = await AsyncStorage.getItem("events");
        console.log(value);
        return JSON.parse(value)[tripName][cityName][date];

        /*await this.initializeEvent(tripName, cityName, date).then(() => {
            AsyncStorage.getItem("events").then((value) => {
                console.log("hi");
                console.log(value);
                let parsed = JSON.parse(value)[tripName][cityName][date];
                return parsed;
            });
        });*/
        /*let tripEvents = JSON.parse(events[tripName]);
        let cityEvents = JSON.parse(tripEvents[cityName]);
        return JSON.parse(cityEvents[date]);*/
        //return events[tripName][cityName][date];
    }

    editEvent(tripName, cityName, date, name, start, end, address, id) {
        let events = AsyncStorage.getItem("events");
        let tripEvents = JSON.parse(events[tripName]);
        let cityEvents = JSON.parse(tripEvents[cityName]);
        let dayEvents = JSON.parse(cityEvents[date]);
        dayEvents[id] = {name: name, start: start, end: end, address: address, id: id};
        cityEvents[date] = dayEvents;
        tripEvents[cityName] = cityEvents;
        AsyncStorage.mergeItem("events", JSON.stringify({tripName: tripEvents}));
    }

    async deleteEvent(tripName, cityName, date, id) {
        let value = await AsyncStorage.getItem("events");
        let events = JSON.parse(value);
        console.log("HIIIII" + JSON.stringify(events[tripName][cityName][date][id]));
        console.log(id);
        delete events[tripName][cityName][date][id];
        console.log("HELLOOOO" + JSON.stringify(events));
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
            events[tripName][cityName][date] = {};
        await AsyncStorage.setItem("events", JSON.stringify(events));

        /*console.log("hello");
        AsyncStorage.getItem("events").then((value) => {
            console.log(value + "hi");
            let events = JSON.parse(value);
            if (!events.hasOwnProperty(tripName))
                events[tripName] = {};
            if (!events[tripName].hasOwnProperty(cityName))
                events[tripName][cityName] = {};
            if (!events[tripName][cityName].hasOwnProperty(date))
                events[tripName][cityName][date] = {};
            console.log(JSON.stringify(events));
            return JSON.stringify(events);
        }).then((event) => {
            AsyncStorage.setItem("events", JSON.stringify(event)).done();
        }).done();*/
    }



}