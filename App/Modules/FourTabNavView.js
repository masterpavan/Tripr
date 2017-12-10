import React from "react";
import {View} from 'react-native';
import {FourTabNav} from "./FourTabNavConfig";
import CityPackageDownloadBar from "./TripManagement/Components/CityPackageDownloadBar";


export default class FourTabNavView extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <CityPackageDownloadBar
                    cityName = {this.props.navigation.state.params.cityName}
                    navigation = {this.props.navigation}
                />
                <FourTabNav navigation={this.props.navigation}/>
            </View>
        )
    }
}
FourTabNavView.router = FourTabNav.router;