
import {StackNavigator} from "react-navigation";

import TripListView from "./TripListView/TripListView";
import TripDetailView from "./TripDetailView/TripDetailView";
import {FourTabNav} from "./FourTabNav/FourTabNavConfig";
import TripController from "./TripListView/TripController";

const routeConfig = {
    TripListView: {screen: TripListView},
    TripDetailView: {screen: TripDetailView},
    FourTabNav: {
        screen: FourTabNav,
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

let GTC = new TripController();
export {GTC};