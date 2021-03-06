/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text} from 'react-native';

const NavBarIcon = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image style={{width: 26, height: 26}} source={props.img} />
      <Text
        style={{
          fontSize: 10,
          // color: '#545454',
          marginTop: 4,
          color: props.active ? '#43AB4A' : '#545454',
        }}>
        {props.title}
      </Text>
    </View>
  );
};
export default NavBarIcon;
