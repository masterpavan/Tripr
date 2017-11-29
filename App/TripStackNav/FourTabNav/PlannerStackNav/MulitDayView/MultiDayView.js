
import React, {Component} from "react";
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  View, 
  Button
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
              this.props.navigation.navigate('AddEventView');
            }}                
          />
          </View>
        );
    }

    onDayPress = (day) => {
      this.props.navigation.navigate('SingleDayView', {day: day.dateString});
    };
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 550
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});