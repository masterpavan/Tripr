# trip.r

trip.r is a travel companion app for Android. Too often, world travelers aren’t able to fully enjoy the trips that they go on because they are limited in connectivity to the internet. Finding places to eat, shop, or take pictures without being connected can be a problem. trip.r solves that problem. Using our app, a traveler gains access to valuable information about premier destinations around the world. The best part; it’s all available offline. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
node & npm (latest version should do)
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone and enter this repo
```
git clone https://github.com/masterpavan/Tripr.git
cd Tripr
```
Install Dependencies
```
npm install
```
Fix react-native-form-validator
```
cd node_modules/react-native-form-validator
```
in 'package.json':
change "dependencies" to match the following
```
"dependencies": {
 			"moment": "2.x.x",
 			"prop-types":"15.6.0"
 		},
```
in 'index.js':
change the import statements to match the following:
```
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultRules from './defaultRules';
import defaultMessages from './defaultMessages';
```
update dependencies
```
npm install
npm update
npm upgrade
```

## Deployment

Follow React-Native's instructions on generating a signed apk. You can find that documentation [here](https://facebook.github.io/react-native/docs/signed-apk-android.html). Once you have done that you can install the apk on your android device.

## Built With

* [React Native](https://facebook.github.io/react-native/) - The web framework used
* [Mapbox](https://github.com/mapbox/react-native-mapbox-gl) - Mapbox Maps SDK for React Native 
* [Firebase](https://github.com/invertase/react-native-firebase) - A well tested feature rich Firebase implementation for React Native
* [Yelp Fusion API](https://www.yelp.com/developers/documentation/v3) - For our POI data
* [money.js](http://openexchangerates.github.io/money.js/) - For currency conversions
* [convert-units](https://github.com/ben-ng/convert-units) - For unit conversions
* [react-native-calendars](https://github.com/wix/react-native-calendars) - For our planner module

## Versioning

For the versions available, see the [tags on this repository](https://github.com/masterpavan/Tripr/tags). 

## Authors

* **Pavan Purewal** - *Project Manager* - [github](https://github.com/masterpavan)
* **Luke Rohrer** - *Senior System Analyst* - [github](https://github.com/lukerohrerUCSD)
* **Roger Rodriguez** - *Senior System Analyst* 
* **Ryan Cajigal** - *Database Specialist* 
* **Jonathan Cervantes** - *Business Analyst* 
* **Young Huang** - *Quality Assurance Lead* 
* **Vincent Nguyen** - *Quality Assurance Lead* - [github](https://github.com/krebin)
* **Ben J Ku** - *Software Development Lead* - [github](https://github.com/bjku)
* **Eric Pinedo** - *Software Architect* - [github](https://github.com/ericpinedo)
* **Joshua Robertson** - *User Interface Specialist* - [github](https://github.com/jyrobert96)
* **Sriram Padavettan** - *Algorithm Specialist* 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## TRIP.R - EXPERIENCE LIFE
