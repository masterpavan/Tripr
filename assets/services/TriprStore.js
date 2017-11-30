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

    static readCity(city, callback) {

        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {

                let database = firebase.database();

                database.ref("POI_S_Table").child(city).orderByChild('id').once('value', function (snap) {

                    console.log('inside readCity promise');
                    let arr = [];

                    snap.forEach(function (childSnap) {
                        let item = childSnap.val();
                        item.key = childSnap.key;
                        //console.log("inside TriprStore. item is",item);
                        arr.push(item);
                    });

                    //let hash = ds.hashTable();
                    let hash = {};
                    let unique = [];

                    for (let i = 0; i < arr.length; i++) {
                        if (hash[arr[i].id] == null) {
                            unique.push(arr[i]);
                            hash[arr[i].id] = i;
                        }
                    }

                    arr = unique;

                    //console.log(unique);
                    let oldState = [];
                    for (let i = 0; i < arr.length; i++) {
                        oldState[i] = {
                            name: arr[i].name,
                            id: arr[i].id,
                            rating: arr[i].rating,
                            review_count: arr[i].review_count,
                            appCat: arr[i].appCat,
                            address: arr[i].address,
                            city: arr[i].city,
                            coordinates_lat: arr[i].coordinates_lat,
                            coordinates_lon: arr[i].coordinates_lon,
                            image_url: arr[i].image_url,
                            phone: arr[i].phone
                        }
                    }

                    callback(oldState);

                });
            }
        });

    }

    static readPOI(city, POI_id, oldState) {
        this.database.ref("POI_S_Table").child(city).orderByChild('id').equalTo(POI_id).once('value', function (snap) {
            let arr = [];

            snap.forEach(function (childSnap) {
                let item = childSnap.val();
                item.key = childSnap.key;

                arr.push(item);
            });

            oldState[Math.random()] = {name: arr[0].name}
        });
    }

    static getCoord(city, mapState) {
        this.database.ref("POI_S_Table").child(city).orderByChild('id').once('value', function (snap) {
            let arr = [];

            snap.forEach(function (childSnap) {
                let item = childSnap.val();
                item.key = childSnap.key;

                arr.push(item);
            });

            mapState[0] = {
                latitude: arr[0].coordinates_lat,
                longitude: arr[0].coordinates_lon
            }
        })
    }

    static getPOICoord(city, POI_id, mapState) {
        this.database.ref("POI_S_Table").child(city).orderByChild('id').once('value', function (snap) {
            let arr = [];

            snap.forEach(function (childSnap) {
                let item = childSnap.val();
                item.key = childSnap.key;

                arr.push(item);
            });

            for (let i = 0; i < arr.length; i++) {
                mapState[i].coordinates_lat = {
                    latitude: arr[i].coordinates_lat,
                    longitude: arr[i].coordinates_lon
                };
            }
        })
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

    /*static convertToNamesArray(POIlist) {
        let names = [];
        for (let i = 0; i < POIlist.length; i++) {
            names.push(POIlist[i].name);
        }
        return names;
    }*/

    static startingWith(POIlist, startStr) {
        let names = [];
        for (let i = 0; i < POIlist.length; i++) {
            if (POIlist[i].name.substring(0, startStr.length) === startStr) {
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
}