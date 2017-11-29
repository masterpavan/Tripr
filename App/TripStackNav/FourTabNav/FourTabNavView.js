import React, {Component} from "react";
import {View, Button} from 'react-native';
import {FourTabNav} from "./FourTabNavConfig";
import CityPackageDownloadBar from "../../../assets/elements/CityPackageDownloadBar";
import CreateOfflineRegion from "./MapStackNav/MapView/CreateOfflineRegion";


export default class FourTabNavView extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <CityPackageDownloadBar ref = "c"/>
                <Button
                    title = "Download Florence"
                    onPress={() =>
                    {
                        this.refs.c.refs.create.createPack("Florence Test2", 11.2558, 43.7696);
                    }
                    }
                />
                <FourTabNav navigation={this.props.navigation}/>
            </View>
        )
    }
}
FourTabNavView.router = FourTabNav.router;