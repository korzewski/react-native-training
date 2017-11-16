import {Navigation} from 'react-native-navigation'

import TabScreen1 from './Tab1'
import TabScreen2 from './Tab2'
import TabScreen3 from './Tab3'

export function registerScreens() {
    Navigation.registerComponent('example.tab1', () => TabScreen1)
    Navigation.registerComponent('example.tab2', () => TabScreen2)
    Navigation.registerComponent('example.tab3', () => TabScreen3)
}