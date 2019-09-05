import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {NewsCard} from "../custom_components/feed_components/NewsCard";
import {HeaderComponent} from "../custom_components/HeaderComponent";
import {StatusBar} from "../custom_components/StatusBar";
import {TabBarIcon} from "../components/TabBarIcon";
import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetch_news_posts} from "../actions/newsActions";

class NewsFeedScreen extends React.Component {
  static navigationOptions = {header: null}; //This might not actually do anything
                                            //navigation options may not work inside screens
    constructor(props) {
        super(props);
    }

  componentWillMount(){
      this.props.fetch_news_posts();
  }

  render() {
    return (
        <View style={{flex:1}}>
            <StatusBar/>
            <ScrollView style={{backgroundColor: '#F5F5F5', paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15}}>
                <HeaderComponent pageName={'Newsfeed'} />
                <FlatList
                    data={this.props.posts}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <NewsCard item={item}/> }
                />
            </ScrollView>
        </View>
    );
  }

}

const mapStateToProps = state => ({
    posts: state.news.posts,
    loading: state.news.loading
});

NewsFeedScreen.propTypes = {
    fetch_news_posts: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {fetch_news_posts})(NewsFeedScreen);
