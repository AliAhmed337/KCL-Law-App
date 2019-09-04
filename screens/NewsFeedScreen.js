import React from 'react';
import {View, Text} from 'react-native';

class NewsFeedScreen extends React.Component {
  static navigationOptions = { title: 'News'};

  render() {
    return (
        <View>
          <Text>News feed</Text>
        </View>
    );
  }

}

export default NewsFeedScreen;