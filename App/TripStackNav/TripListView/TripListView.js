
import React, {Component} from "react";
import {ScrollView, Text, View, AsyncStorage, Image} from 'react-native';
import { Button, Icon } from 'react-native-elements';

import styles from '../../../assets/styles/ChooseCityPlannerStyles'
import TripListComponent from "./TripListComponent";
import AddTripComponent from "./AddTripComponent";
import {triprTripController} from "../TripStackNavConfig";
import Metrics from "../../../assets/styles/Themes/Metrics";


let TripListViewStyles = StyleSheet.create({
    titleImageContainer: {
        backgroundColor:'#eee',
        flex:1
    },
    titleImage: {
        width: Metrics.screenWidth / 2,
        resizeMode: 'contain',
        position: 'absolute',
        height: Metrics.screenHeight,
        alignSelf: 'center'
    },
    plusButton: {
        alignItems:'center',
        marginVertical:10,
        backgroundColor:'transparent'
    },
});

export default class TripListView extends React.Component {

    static navigationOptions = {
        title: 'Tripr',
        headerTitle: 'TRIPR',
        headerStyle: {
        },
        headerTitleStyle: {
            color:'#494949',
            alignSelf:'center',
            fontFamily: 'LeagueSpartan',
            fontSize:Metrics.h1,
            fontWeight:'200'
        }
    };

    constructor(props) {
        super(props);
        this.state = {screen: "list"}
        const { navigate } = this.props.navigation;
        this.navigate = navigate;
        console.log("screen width is ",Metrics.screenWidth)
    }

    componentDidMount() {
        //uncomment this line to blast all trips on app startup
        //triprTripController.emptyTrips();
        triprTripController.initializeTrips(this.refresh.bind(this));
        triprTripController.print();
    }

    refresh() { this.setState(this.state) }

    setTheState(object) { this.setState(object) }

    screenOptions() {
        if(this.state.screen === "list") {

            return (
                <View>
                    <View style={TripListViewStyles.plusButton}>
                        <Icon
                            containerStyle = {styles.cancelIcon}
                            size={Metrics.screenWidth/10}
                            type='ionicon' name= 'md-add' color='#494949'
                            onPress={() => {this.setState({screen: "addTrip"})}}
                        />

                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} bounces={true} style={styles.container}>
                        <TripListComponent
                            setParentState={this.setTheState.bind(this)}
                            navigate={this.navigate}
                            list={triprTripController.getAllTrips()}/>
                    </ScrollView>
                </View>
            )

        } else if(this.state.screen === "addTrip") {

            return (
                <AddTripComponent
                    setParentState={this.setTheState.bind(this)}
                    navigate={this.navigate}/>
            )

        }
    }

    render() {
        return (
            <View style={TripListViewStyles.titleImageContainer}>
                <Image style={TripListViewStyles.titleImage} source={require('../../../assets/images/title.png')}/>
                {this.screenOptions()}
            </View>
        )
    }
}
