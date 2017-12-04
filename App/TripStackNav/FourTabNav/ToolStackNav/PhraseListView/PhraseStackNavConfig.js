import {StackNavigator} from "react-navigation";

import PhraseListView from "./PhraseListView";
import GreetingsListViewSpanish from "./LanguageLists/Spanish/GreetingsListView";
import GreetingsListViewFrench from "./LanguageLists/French/GreetingsListView";
import GreetingsListViewGerman from "./LanguageLists/German/GreetingsListView";
import FoodListViewItalian from "./LanguageLists/Italian/FoodListView";

const toolConfig = {
    PhraseListView: {screen: PhraseListView},
    GreetingsListViewSpanish: {screen: GreetingsListViewSpanish},
    GreetingsListViewFrench: {screen: GreetingsListViewFrench},
    GreetingsListViewGerman: {screen: GreetingsListViewGerman},
    FoodListViewItalian: {screen: FoodListViewItalian}
};

const stackNavConfig = {
    headerMode: 'none',
    initialRouteName: 'PhraseListView',
    navigationOptions: {
    }
};

export const PhraseStackNav = StackNavigator(toolConfig, stackNavConfig);