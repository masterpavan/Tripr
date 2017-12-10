import {StackNavigator} from "react-navigation";

import ToolTileView from "./ToolTileView";
import ConversionListView from "./ConversionListView/ConversionListView"

const toolConfig = {
    ToolTileView: {screen: ToolTileView},
    ConversionListView: {screen: ConversionListView}
};

const stackNavConfig = {
    headerMode: 'none',
    initialRouteName: 'ToolTileView',
    navigationOptions: {
    }
};

export const ToolStackNav = StackNavigator(toolConfig, stackNavConfig);