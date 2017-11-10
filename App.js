/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
/*import {
    Image,
    Platform,
    StyleSheet,
    Text, TouchableOpacity,
    View,
    AppRegistry, Button, FlatList
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';*/
import {TripStackNav} from "./App/TripStackNav/TripStackNavConfig";

/*class TripList extends React.Component {
    static navigationOptions = {
        title: 'TripList'
    };
    render() {
        return (
            <View>
              <Text>Trip To Italy</Text>
              <Button onPress={() => this.props.navigation.navigate('CityList')} title="View Cities" />
              <Text>Trip to England</Text>
              <Text>Trip to America</Text>
              <Text>Trip to Russia</Text>
            </View>
        )
    }
}

class CityList extends React.Component {
    static navigationOptions = {
        title: 'Trip Details'
    };
    render() {
        return (
            <View>
              <Text>Rome</Text>
              <Button onPress={() => this.props.navigation.navigate('FourTabsScreen')} title="Discover Rome" />
              <Text>Venice</Text>
              <Text>Another city in Italy</Text>
              <Text>Florence</Text>
            </View>
        )
    }
}

class DiscoverCategories extends React.Component {
    static navigationOptions = {
        title: 'Discover'
    };
    render() {
        return (
            <View>
              <Text>Search Bar Goes here</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('POIList')}>
                <Image
                    style={{height:100, width: 100}}
                    source={require('./ignite_logo.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('POIList')}>
                <Image
                    style={{height:100, width: 100}}
                    source={require('./ignite_logo.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('POIList')}>
                <Image
                    style={{height:100, width: 100}}
                    source={require('./ignite_logo.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('POIList')}>
                <Image
                    style={{height:100, width: 100}}
                    source={require('./ignite_logo.png')}
                />
              </TouchableOpacity>
            </View>
        )
    }
}

class POIList extends React.Component {
    render() {
        return (
            <FlatList
                data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]}
                renderItem={({item}) => <TouchableOpacity onPress={() => this.props.navigation.navigate('POIDetails')}><View style={{ height: 50, backgroundColor: '#61aa75'}}><Text>{item.key}</Text></View></TouchableOpacity>}
            />
        )
    }
}

class POIDetails extends React.Component {
    render() {
        return (
            <View>
              <Text>You Made it to a POI Details Page!</Text>
              <Image
                  style={{height:500, width:500}}
                  source={require('./ignite_logo.png')}
              />
            </View>

        )
    }

}

class Planner extends React.Component {
    render() {
        return <Text>Plan shit here</Text>
    }
}

class Map extends React.Component {
    render() {
        return <Text>This should be a map eventually</Text>
    }
}

class Tools extends React.Component {
    render() {
        return <Text>pick a tool any tool</Text>
    }
}

const DiscoverNavigator = StackNavigator({
        DiscoverCategories: {screen: DiscoverCategories},
        POIList: {screen: POIList},
        POIDetails: {screen: POIDetails}
    },  {
        // Default config for all screens
        headerMode: 'none',
        initialRouteName: 'DiscoverCategories',
        navigationOptions: {
        }
    }
);

const FourTabsNavigator = TabNavigator({
    Discover: { screen: DiscoverNavigator },
    Planner: { screen: Planner },
    Map: { screen: Map },
    Tools: { screen: Tools }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        labelStyle: {
            fontSize: 16,
        },
        style: {
            backgroundColor: '#3f8185',
        },
    },
});


// Manifest of possible screens
const TriprStackNavigator = StackNavigator({
    TripList: {screen: TripList},
    CityList: {screen: CityList},
    FourTabsScreen: {
        screen: FourTabsNavigator,
        navigationOptions: {
            title: 'City Name'
        }
    }
}, {
    initialRouteName: 'TripList',
    navigationOptions: {
    }
});*/

export default TripStackNav;
//AppRegistry.registerComponent('TriprStackNavigator', () => TriprStackNavigator);

/*
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
          <Text>Hello</Text>
        <TriprStackNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
