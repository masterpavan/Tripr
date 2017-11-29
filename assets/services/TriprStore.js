import firebase from 'react-native-firebase';



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

        let database = firebase.database();

        database.ref("POI_S_Table").child(city).orderByChild('id').once('value', function (snap) {

            console.log('inside readCity promise');
            let arr = [];

            snap.forEach(function (childSnap) {
                var item = childSnap.val();
                item.key = childSnap.key;
                //console.log("inside TriprStore. item is",item);
                arr.push(item);
            });

            console.log(arr);
            let oldState = [];
            for (var i = 0; i < arr.length; i++) {
                oldState[i] = {name: arr[i].name}
            }

            callback(oldState);

        });
    }

    static readPOI(city, POI_id, oldState) {
        this.database.ref("POI_S_Table").child(city).orderByChild('id').equalTo(POI_id).once('value', function (snap) {
            var arr = [];

            snap.forEach(function (childSnap) {
                var item = childSnap.val();
                item.key = childSnap.key;

                arr.push(item);
            });

            oldState[Math.random()] = {name: arr[0].name}
        });
    }

    static getCoord(city, mapState) {
        this.database.ref("POI_S_Table").child(city).orderByChild('id').once('value', function (snap) {
            var arr = [];

            snap.forEach(function (childSnap) {
                var item = childSnap.val();
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
            var arr = [];

            snap.forEach(function (childSnap) {
                var item = childSnap.val();
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
}