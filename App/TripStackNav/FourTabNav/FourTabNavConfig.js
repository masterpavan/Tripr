
import {TabNavigator} from "react-navigation";

import {DiscoverStackNav} from "./DiscoverStackNav/DiscoverStackNavConfig";
import MultiDayView from "./PlannerStackNav/MulitDayView/MultiDayView";
import MapView from "./MapStackNav/MapView/MapView";
import ToolTileView from "./ToolStackNav/ToolTileView/ToolTileView";

const routeConfig = {
    DiscoverStackNav: { screen: DiscoverStackNav },
    //TODO: CHANGE MultiDayView TO PlannerStackNav
    MultiDayView: { screen: MultiDayView },
    //TODO: CHANGE MapView TO MapStackView
    MapView: { screen: MapView },
    //TODO: CHANGE ToolTileView TO ToolStackNav
    ToolTileView: { screen: ToolTileView }
};

const tabNavConfig = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        labelStyle: {
            fontSize: 16,
        },
        style: {
            backgroundColor: '#3f8185',
        },
    },
}

export const FourTabNav = TabNavigator(routeConfig, tabNavConfig);
