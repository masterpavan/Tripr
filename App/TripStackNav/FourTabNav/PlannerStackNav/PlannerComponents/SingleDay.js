import React, {Componenent} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet, Button} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class SingleDayView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
    addEvent: this.addEvent.bind(this);
    refresh: this.refresh.bind(this);
  }

  render() {
    return (
      <View style={{flex:1}}>
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
          title='Add Event'
          onPress={() => {
            //this.setState({screen: "addTrip"})
            this.props.navigation.navigate('AddEventView');//, {refresh: this.refresh}, {addEvent: this.addEvent});
          }}                
        />
      </View>
    );
  }

  refresh() {
    this.setState(this.state);
  }

  addEvent(startTime, endTime, name, height) {
    const time = day.timestamp;
    const strTime = this.timeToString(time);
    this.state.items[strTime] = [];
    this.state.items[strTime].push({
      startTime: startTime,
      endTime: endTime,
      name: name,
      height:height
    });
  }

  // load all items for the day from database
  loadItems(day) {
  	const time = day.timestamp;
  	const strTime = this.timeToString(time);
  	this.state.items[strTime] = [];
  	this.state.items[strTime].push({
  		startTime: '1PM',
  		endTime: '5PM',
  		name: 'Going to the beach',
  		height: 50
  	});
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}>
      	<Text>{item.startTime} - {item.endTime}</Text>
      	<Text>{item.name}</Text>
      </View>
    );
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
  }
});
