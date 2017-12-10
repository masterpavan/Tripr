
import React, {Component} from "react";
import {Image, ScrollView, Text, View} from 'react-native';
import ButtonSquare from "../../Misc/ButtonSquare";
import styles from "../../Misc/Styles/ChooseCityPlannerStyles";
import Metrics from "../../Misc/Styles/Themes/Metrics";

export default class ToolTileView extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `Tools`,
        tabBarIcon: <Image source={require('../../../assets/images/tools_icon.png')}
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
                        <ButtonSquare onPress={() => this.props.navigation.navigate('ConversionListView')} style={styles.componentButton} text='CONVERTER' />

                    </View>
                </ScrollView>
            </View>
        )
    }
}