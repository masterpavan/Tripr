
import {StackNavigator} from "react-navigation";

import TripListView from "./TripListView";
import TripDetailView from "./TripDetailView";
import FourTabNavView from "../FourTabNavView";
import TripController from "./TripController";

const routeConfig = {
    TripListView: {screen: TripListView},
    TripDetailView: {screen: TripDetailView},
    FourTabNav: {screen: FourTabNavView}
};

const stackNavConfig = {
    initialRouteName: 'TripListView',
    navigationOptions: {
    }
};

export const TripStackNav = StackNavigator(routeConfig, stackNavConfig);

let triprTripController = new TripController();
export {triprTripController};