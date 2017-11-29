import React, {Component} from "react";
import {View, Button} from 'react-native';
import {FourTabNav} from "./FourTabNavConfig";
import CityPackageDownloadBar from "../../../assets/elements/CityPackageDownloadBar";


export default class FourTabNavView extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <CityPackageDownloadBar ref = "c" cityName = {this.props.navigation.state.params.cityName}/>
                <FourTabNav navigation={this.props.navigation}/>
            </View>
        )
    }
}
FourTabNavView.router = FourTabNav.router;