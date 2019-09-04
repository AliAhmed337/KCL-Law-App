import React from 'react';
import {View, Button, Text, AsyncStorage} from 'react-native';

class EventsScreen extends React.Component {
  static navigationOptions = { title: 'Events'};

  render() {
    return (
        <View>
          <Text>Events page</Text>
        </View>
    );
  }

}

export default EventsScreen;