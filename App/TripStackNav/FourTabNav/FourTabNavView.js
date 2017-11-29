import React, {Component} from "react";
import {View} from 'react-native';
import {FourTabNav} from "./FourTabNavConfig";
import CityPackageDownloadBar from "../../../assets/elements/CityPackageDownloadBar";


export default class FourTabNavView extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <CityPackageDownloadBar name={this.props.navigation.state.params.cityName}/>
                <FourTabNav navigation={this.props.navigation}/>
            </View>
        )
    }
}
FourTabNavView.router = FourTabNav.router;