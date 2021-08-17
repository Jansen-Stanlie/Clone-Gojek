/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import MainFeature from '../../../components/molecules/MainFeature';
import {View} from 'react-native';

class HomeMainFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 0,
          marginTop: 18,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',

            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <MainFeature
            title="GO-RIDE"
            img={require('../../../assets/icon/go-ride.png')}
          />
          <MainFeature
            title="GO-CAR"
            img={require('../../../assets/icon/go-car.png')}
          />
          <MainFeature
            title="GO-BLUEBIRD"
            img={require('../../../assets/icon/go-bluebird.png')}
          />
          <MainFeature
            title="GO-SEND"
            img={require('../../../assets/icon/go-send.png')}
          />
          <MainFeature
            title="GO-DEALS"
            img={require('../../../assets/icon/go-deals.png')}
          />
          <MainFeature
            title="GO-PULSA"
            img={require('../../../assets/icon/go-pulsa.png')}
          />
          <MainFeature
            title="GO-FOOD"
            img={require('../../../assets/icon/go-food.png')}
          />
          <MainFeature
            title="MORE"
            img={require('../../../assets/icon/go-more.png')}
          />
        </View>
      </View>
    );
  }
}

export default HomeMainFeatures;
