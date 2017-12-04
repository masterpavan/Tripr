
import React, {Component} from "react";
import {ScrollView, Text, View} from 'react-native';
import styles from "../../../../../../../assets/styles/ChooseCityPlannerStyles";
import LabelRectangle from "../../LabelRectangle";
import FormLabel from "react-native-elements/src/form/FormLabel";

export default class GreetingsListViewFrench extends React.Component {
    static navigationOptions = {
        title: 'Greetings'
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <FormLabel>French Basics</FormLabel>
                <ScrollView
                    showsVerticalScrollIndicator={true} bounces={false} style={styles.container}>
                    <View style={styles.buttonsContainer}>
                        <LabelRectangle style={styles.componentButton} text='Hello' />
                        <LabelRectangle style={styles.componentButton} text='Bonjour' />

                        <LabelRectangle style={styles.componentButton} text='Goodbye' />
                        <LabelRectangle style={styles.componentButton} text='Au revoir' />

                        <LabelRectangle style={styles.componentButton} text='Thank you' />
                        <LabelRectangle style={styles.componentButton} text='Merci' />

                        <LabelRectangle style={styles.componentButton} text='Sorry' />
                        <LabelRectangle style={styles.componentButton} text='Pardon' />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
