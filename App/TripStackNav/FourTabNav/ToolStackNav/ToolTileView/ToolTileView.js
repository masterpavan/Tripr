
import React, {Component} from "react";
import {Image, ScrollView, Text, View} from 'react-native';
import ButtonSquare from "./ButtonSquare";
import styles from "../../../../../assets/styles/ChooseCityPlannerStyles";
import ButtonRectangleShort from "./ButtonRectangleShort";

export default class ToolTileView extends React.Component {
    static navigationOptions = {
        title: 'Tools'
    };
    render() {

        return (
            <View style={styles.mainContainer}>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
                    <View style={styles.buttonsContainer}>
                        <ButtonRectangleShort style={styles.componentButton} text='TIME PLACEHOLDER' />
                        <ButtonSquare onPress={() => this.props.navigation.navigate('ConversionListView')} style={styles.componentButton} text='CONVERSION' />
                        <ButtonSquare onPress={() => this.props.navigation.navigate('PhraseStackNav')} style={styles.componentButton} text='PHRASEBOOK' />
                        <ButtonRectangleShort style={styles.componentButton} text='WEATHER PLACEHOLDER' />
                    </View>
                </ScrollView>
            </View>
        )
    }
}