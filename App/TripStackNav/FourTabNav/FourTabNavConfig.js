
import {TabNavigator} from "react-navigation";

import {DiscoverStackNav} from "./DiscoverStackNav/DiscoverStackNavConfig";
import MultiDayView from "./PlannerStackNav/MulitDayView/MultiDayView";
import MapView from "./MapStackNav/MapView/MapView";
import ToolTileView from "./ToolStackNav/ToolTileView/ToolTileView";

const routeConfig = {
    DiscoverStackNav: { screen: DiscoverStackNav},
    //TODO: CHANGE MultiDayView TO PlannerStackNav
    MultiDayView: { screen: MultiDayView },
    //TODO: CHANGE MapView TO MapStackView
    MapView: { screen: MapView },
    //TODO: CHANGE ToolTileView TO ToolStackNav
    ToolTileView: { screen: ToolTileView }
};

const tabNavConfig = {

    swipeEnabled:true,
    animationEnabled:true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeBackgroundColor: '#2a5596',
        labelStyle: {
            fontSize: 16,
            color: '#eeeeee'
        },
        style: {
            backgroundColor:'#4378ca'
        },
    },
}

export const FourTabNav = TabNavigator(routeConfig, tabNavConfig);
