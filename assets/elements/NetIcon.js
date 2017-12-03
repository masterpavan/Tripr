import React from 'react'
import {NetInfo, View} from "react-native";
import {Icon} from "react-native-elements";
import Metrics from "../styles/Themes/Metrics";

export default class NetIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {online: true};
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            if(connectionInfo.type === 'none' || connectionInfo.type === 'unknown') {
                this.setState({online: false});
            } else {
                this.setState({online: true});
            }
        });
        NetInfo.addEventListener('connectionChange',(connectionInfo) => {
            if(connectionInfo.type === 'none' || connectionInfo.type === 'unknown') {
                this.setState({online: false});
            } else {
                this.setState({online: true});
            }
        })
    }

    render () {

        console.log("neticon thinks its ", this.state.online);
        return (
            <View style={{paddingRight:20}}>
                <Icon
                    size={Metrics.screenWidth/20}
                    name= {this.state.online ? 'wifi':'wifi-off'}
                    type='feather'
                    color={this.state.online ? '#64dd17':'#d50000'}
                />
            </View>
        )
    }
}