
import {TabNavigator} from "react-navigation";

import {ExperienceStackNav} from "./Experience/ExperienceStackNavConfig";
import {PlannerStackNav} from "./Planner/PlannerStackNavConfig";
import MapView from "./Map/MapView";
import {ToolStackNav} from "./Tools/ToolStackNavConfig";
import Metrics from "../Misc/Styles/Themes/Metrics";
import MapController from "./Map/MapController";


const routeConfig = {
    DiscoverStackNav: { screen: ExperienceStackNav},
    PlannerStackNav: { screen: PlannerStackNav},
    MapView: { screen: MapView},
    ToolStackNav: { screen: ToolStackNav}
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