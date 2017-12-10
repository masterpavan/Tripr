'use strict'
import {StackNavigator} from 'react-navigation';

import POIDetailView from "./POIDetailView";
import ExperienceView from "./ExperienceView";

const routeConfig = {
    ExperienceView: {screen: ExperienceView},
    POIDetailView: {screen: POIDetailView}
};

const stackNavConfig = {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'ExperienceView',
    navigationOptions:{

    },
};

export const ExperienceStackNav = StackNavigator(routeConfig, stackNavConfig);