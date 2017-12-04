import {StackNavigator} from "react-navigation";

import ToolTileView from "./ToolTileView/ToolTileView";
import {PhraseStackNav} from "./PhraseListView/PhraseStackNavConfig"
import ConversionListView from "./ConversionListView/ConversionListView"

const toolConfig = {
    ToolTileView: {screen: ToolTileView},
    PhraseStackNav: {screen: PhraseStackNav},
    ConversionListView: {screen: ConversionListView}
};

const stackNavConfig = {
    headerMode: 'none',
    initialRouteName: 'ToolTileView',
    navigationOptions: {
    }
};

export const ToolStackNav = StackNavigator(toolConfig, stackNavConfig);