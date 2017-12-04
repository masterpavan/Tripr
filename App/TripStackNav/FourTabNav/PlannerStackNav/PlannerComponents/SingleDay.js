import React, {Componenent} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Agenda} from 'react-native-calendars';
import {eventController} from "../PlannerStackNavConfig";

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
        addEvent: this.addEvent.bind(this);
        refresh: this.refresh.bind(this);
        deleteEvent: this.deleteEvent.bind(this);
    }

    render() {
        return (
            <View style={{flex: 1}}>
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
                <View style={{alignItems:"center"}}>
                    <Button
                        buttonStyle={{
                            width:50,
                            height:50,
                            backgroundColor:'transparent',
                        }}
                        textStyle={{
                            fontSize:40,
                            color:'#15bdd9'
                        }}
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
        this.loadItems(this.props.navigation.state.params.day)
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
        let events = await eventController.getEvents(this.props.navigation.state.params.currentTripID,this.props.navigation.state.params.cityName,strTime);
        console.log(events);
        //events.map((event) => {
        Object.keys(events).forEach((key) => {
            console.log(key);
            this.state.items[strTime].push({
                name: events[key]["name"],
                start: events[key]["start"],
                end: events[key]["end"],
                address: events[key]["address"],
                id: events[key]["id"]
            });
        });
        this.setState(this.state);
        //    });
        // });
    }

    renderItem(item) {
        return (
            <View style={[styles.item, {height: (item.end - item.start) * 50}]}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <View style={{flex:1}}>
                        <Text>{item.start} - {item.end}</Text>
                        <Text>{item.name}</Text>
                    </View>
                    <Button buttonStyle={styles.buttonStyle} textStyle = {styles.textStyle} title="Edit">hi</Button>
                    <Button buttonStyle={styles.buttonStyle} textStyle = {styles.textStyle} title="X" onPress={() =>{this.deleteEvent(item.id);}}>hi</Button>
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
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
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

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    },
    buttonStyle: {
        width:45,
        height:20,
        backgroundColor:'transparent',
    },
    textStyle:{
        fontSize:10,
        color:'#15bdd9'
    }
});
