

import React, { Component } from 'react';
import {TripStackNav} from "./App/TripStackNav/TripStackNavConfig";
import Mapbox from '@mapbox/react-native-mapbox-gl';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import {AsyncStorage} from "react-native";

//MapboxGL.offlineManager.setTileCountLimit(100000)

export default TripStackNav;

//remove this line for production - it will delete all user data on app start
//AsyncStorage.clear();