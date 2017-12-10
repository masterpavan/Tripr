
import React, {Component} from "react";
import {Image, ScrollView, Text, View} from 'react-native';
import ButtonSquare from "./ButtonSquare";
import styles from "../../../../../assets/styles/ChooseCityPlannerStyles";
import ButtonRectangleShort from "./ButtonRectangleShort";
import Metrics from "../../../../../assets/styles/Themes/Metrics";

export default class ToolTileView extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `Tools`,
        tabBarIcon: <Image source={require('../../../../../assets/images/tools_icon.png')}
                           style={{
                               height: 30,
                               width: 30,
                               resizeMode: 'contain'
                           }} />,
        tabBarLabel: "Tools",
        headerTitle: `Tools`.toUpperCase(),
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
    render() {

        return (
            <View style={styles.mainContainer}>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
                    <View style={styles.buttonsContainer}>
                       {/* <ButtonRectangleShort style={styles.componentButton} text='TIME PLACEHOLDER' />*/}
                        <ButtonSquare onPress={() => this.props.navigation.navigate('ConversionListView')} style={styles.componentButton} text='CONVERTER' />
                        {/*<ButtonSquare onPress={() => this.props.navigation.navigate('PhraseStackNav')} style={styles.componentButton} text='PHRASEBOOK' />
                        <ButtonRectangleShort style={styles.componentButton} text='WEATHER PLACEHOLDER' />*/}
                    </View>
                </ScrollView>
            </View>
        )
    }
}