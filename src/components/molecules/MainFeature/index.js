/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Text} from 'react-native';

const MainFeature = props => {
  return (
    <View style={{width: '25%', alignItems: 'center', marginBottom: 18}}>
      <View
        style={{
          width: 58,
          height: 58,
          borderWidth: 1,
          borderColor: '#EFEFEF',
          borderRadius: 18,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={props.img} />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 6,
        }}>
        {props.title}
      </Text>
    </View>
  );
};
export default MainFeature;
