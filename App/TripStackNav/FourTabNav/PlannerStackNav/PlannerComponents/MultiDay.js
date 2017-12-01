
import React, {Component} from "react";
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  View, 
  Button,
  Dimensions
} from 'react-native';
import {Calendar} from 'react-native-calendars'

export default class MultiDayView extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `Planner for ${navigation.state.params.cityName}`,

        tabBarIcon: <Image source={require('../../../../../assets/images/calendar_icon.png')}
                           style={{
                               height: 20,
                               width: 20,
                               resizeMode: 'contain'
                           }} />

    });

    constructor(props) {
      super(props);
      this.state = {};
      this.onDayPress = this.onDayPress.bind(this);
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <ScrollView style={styles.container}>
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              markedDates={{[this.state.selected]: {selected: true}}}
            />
          </ScrollView>
        </View>
      );
    }

    onDayPress = (day) => {
      this.props.navigation.navigate('SingleDayView', {
          day: day.dateString,
          currentTripID: this.props.navigation.state.params.currentTripID,
          cityName: this.props.navigation.state.params.cityName
      });
    };
}

const styles = StyleSheet.create({
  calendar: {
    flex: 1,
    borderTopWidth: 1,
    paddingTop: 5,
    height: Dimensions.get('window').height,
    //borderBottomWidth: 1,
    borderColor: '#eee',
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: '#eee'
  }
});