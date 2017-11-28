import { SearchBar } from 'react-native-elements'
import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ButtonSquare from "../../../../../assets/elements/ButtonSquare";
import styles from "../../../../../assets/styles/ChooseCityPlannerStyles";

export default class DiscoverTileView extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `Discover ${navigation.state.params.cityName}`,
        tabBarIcon: <Image source={require('../../../../../assets/images/discover_icon.png')}
                           style={{
                               height: 20,
                               width: 20,
                               resizeMode: 'center'
                           }} />
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
                        backgroundColor:"#cdcdcd"}}
                    containerStyle={{backgroundColor:'transparent',borderTopColor:'transparent',borderBottomColor:'transparent',marginHorizontal:10,marginVertical:10}}
                    placeholder='Type Here...' />
                <View>
                    <View style={styles.buttonsContainer}>
                        <ButtonSquare
                            style={styles.componentButton}
                            onPress={() => this.props.navigation.navigate('POIListView')}
                            text = {'Restaurants'}
                        />
                        <ButtonSquare
                            style={styles.componentButton}

                            text = {'Bars'}
                        />
                        <ButtonSquare
                            style={styles.componentButton}

                            text = {'Sightseeing'}
                        />
                        <ButtonSquare
                            style={styles.componentButton}

                            text = {'Landmarks'}
                        />
                    </View>
                </View>
            </View>
        )
    }
}