
import React from "react";
import {Image, View} from 'react-native';
import {Calendar} from 'react-native-calendars'
import {triprTripController} from "../../TripManagement/TripStackNavConfig";
import {eventController} from "../PlannerStackNavConfig";
import styles from "../PlannerStyleSheet";
import Metrics from "../../../Misc/Styles/Themes/Metrics";

export default class MultiDayView extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `Planner`,
        tabBarIcon: <Image source={require('../../../../assets/images/calendar_icon.png')}
                           style={{
                               height: 30,
                               width: 30,
                               resizeMode: 'contain'
                           }} />,
        tabBarLabel: "Planner",
        headerTitle: `Planner`.toUpperCase(),
        headerStyle: {
        },
        headerTitleStyle: {
            color:'#494949',
            alignSelf:'center',
            fontFamily: 'LeagueSpartan',
            fontSize:Metrics.h2,
            fontWeight:'200'
        },
        headerRight:(<View/>)
    });

    constructor(props) {
      super(props);
      this.state = {};
      this.onDayPress = this.onDayPress.bind(this);
      this.startDate = triprTripController.getTripObject(this.props.navigation.state.params.currentTripID).dateRange[0];
      this.endDate = triprTripController.getTripObject(this.props.navigation.state.params.currentTripID).dateRange[1];
      let start = this.startDate.split('-');
      let end = this.endDate.split('-');
      this.startDate = start[2] + "-" +  start[0] + "-" + start[1];
      this.endDate = end[2] + "-" + end[0] + "-" + end[1];
      this.updateMarked.bind(this);
    }

    componentDidMount() {
        this.refresh().done();

    }

    render() {
        return (
        <View style={styles.calenderView}>
            <Calendar
                 current={this.startDate}
                minDate={this.startDate}
                maxDate = {this.endDate}
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              markedDates={this.markedDates}
            />
        </View>
      );
    }

    async refresh() {
        await this.updateMarked();
        this.setState(this.state);
    }

    async updateMarked() {
        let currDate = this.startDate;
        console.log(this.endDate);
        this.markedDates = {};
        let value = {};
        while(currDate !== this.endDate) {
            value = await eventController.getEvents(this.props.navigation.state.params.currentTripID, this.props.navigation.state.params.cityName, currDate);
            console.log(value.length);
            if (value.length != 0) {
                this.markedDates[currDate] = {marked: true};
            }
            else {
                this.markedDates[currDate] = {marked: false};
            }
            let split = currDate.split("-");
            split[2] = parseInt(split[2]) + 1;
            if(split[2] === 32) {
                split[2] = 1;
                split[1] = parseInt(split[1]) + 1;
                if(split[1] === 13) {
                    split[1] = 1;
                    split[0] = parseInt(split[0]) + 1;
                }
            }
            if((split[2].toString().length == 1))
                split[2] = "0" + split[2];
            if((split[1].toString().length == 1))
                split[1] = "0" + split[1];
            currDate = split[0] + "-" + split[1] + "-" + split[2];
            console.log(currDate);
        }
        value = await eventController.getEvents(this.props.navigation.state.params.currentTripID, this.props.navigation.state.params.cityName, currDate);
        if (value.length != 0) {
            this.markedDates[currDate] = {marked: true};
        }
        else {
            this.markedDates[currDate] = {marked: false};
        }
    }

    onDayPress = (day) => {
      this.props.navigation.navigate('SingleDayView', {
          day: day.dateString,
          currentTripID: this.props.navigation.state.params.currentTripID,
          cityName: this.props.navigation.state.params.cityName,
          refresh: this.refresh.bind(this)
      });
    };
}
