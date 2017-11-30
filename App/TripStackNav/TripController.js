

import {AsyncStorage} from "react-native";
import TriprStore from "../../assets/services/TriprStore";

export default class TripController {

    constructor() {
        this.data = 'initial';
        this.currentTrips = {};
        //TriprStore.TripAPI.initializeTrips()
        AsyncStorage.setItem("currentTrips", JSON.stringify({})).done();
    }

    emptyTrips() {
        this.currentTrips = {};
        //TriprStore.TripAPI.initializeTrips()
        AsyncStorage.setItem("currentTrips", JSON.stringify({})).done();
        console.log('cleared the currentTrips')

    }

    print() {
        console.log("currentTrips is now: ",this.currentTrips);
    }

    addTrip(tripObject, callback) {
        //TriprStore.TripAPI.addTripToLocalStorage(tripObject);
        let currentTrips = {};
        currentTrips[tripObject.id] = tripObject
        AsyncStorage.mergeItem("currentTrips", JSON.stringify(currentTrips)).done();

        /*TriprStore.TripAPI.getAllTripsFromLocalStorage((currentTrips)=>{
            this.currentTrips = currentTrips;
        });*/
        AsyncStorage.getItem("currentTrips").then((currentTrips) => {
            this.currentTrips = JSON.parse(currentTrips);
            this.print();
            console.log("async currentTrips is: ", currentTrips);
            if(callback) callback();
        })
    }

    deleteTrip(tripID, callback) {
        //TriprStore.TripAPI.deleteTripFromLocalStorage(tripID)
        AsyncStorage.getItem("currentTrips").then((currentTrips) => {
            delete JSON.parse(currentTrips)[tripID];
            AsyncStorage.setItem("currentTrips", JSON.stringify(currentTrips)).done();
            if(callback) callback();
        })

    }

    updateTrip(tripID, tripObject, callback) {
        //TriprStore.TripAPI.updateTripInLocalStorage(tripId, tripObject)
        AsyncStorage.getItem("currentTrips").then((currentTrips) => {
            currentTrips = JSON.parse(currentTrips);
            currentTrips[tripID] = tripObject;
            AsyncStorage.setItem("currentTrips", JSON.stringify(currentTrips)).done();
            this.currentTrips = currentTrips;
            if(callback) callback();
        })

    }

    getAllTrips() {
        console.log("getting all trips. Currently that is: ", this.currentTrips);
        return this.currentTrips;
    }

    generateID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    getTripObject(tripID) {
        return this.currentTrips[tripID];
    }

    createNewTripObject(name, startDate, endDate, cityIDs) {
        return {
            id: this.generateID(),
            name: "Trip to "+name,
            dateRange: [startDate,endDate],
            cityIDs: cityIDs
        }
    }

    createUpdatedTripObject(tripID, name, startDate, endDate, cityIDs) {
        let trip = this.getTripObject(tripID);
        trip.name = name;
        trip.dateRange[0] = startDate;
        trip.dateRange[1] = endDate;
        trip.cityIDs = cityIDs;
        return trip;
    }

    addCityToTrip(tripID, cityID, cityName, callback) {
        let trip = this.getTripObject(tripID);
        trip.cityIDs[cityID]=cityName;
        this.updateTrip(tripID, trip, callback);
    }

    removeCityFromTrip(tripID, cityID) {
        let trip = this.getTripObject(tripID);
        for(let i=0;i<trip.cityIDs.length;i++) {
            if(trip.cityIDs[i] === cityID) {
                trip.cityIDs.splice(i,1);
                break;
            }
        }
        this.updateTrip(tripID, trip);
    }

}





