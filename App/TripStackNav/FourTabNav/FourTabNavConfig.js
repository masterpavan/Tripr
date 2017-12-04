
import {TabNavigator} from "react-navigation";

import {DiscoverStackNav} from "./DiscoverStackNav/DiscoverStackNavConfig";
import {PlannerStackNav} from "./PlannerStackNav/PlannerStackNavConfig";
import MapView from "./MapStackNav/MapView/MapView";
import ToolTileView from "./ToolStackNav/ToolTileView/ToolTileView";
import Metrics from "../../../assets/styles/Themes/Metrics";
import MapController from "./MapStackNav/MapController";


const routeConfig = {
    DiscoverStackNav: { screen: DiscoverStackNav},
    //TODO: CHANGE MultiDayView TO PlannerStackNav
    PlannerStackNav: { screen: PlannerStackNav},
    //TODO: CHANGE MapView TO MapStackView
    MapView: { screen: MapView},
    //TODO: CHANGE ToolTileView TO ToolStackNav
    ToolTileView: { screen: ToolTileView}
};

const tabNavConfig = {

    swipeEnabled:false,
    animationEnabled:true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: true,
        showIcon: true,
        activeBackgroundColor: '#ffffff',
        labelStyle: {
            fontSize: 10,
            color: '#000000',
            marginTop: 5,
            width: Metrics.screenWidth/4

        },
        tabStyle: {
            marginBottom: -10,
            width: Metrics.screenWidth/4,
            borderColor: '#6d6d6d'
        },
        style: {
            backgroundColor:'#ffffff'
        },
        iconStyle: {
            width: 30,
            height: 30
        }
    },
}

export const FourTabNav = TabNavigator(routeConfig, tabNavConfig);

let triprMapController = new MapController();
export {triprMapController};