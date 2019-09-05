import {NEWS_REQUESTED, NEWS_RETREIVED, NEWS_LOADED, CLEAR_NEWS, NO_FURTHER_NEWS} from './types.js';

const NEWS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

export const fetch_news_posts = () => dispatch => {
    console.log(">>> fetch_news_posts function called");

    dispatch({type: NEWS_REQUESTED});

    fetch(NEWS_ENDPOINT, {
        method: 'GET',
        headers: {'Cache-control': 'no-cache'}
    })
        .then(res => res.json())
        .then(posts => dispatch({
            type: NEWS_RETREIVED,
            payload: posts
        }));

    dispatch({type: NEWS_LOADED});

};