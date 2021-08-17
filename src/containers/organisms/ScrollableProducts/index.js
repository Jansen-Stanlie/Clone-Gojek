/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {View, Image, ScrollView, Text} from 'react-native';
import ScrollableItem from '../../../components/molecules/Scrollableitem';
class Scrollable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <View
          style={{
            height: 15,
            width: 60,
            marginLeft: 16,
          }}>
          <Image
            source={require('../../../assets/logo/go-food.png')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
            paddingHorizontal: 16,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>
            Nearby Restaurant
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
            See All
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingLeft: 16}}>
          <ScrollView horizontal={true}>
            <ScrollableItem
              title="KFC Minang"
              img={require('../../../assets/dummy/go-food-kfc.jpg')}
            />
            <ScrollableItem
              title="Bakmi Non-Halal"
              img={require('../../../assets/dummy/go-food-gm.jpg')}
            />
            <ScrollableItem
              title="Martabak Nuklir"
              img={require('../../../assets/dummy/go-food-orins.jpg')}
            />
            <ScrollableItem
              title="Martabak Banka"
              img={require('../../../assets/dummy/go-food-banka.jpg')}
            />
            <ScrollableItem
              title="Minang Boswq"
              img={require('../../../assets/dummy/go-food-pak-boss.jpg')}
            />
          </ScrollView>
        </View>
        <View
          style={{
            borderBottomColor: '#E8E9ED',
            borderBottomWidth: 1,
            marginTop: 16,
            marginBottom: 20,
            marginHorizontal: 16,
          }}
        />
      </View>
    );
  }
}

export default Scrollable;
