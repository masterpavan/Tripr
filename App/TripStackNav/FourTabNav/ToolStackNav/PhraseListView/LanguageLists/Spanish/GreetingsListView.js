
import React, {Component} from "react";
import {ScrollView, Text, View} from 'react-native';
import styles from "../../../../../../../assets/styles/ChooseCityPlannerStyles";
import LabelRectangle from "../../LabelRectangle";
import FormLabel from "react-native-elements/src/form/FormLabel";
import BlankLabelRectangle from "../../BlankLabelRectangle";

export default class GreetingsListViewSpanish extends React.Component {
    static navigationOptions = {
        title: 'Greetings'
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                    <ScrollView showsVerticalScrollIndicator={true} bounces={false} style={styles.container}>
                    <View style={styles.buttonsContainer}>
                        <BlankLabelRectangle style={styles.componentButton} text='English' />
                        <BlankLabelRectangle style={styles.componentButton} text='Spanish' />

                        <LabelRectangle style={styles.componentButton} text='Hello' />
                        <LabelRectangle style={styles.componentButton} text='Hola' />

                        <LabelRectangle style={styles.componentButton} text='Goodbye' />
                        <LabelRectangle style={styles.componentButton} text='Adios' />

                        <LabelRectangle style={styles.componentButton} text='Thank you' />
                        <LabelRectangle style={styles.componentButton} text='Gracias' />

                        <LabelRectangle style={styles.componentButton} text='Sorry' />
                        <LabelRectangle style={styles.componentButton} text='Lo siento' />

                        <LabelRectangle style={styles.componentButton} text='Excuse me' />
                        <LabelRectangle style={styles.componentButton} text='Disculpe' />

                        <LabelRectangle style={styles.componentButton} text='Where am I?' />
                        <LabelRectangle style={styles.componentButton} text='¿Dónde estoy?' />

                        <LabelRectangle style={styles.componentButton} text='What time is it' />
                        <LabelRectangle style={styles.componentButton} text='¿Que hora es?' />

                        <LabelRectangle style={styles.componentButton} text='What is your name?' />
                        <LabelRectangle style={styles.componentButton} text='¿Cómo te llamas?' />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
