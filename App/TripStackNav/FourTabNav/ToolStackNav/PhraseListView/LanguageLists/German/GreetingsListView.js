
import React, {Component} from "react";
import {ScrollView, Text, View} from 'react-native';
import styles from "../../../../../../../assets/styles/ChooseCityPlannerStyles";
import LabelRectangle from "../../LabelRectangle";
import FormLabel from "react-native-elements/src/form/FormLabel";

export default class GreetingsListViewGerman extends React.Component {
    static navigationOptions = {
        title: 'Greetings'
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <FormLabel>German Basics</FormLabel>
                <ScrollView
                    showsVerticalScrollIndicator={true} bounces={false} style={styles.container}>
                    <View style={styles.buttonsContainer}>
                        <LabelRectangle style={styles.componentButton} text='Hello' />
                        <LabelRectangle style={styles.componentButton} text='Guten tag' />
                        <LabelRectangle style={styles.componentButton} text='Goodbye' />
                        <LabelRectangle style={styles.componentButton} text='Auf wiedersehen' />
                        <LabelRectangle style={styles.componentButton} text='Thank you' />
                        <LabelRectangle style={styles.componentButton} text='Danke' />
                        <LabelRectangle style={styles.componentButton} text='Sorry' />
                        <LabelRectangle style={styles.componentButton} text='Es tut mir leid' />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
