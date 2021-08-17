/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import GoBanner from '../../../components/molecules/GoBanner';
import GoInfo from '../../../components/molecules/GoInfo';
import GoNews from '../../../components/molecules/GoNews';
import SearchFeature from '../../../components/molecules/SearchFeature';
import HomeGopay from '../../../containers/organisms/HomeGoPay';
import HomeMainFeatures from '../../../containers/organisms/HomeMainFeatures';
import Navbar from '../../../containers/organisms/NavBar';
import Scrollable from '../../../containers/organisms/ScrollableProducts';
class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <SearchFeature />
          <HomeGopay />
          <HomeMainFeatures />
          <View style={{height: 17, backgroundColor: '#F2F2F4'}} />
          <GoNews
            onTekan={() => {
              this.props.navigation.navigate('Detail');
            }}
          />
          <GoInfo />
          <GoBanner />
          <Scrollable />
        </ScrollView>

        <Navbar />
      </View>
    );
  }
}

export default Home;
