import {Navigation} from 'react-native-navigation'
import {registerScreens} from './screens'

registerScreens()

// Navigation.startSingleScreenApp({
//     screen: {
//         screen: 'example.singleScreen',
//         title: 'singleScreen',
//     },
//     drawer: {
//         left: {
//           screen: 'example.drawer',
//           passProps: {title: 'Left Drawer!'},
//         },
//         right: {
//           screen: 'example.drawer',
//           passProps: {title: 'Right Drawer!'}
//         },
//     },
// });

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