import React from "react";
import {View} from 'react-native';
import ButtonSquare from "../../../../../assets/elements/ButtonSquare";
import styles from "../../../../../assets/styles/ChooseCityPlannerStyles";

export default class POITilesComponent extends React.Component {

    /*
    * POI Tiles Component
    * purpose:
    *   to switch the view to the poi list while filtering the category.
    * props:
    *   setParentState: function that allows this component to update the view of the parent.
    *     - we want to set the 'screen' and 'currentCategory' state of the parent.
    * state:
    *   none. doesn't need to keep track of anything.
    * */
    constructor(props) {
        super(props);
        console.log("(INFO) [POITilesComponent.constructor] props are: ", this.props);

    }

    render()
    {
        return (
            <View style={styles.buttonsContainer}>
                <ButtonSquare
                    style={styles.componentButton}
                    onPress={() => this.props.generateListFromTiles('restaurants')}
                    image={require('../../../../../assets/images/eatSquare.png')}
                    //text = {'Eat'}
                />
                <ButtonSquare
                    style={styles.componentButton}
                    onPress={() => this.props.generateListFromTiles('bars')}
                    image={require('../../../../../assets/images/drinkSquare.png')}
                    //text = {'Drink'}
                />
                <ButtonSquare
                    style={styles.componentButton}
                    onPress={() => this.props.generateListFromTiles('landmarks')}
                    image={require('../../../../../assets/images/seeSquare.png')}
                    //text = {'See'}
                />
                <ButtonSquare
                    style={styles.componentButton}
                    onPress={() => this.props.generateListFromTiles('shopping')}
                    image={require('../../../../../assets/images/shopSquare.png')}
                    //text = {'Shop'}
                />
            </View>
        )
    }
}