import {NEWS_REQUESTED, NEWS_RETREIVED, NEWS_LOADED, CLEAR_NEWS, NO_FURTHER_NEWS} from '../actions/types.js';

const initialState = {
    posts: [],
    lastLoaded: null,
    loading: false,
    loadedAll: false
};

export default function(state = initialState, action) {
    switch(action.type) {

        case NEWS_REQUESTED:
            return  {...state, loading: true};

        case NEWS_RETREIVED:
            return  {...state, posts: action.payload};

        case NEWS_LOADED:
            return  {...state, loading: false};

        case CLEAR_NEWS:
            return  {...state, posts: []};

        case NO_FURTHER_NEWS:
            return  {...state, loadedAll: true};

        default:
            return state;

    };
};