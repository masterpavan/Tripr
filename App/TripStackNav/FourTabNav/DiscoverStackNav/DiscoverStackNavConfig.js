'use strict'
import {StackNavigator} from 'react-navigation';

import DiscoverTileView from "./DiscoverTileView/DiscoverTileView";
import POIListView from "./POIListView/POIListView";
import POIDetailView from "./POIDetailView/POIDetailView";
import ExperienceView from "./DiscoverTileView/ExperienceView";

const routeConfig = {
    DiscoverTileView: {screen: ExperienceView},
    POIListView: {screen: POIListView},
    POIDetailView: {screen: POIDetailView}
};

const stackNavConfig = {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'DiscoverTileView',
    navigationOptions:{

    },
};

export const DiscoverStackNav = StackNavigator(routeConfig, stackNavConfig);