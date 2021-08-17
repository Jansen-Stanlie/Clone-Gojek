/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import {View} from 'react-native';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          backgroundColor: 'white',
          borderColor: '#E8E9ED',
          borderWidth: 1,
        }}>
        <NavBarIcon
          img={require('../../../assets/icon/home-active.png')}
          title="Home"
          active={true}
        />
        <NavBarIcon
          img={require('../../../assets/icon/order.png')}
          title="Orders"
          active={false}
        />
        <NavBarIcon
          img={require('../../../assets/icon/help.png')}
          title="Help"
          active={false}
        />
        <NavBarIcon
          img={require('../../../assets/icon/inbox.png')}
          title="Inbox"
          active={false}
        />
        <NavBarIcon
          img={require('../../../assets/icon/account.png')}
          title="Account"
          active={false}
        />
      </View>
    );
  }
}

export default Navbar;
