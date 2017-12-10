
import TriprStore from "../../Store/TriprStore";

export default class MapController{

    constructor() {
        this.currentCity = 'London';
        this.setMapState = function(){};
    }

    setCurrentCity(cityID) {
        this.currentCity = cityID;
    }

    initSetMapStateFunc(func){
        this.setMapState = func;
    }

    getCityCoords(){
        TriprStore.getCityCoord(this.currentCity).then((coordinates)=>{
            console.log('(INFO) [MapController.getCityCoords] retrieved coords from TriprStore. They are: ', coordinates);
            console.log('(INFO) [MapController.getCityCoords] Setting Map State now.');

            this.setMapState({latitude:coordinates[0], longitude:coordinates[1]});
        });
    }
}
