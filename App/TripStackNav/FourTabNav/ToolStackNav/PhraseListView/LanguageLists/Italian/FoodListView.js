
import React, {Component} from "react";
import {ScrollView, Text, View} from 'react-native';
import styles from "../../../../../../../assets/styles/ChooseCityPlannerStyles";
import LabelRectangle from "../../LabelRectangle";
import BlankLabelRectangle from "../../BlankLabelRectangle";

export default class FoodListViewItalian extends React.Component {
    static navigationOptions = {
        title: 'Food and Drink'
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={true} bounces={false} style={styles.container}>
                    <View style={styles.buttonsContainer}>
                        <BlankLabelRectangle style={styles.componentButton} text='English' />
                        <BlankLabelRectangle style={styles.componentButton} text='Italian' />

                        <LabelRectangle style={styles.componentButton} text='Food' />
                        <LabelRectangle style={styles.componentButton} text='Cibo' />

                        <LabelRectangle style={styles.componentButton} text='Water' />
                        <LabelRectangle style={styles.componentButton} text='Acqua' />

                        <LabelRectangle style={styles.componentButton} text='Beer' />
                        <LabelRectangle style={styles.componentButton} text='La birra' />

                        <LabelRectangle style={styles.componentButton} text='Wine' />
                        <LabelRectangle style={styles.componentButton} text='Il vino' />

                        <LabelRectangle style={styles.componentButton} text='Pasta' />
                        <LabelRectangle style={styles.componentButton} text='La pasta ' />

                        <LabelRectangle style={styles.componentButton} text='Soup' />
                        <LabelRectangle style={styles.componentButton} text='La zuppa ' />

                        <LabelRectangle style={styles.componentButton} text='Dessert' />
                        <LabelRectangle style={styles.componentButton} text='Il dolce ' />

                        <LabelRectangle style={styles.componentButton} text='Tip' />
                        <LabelRectangle style={styles.componentButton} text='La mancia'/>

                        <LabelRectangle style={styles.componentButton} text='One moment, please.' />
                        <LabelRectangle style={styles.componentButton} text='Un momento, per favore.' />

                        <LabelRectangle style={styles.componentButton} text='I do not know yet.'/>
                        <LabelRectangle style={styles.componentButton} text='Non lo so ancora'/>

                        <LabelRectangle style={styles.componentButton} text='The bill, please.' />
                        <LabelRectangle style={styles.componentButton} text='Il conto, per favore.'/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
