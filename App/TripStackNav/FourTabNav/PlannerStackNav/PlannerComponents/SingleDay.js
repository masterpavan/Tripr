import React, {Componenent} from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {Agenda} from 'react-native-calendars';
import {eventController} from "../PlannerStackNavConfig";
import styles from "../PlannerStyleSheet";

export default class SingleDayView extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        //title: `Planner for ${navigation.state.params.cityName}`,

        tabBarIcon: <Image source={require('../../../../../assets/images/calendar_icon.png')}
                           style={{
                               height: 30,
                               width: 30,
                               resizeMode: 'contain'
                           }} />,
        tabBarLabel: "Planner"

    });

    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
        this.addEvent.bind(this);
        this.refresh.bind(this);
        this.deleteEvent.bind(this);
    }

    render() {
        return (
            <View style={styles.singleDayView}>
                <Agenda
                    items={this.state.items}
                    loadItemsForMonth={this.loadItems.bind(this)}
                    selected={this.props.navigation.state.params.day}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    // markingType={'period'}
                    // markedDates={{
                    //    '2017-05-08': {textColor: '#666'},
                    //    '2017-05-09': {textColor: '#666'},
                    //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
                    //    '2017-05-21': {startingDay: true, color: 'blue'},
                    //    '2017-05-22': {endingDay: true, color: 'gray'},
                    //    '2017-05-24': {startingDay: true, color: 'gray'},
                    //    '2017-05-25': {color: 'gray'},
                    //    '2017-05-26': {endingDay: true, color: 'gray'}}}
                    // monthFormat={'yyyy'}
                    // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
                    //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
                />
                <View style={styles.addEventView}>
                    <Button
                        buttonStyle={styles.addEventButtonStyle}
                        textStyle={styles.addEventTextStyle}
                        title='+'
                        onPress={() => {
                            //this.setState({screen: "addTrip"})
                            this.props.navigation.navigate('AddEventView', {
                                refresh: this.refresh.bind(this),
                                day: this.timeToString(this.props.navigation.state.params.day),
                                cityName: this.props.navigation.state.params.cityName,
                                currentTripID: this.props.navigation.state.params.currentTripID
                            });
                        }}
                    >Hi</Button>
                </View>
            </View>
        );
    }

    refresh() {
        this.loadItems(this.props.navigation.state.params.day);
        this.props.navigation.state.params.refresh();
    }

    addEvent(startTime, endTime, name, height) {
        const strTime = '2017-11-22';
        this.state.items[strTime].push({
            startTime: startTime,
            endTime: endTime,
            name: name,
            height:height
        });
    }

    // load all items for the day from database
    async loadItems(day) {
        console.log(this.props.navigation.state.params.currentTripID);
        console.log(this.props.navigation.state.params.cityName);
        const strTime = this.timeToString(this.props.navigation.state.params.day);
        this.state.items[strTime] = [];
        this.setState(this.state);
        let events = await eventController.getEvents(this.props.navigation.state.params.currentTripID,this.props.navigation.state.params.cityName,strTime);
        console.log(events);
        events.map((event) => {
            console.log(event["end"]);
            this.state.items[strTime].push({
                name: event["name"],
                start: event["start"],
                end: event["end"],
                address: event["address"],
                id: event["id"]
            });
        });
        this.setState(this.state);
    }

    renderItem(item) {
        return (
            <View style={[styles.item, {height: 75}]}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <View style={{flex:1}}>
                        <Text>{item.start} - {item.end}</Text>
                        <Text>{item.name}</Text>
                        <Text>at {item.address}</Text>
                    </View>
                    <Button buttonStyle={styles.buttonStyle}
                            textStyle = {styles.textStyle}
                            title="Edit"
                            onPress={() => {
                                this.props.navigation.navigate('EditEventView', {
                                    refresh: this.refresh.bind(this),
                                    day: this.timeToString(this.props.navigation.state.params.day),
                                    cityName: this.props.navigation.state.params.cityName,
                                    currentTripID: this.props.navigation.state.params.currentTripID,
                                    name: item.name,
                                    start: item.start,
                                    end: item.end,
                                    address: item.address,
                                    id: item.id
                                })
                            }}
                    >
                        hi
                    </Button>
                    <Button buttonStyle={styles.buttonStyle}
                            textStyle = {styles.textStyle}
                            title="X"
                            onPress={() =>{this.deleteEvent(item.id);}}
                    >
                        hi
                    </Button>
                </View>
            </View>
        );
    }

    async deleteEvent(id) {
        let navigate = this.props.navigation.state.params;
        await eventController.deleteEvent(navigate.currentTripID, navigate.cityName,this.timeToString(navigate.day), id);
        this.refresh();
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>You don't have any events planned for this day!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}
