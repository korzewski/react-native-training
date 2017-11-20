import {Navigation} from 'react-native-navigation'
import HomeScreen from './screens/Home'

Navigation.registerComponent('example.home', () => HomeScreen)

Navigation.startSingleScreenApp({
    screen: {
        screen: 'example.home',
        title: 'Home',
    },
});