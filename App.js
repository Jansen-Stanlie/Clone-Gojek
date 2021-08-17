/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import GoBanner from './src/components/molecules/GoBanner';
import GoInfo from './src/components/molecules/GoInfo';
import GoNews from './src/components/molecules/GoNews';
import SearchFeature from './src/components/molecules/SearchFeature';
import HomeGopay from './src/containers/organisms/HomeGoPay';
import HomeMainFeatures from './src/containers/organisms/HomeMainFeatures';
import Navbar from './src/containers/organisms/NavBar';
import Scrollable from './src/containers/organisms/ScrollableProducts';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//! Functional Komponen
// const Buttons = () => {
//   return (
//     <View>
//       <Text>Button</Text>
//     </View>
//   );
// };
// class Buttonss extends Component {
//   state = {};
//   render() {
//     return (
//       <View>
//         <Text>Button</Text>
//       </View>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <View style={{flex: 1}}>
          {/* <ScrollView style={{flex: 1, backgroundColor: 'white'}}> */}
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeGopay} />
          </Stack.Navigator>
          {/* <SearchFeature />

            <HomeGopay />

            <HomeMainFeatures />
            <View style={{height: 17, backgroundColor: '#F2F2F4'}} />

            <GoNews />

            <GoInfo />

            <GoBanner />

            <Scrollable /> */}
          {/* </ScrollView> */}

          <Navbar />
        </View>
      </NavigationContainer>
    );
  }
}

export default App;
