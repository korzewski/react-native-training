import {Navigation} from 'react-native-navigation'

import SingleScreen from './SingleScreen'
import Drawer from './Drawer'
import TabScreen1 from './Tab1'
import TabScreen2 from './Tab2'
import TabScreen3 from './Tab3'
import TabScreen3a from './Tab3a'
import TabScreen3b from './Tab3b'
import ModalContent from './ModalContent'

export function registerScreens() {
    Navigation.registerComponent('example.singleScreen', () => SingleScreen)
    Navigation.registerComponent('example.drawer', () => Drawer)
    Navigation.registerComponent('example.tab1', () => TabScreen1)
    Navigation.registerComponent('example.tab2', () => TabScreen2)
    Navigation.registerComponent('example.tab3', () => TabScreen3)
    Navigation.registerComponent('example.tab3a', () => TabScreen3a)
    Navigation.registerComponent('example.tab3b', () => TabScreen3b)
    Navigation.registerComponent('example.modal.content', () => ModalContent)
}