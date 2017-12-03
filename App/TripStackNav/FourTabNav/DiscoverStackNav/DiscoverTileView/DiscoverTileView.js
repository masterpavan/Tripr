import { SearchBar } from 'react-native-elements'
import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ButtonSquare from "../../../../../assets/elements/ButtonSquare";
import styles from "../../../../../assets/styles/ChooseCityPlannerStyles";
import NetIcon from "../../../../../assets/elements/NetIcon";
import Metrics from "../../../../../assets/styles/Themes/Metrics";

export default class DiscoverTileView extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `Discover ${navigation.state.params.cityName}`,
        tabBarIcon: <Image source={require('../../../../../assets/images/discover_icon.png')}
                           style={{
                               height: 30,
                               width: 30,
                               resizeMode: 'contain'
                           }} />,
        tabBarLabel: "Experience",
        headerTitle: `Experience ${navigation.state.params.cityName}`.replace(/_/g,' ').toUpperCase(),
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
        console.log("Discover Props are", props);
    }

    render() {
        return (
            <View>
                <SearchBar
                    lightTheme
                    inputStyle={{
                        backgroundColor:"#ffffff"}}
                    containerStyle={{backgroundColor:'transparent',borderTopColor:'transparent',borderBottomColor:'transparent',marginHorizontal:10,marginVertical:10}}
                    placeholder='Type Here...' />
                <View>
                    <View style={styles.buttonsContainer}>
                        <ButtonSquare
                            style={styles.componentButton}
                            onPress={() => this.props.navigation.navigate('POIListView', {cityName: this.props.navigation.state.params.cityName})}
                            image = {require('../../../../../assets/images/eatSquare.png')}
                            //text = {'Eat'}
                        />
                        <ButtonSquare
                            style={styles.componentButton}
                            onPress={() => this.props.navigation.navigate('POIListView', {cityName: this.props.navigation.state.params.cityName})}
                            image = {require('../../../../../assets/images/drinkSquare.png')}
                            //text = {'Drink'}
                        />
                        <ButtonSquare
                            style={styles.componentButton}
                            onPress={() => this.props.navigation.navigate('POIListView', {cityName: this.props.navigation.state.params.cityName})}
                            image = {require('../../../../../assets/images/seeSquare.png')}
                            //text = {'See'}
                        />
                        <ButtonSquare
                            style={styles.componentButton}
                            onPress={() => this.props.navigation.navigate('POIListView', {cityName: this.props.navigation.state.params.cityName})}
                            image = {require('../../../../../assets/images/shopSquare.png')}
                            //text = {'Shop'}
                        />
                    </View>
                </View>
            </View>
        )
    }
}