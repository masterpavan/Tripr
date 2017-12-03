import firebase from 'react-native-firebase';
import React from "react";
import { NetInfo, AsyncStorage } from 'react-native';



export default class TriprStore {

    config = {
        clientId: "23212783478-8qna5351msmhbisp5odv5l3rkglkpkin.apps.googleusercontent.com",
        appId: "1:23212783478:android:a0b4895d1eb23feb",
        apiKey: "AIzaSyBuqVh8w8svMkjTqg8Q-qFkd9igN1TxmeI",
        databaseURL: "https://tripr-8ad02.firebaseio.com",
        storageBucket: "tripr-8ad02.appspot.com",
        messagingBucket: "tripr-8ad02",
        messagingSenderId: "23212783478",
        projectId: "tripr-8ad02",

        persistence: true,
    };

    static async readCityPackageFromFirebase(city) {

        const isConnected = NetInfo.isConnected.fetch();

        if (isConnected) {

            let database = firebase.database();
            let coordinateArray = [];
            let POIArray = [];

            let cityTable = await database.ref("POI_S_Table").child(city).orderByChild('id').once('value');

            cityTable.forEach(function (row) {
                let rowVal = row.val();
                if(rowVal.name) {
                    POIArray.push(rowVal);
                } else {
                    coordinateArray.push(rowVal)
                }
            });

            /*delete any duplicates*/
            let hash = {};
            let unique = [];

            for (let i = 0; i < POIArray.length; i++) {
                if (!hash[POIArray[i].id]) {
                    unique.push(POIArray[i]);
                    hash[POIArray[i].id] = i;
                }
            }

            POIArray = unique;

            return {POIList: POIArray, coordinates: coordinateArray.reverse()};
        }
        return {POIList: [], coordinates: [0,0]}
    }

    /*
        Once you have list, use these to sort and filter
    */
    static sortByPopularity(POIlist) {
        let arr = POIlist;
        arr.sort(function(a,b) {
            return b.review_count - a.review_count;
        })
        return arr;
    }

    static sortByRating(POIlist) {
        let arr = POIlist;
        arr.sort(function(a,b) {
            return b.rating - a.rating;
        })
        return arr;
    }

    static filterByCategory(POIlist, category) {
        let arr = POIlist;
        let arrCat = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].appCat === category) {
                arrCat.push(arr[i]);
            }
        }

        return arrCat;
    }

    static filterByRating(POIlist, minRating) {
        let arr = POIlist;
        let arrRat = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].rating >= minRating) {
                arrRat.push(arr[i]);
            }
        }

        return arrRat;
    }

    static startingWith(POIlist, startStr) {
        console.log('(INFO) [TriprStore.startingWith] list to change is: ', POIlist);
        console.log('(INFO) [TriprStore.startingWith] string to use is: ', startStr);

        let names = [];
        for (let i = 0; i < POIlist.length; i++) {
            if (POIlist[i].name && POIlist[i].name.substring(0, startStr.length) === startStr) {
                names.push(POIlist[i])
            }
        }
        return names;
    }
    /*End of list functions*/


    /*TripFunctions*/
    static initializeTrips() {
        AsyncStorage.setItem("currentTrips", JSON.stringify({})).done();
    }

    static addTripToLocalStorage(tripObject) {
        let currentTrips = {};
        currentTrips[tripObject.id] = tripObject
        AsyncStorage.mergeItem("currentTrips", JSON.stringify(currentTrips)).done();
    }

    static getAllTripsFromLocalStorage(callback) {
        AsyncStorage.getItem("currentTrips").then((currentTrips) => {
            callback(currentTrips);
        })
    }

    static deleteTripFromLocalStorage(tripID, callback) {
        AsyncStorage.getItem("currentTrips").then((currentTrips) => {
            delete JSON.parse(currentTrips)[tripID];
            AsyncStorage.setItem("currentTrips", JSON.stringify(currentTrips)).done();
            if(callback) callback();
        })

    }

    static updateTripInLocalStorage(tripID, tripObject, callback) {
        AsyncStorage.getItem("currentTrips").then((currentTrips) => {
            currentTrips = JSON.parse(currentTrips);
            currentTrips[tripID] = tripObject;
            AsyncStorage.setItem("currentTrips", JSON.stringify(currentTrips)).done();
            callback(currentTrips);
        });
    }

    /*POI LIST METHODS*/
    static async initializeCurrentCityPackage(cityID) {
        let cityPackage = await AsyncStorage.getItem(cityID);
        console.log('(INFO) [TriprStore.initializeCurrentCityPackage] city package in the users local storage is: ', cityPackage);

        if (!cityPackage) {
            console.log('(INFO) [TriprStore.initializeCurrentCityPackage] local city package doesnt exist. fetching from the database.');
            let cityPackage = await this.readCityPackageFromFirebase(cityID);
            console.log('(INFO) [TriprStore.initializeCurrentCityPackage] we made a new cityPackage:', cityPackage);
            console.log("(INFO) [TriprStore.initializeCurrentCityPackage] cityPackage being stored in Async @ currentCityPackage is: ", cityPackage);
            AsyncStorage.setItem("currentCityPackage", JSON.stringify(cityPackage)).done();
        } else {
            console.log('(INFO) [TriprStore.initializeCurrentCityPackage] local city package exists.');
            console.log("(INFO) [TriprStore.initializeCurrentCityPackage] cityPackage being stored in Async @ currentCityPackage is: ", cityPackage);
            AsyncStorage.setItem("currentCityPackage", cityPackage).done();
        }

        return {isLoading:false}
    } // AFTER THIS METHOD, async @ currentCityPackage exists and = the city the user is looking at

    static async getPOIList() {
        console.log("(INFO) [TriprStore.getPOIList] about to get POI list from Async");

        let currentCityPackage = await AsyncStorage.getItem("currentCityPackage");
        console.log("(INFO) [TriprStore.getPOIList] package recieved is: ", JSON.parse(currentCityPackage));
        console.log("(INFO) [TriprStore.getPOIList] returning: ", JSON.parse(currentCityPackage).POIList);

        return JSON.parse(currentCityPackage).POIList;
    }

    static async getCityCoord() {
        console.log("(INFO) [TriprStore.getCityCoord] about to get city coordinates from Async");

        let currentCityPackage = await AsyncStorage.getItem("currentCityPackage");
        console.log("(INFO) [TriprStore.getCityCoord] package recieved is: ", JSON.parse(currentCityPackage));
        console.log("(INFO) [TriprStore.getCityCoord] returning: ", JSON.parse(currentCityPackage).coordinates);

        return JSON.parse(currentCityPackage).coordinates
        // pull coordinates from async storage @ currentCityPackage.coordinates
    }

    static async getSinglePOI(POIID) {
        let POIList = await AsyncStorage.getItem("currentCityPackage").POIList;
        for (let i = 0; i < POIList.length; i++) {
            if (POIList[i].id === POIID)
                return POIList[i];
        }
        // pull from async entire POI list (use getPOIlist) and iterate through to find specified POI
    }

    static async saveCityPackage(cityID) {
        let currentCityPackage = await AsyncStorage.getItem("currentCityPackage");
        AsyncStorage.setItem(cityID, JSON.stringify(currentCityPackage)).done();
        // pull entire city package from async @ currentCityPackage
        // store back in async @ cityID
    }
}