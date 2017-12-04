
import React, {Component} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import { SearchBar } from 'react-native-elements'
import TriprStore from "../../../../../assets/services/TriprStore";
import ButtonListItem from "../../../../../assets/elements/ButtonListItem";
import styles from "../../../../../assets/styles/ChooseCityPlannerStyles";
import * as Progress from 'react-native-progress';
import NetIcon from "../../../../../assets/elements/NetIcon";
import Metrics from "../../../../../assets/styles/Themes/Metrics";

export default class POIListView extends React.PureComponent {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'POI',
        tabBarIcon: <Image source={require('../../../../../assets/images/discover_icon.png')}
                           style={{
                               height: 20,
                               width: 20,
                               resizeMode: 'center'
                           }} />,
        tabBarLabel: "Experience",
        headerTitle: `Experience`.toUpperCase(),
        headerStyle: {
        },
        headerTitleStyle: {
            color:'#494949',
            alignSelf:'center',
            fontFamily: 'LeagueSpartan',
            fontSize:Metrics.h2,
            fontWeight:'200'
        },
        headerRight:(<NetIcon/>)
    });

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            list: [{key: 'poi 1'}, {key: 'poi 2'}, {key: 'poi 3'}, {key: 'poi 4'}, {key: 'poi 5'}, {key: 'poi 6'}]
        }

    }

    componentDidMount() {
        TriprStore.readCity(`${this.props.navigation.state.params.cityName}`, function(list) {

            let updateList = list.map( function(item) {
                return {key: item.name};
            });

            console.log("the list is: ", updateList);

            this.setState({list:updateList,isLoading:false});

        }.bind(this));
        //poiList.forEach(function(e) {console.log("this element is",e)});

    };

    renderOptions() {
        if(this.state.isLoading) {
            return (<View>
                <Progress.CircleSnail
                    style={{alignSelf:'center'}}
                    color={[
                        '#F44336',
                        '#2196F3',
                        '#009688',
                    ]}/>
            </View>)
        } else {
            return (
                <FlatList
                    data={this.state.list}
                    removeClippedSubviews={true}
                    legacyImplementation={true}
                    renderItem={({item}) => {
                        if(item.key) {
                            return (<ButtonListItem
                                onPress={() => this.props.navigation.navigate('POIDetailView')}
                                style={styles.componentButton}
                                /*image={require('./../../../../../assets/images/rectangles/rectangle11.png')}*/
                                /*text={this.state.currentTrips[element].name}*/
                                text={item.key}
                            />)
                        } else return null
                    }}
                />
            )
        }
    }
    render() {
        return (
            <View>
                <SearchBar
                    lightTheme
                    inputStyle={{
                        backgroundColor:"#fff"}}
                    containerStyle={{backgroundColor:'transparent',borderTopColor:'transparent',borderBottomColor:'transparent',marginHorizontal:10,marginVertical:10}}
                    placeholder='Type Here...' />
                {this.renderOptions()}
            </View>
        )
    }
}