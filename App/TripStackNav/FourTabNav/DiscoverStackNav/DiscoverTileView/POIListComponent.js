import React from "react";
import {FlatList, View, StyleSheet} from "react-native";
import ButtonListItem from "../../../../../assets/elements/ButtonListItem";
import styles from "../../../../../assets/styles/ChooseCityPlannerStyles";
import Metrics from "../../../../../assets/styles/Themes/Metrics";

const stylesHere = StyleSheet.create({
    poiListViewSpacer: {
        height:Metrics.screenHeight/200
    },

    poiListContainer: {
        paddingBottom:Metrics.screenHeight/3
    }


});

export default class POIListComponent extends React.Component {


    /*
    * POI List Component
    * purpose:
    *   to display a list of POI's in a scrollable list which lead to specific POI details
    * props:
    *   list: the list of POI's to display
    *   navigate: function that allows this component to navigate to another screen.
    *   setParentState: function that allows this component to update the view of the parent.
    *     - if the user clicks the back button we want to set the parent's
    *       'screen' state to 'tiles' and 'currentCategory' state to 'null'
    * state:
    *   none. doesn't need to keep track of anything.
    * */
    constructor(props){
        super(props)
        console.log("(INFO) [POIListComponent.constructor] props are: ", this.props);


    }

    render() {

        let mappedList = this.props.list.map( function(POI) {
            return {key: POI.name, POI: POI};
        });
        console.log("(INFO) [POIListComponent.render] we are about to render this list: ", mappedList);
        return (
            <View>
                <FlatList
                    data={mappedList}
                    contentContainerStyle={stylesHere.poiListContainer}
                    removeClippedSubviews={true}
                    legacyImplementation={true}
                    renderItem={({item}) => {
                        if(item.key) {
                            //console.log("(INFO) [POIListComponent.render] rendering list item: ", item.key);
                            return (<ButtonListItem
                                onPress={() => this.props.navigate('POIDetailView', {currentPOI:item.POI})}
                                style={styles.componentButton}
                                /*image={require('./../../../../../assets/images/rectangles/rectangle11.png')}*/
                                /*text={this.state.currentTrips[element].name}*/
                                text={item.key}
                            />)
                        } else return null
                    }}
                />
                <View style={stylesHere.poiListViewSpacer}/>
            </View>

        )
    }

}