
import {StackNavigator} from "react-navigation";

import TripListView from "./TripListView/TripListView";
import TripDetailView from "./TripDetailView/TripDetailView";
import {FourTabNav} from "./FourTabNav/FourTabNavConfig";
import FourTabNavView from "./FourTabNav/FourTabNavView";
import TripController from "./TripController";

const routeConfig = {
    TripListView: {screen: TripListView},
    TripDetailView: {screen: TripDetailView},
    FourTabNav: {
        screen: FourTabNavView,
        navigationOptions: {
            //title: 'City Name'
        }
    }
};

const stackNavConfig = {
    initialRouteName: 'TripListView',
    navigationOptions: {
    }
};

export const TripStackNav = StackNavigator(routeConfig, stackNavConfig);

let triprTripController = new TripController();
export {triprTripController};