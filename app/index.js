import {Navigation} from 'react-native-navigation'
import {registerScreens} from './screens'

registerScreens()

Navigation.startTabBasedApp({
    appStyle: {
        orientation: 'portrait',
    },
    tabs: [
        {
            label: 'One',
            screen: 'example.tab1',
            icon: require('./assets/images/icon-1.png'),
            selectedIcon: 'tabBarSelectedButtonColor',
            title: 'Screen One',
        },
        {
            label: 'Two',
            screen: 'example.tab2',
            icon: require('./assets/images/icon-2.png'),
            selectedIcon: 'tabBarSelectedButtonColor',
            title: 'Screen Two',
        },
        {
            label: 'Boom!',
            screen: 'example.tab3',
            icon: require('./assets/images/icon-3.png'),
            selectedIcon: 'tabBarSelectedButtonColor',
            title: 'Boom!',
        },
    ],
})