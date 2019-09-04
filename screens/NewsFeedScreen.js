import React from 'react';
import {View, Text} from 'react-native';
import { NewsFeedGradient } from "../custom_components/feed_components/NewsFeedGradient";
import { NewsFeedCard } from "../custom_components/feed_components/NewsFeedCard";
import { HeaderComponent } from "../custom_components/HeaderComponent";
import {StatusBar} from "../custom_components/StatusBar";

class NewsFeedScreen extends React.Component {
  static navigationOptions = {header: null};

  render() {
    return (
        <View style={{flex:1}}>
            <StatusBar/>

            <View style={{backgroundColor: '#fbfbfb', paddingTop: 20, paddingBottom: 0, paddingLeft: 15, paddingRight: 15}}>
                <HeaderComponent pageName={'Newsfeed'} />
            </View>

            <NewsFeedGradient>
                <NewsFeedCard>
                    <Text style={{color: '#000', height:100}}>Content</Text>
                </NewsFeedCard>
            </NewsFeedGradient>

            <NewsFeedGradient>
                <NewsFeedCard>
                    <Text style={{color: '#000', height:100}}>Content</Text>
                </NewsFeedCard>
            </NewsFeedGradient>
        </View>
    );
  }

}

export default NewsFeedScreen;