import { DETERMINE_EMAIL_ASSOC_WITH_ACCOUNT } from '../actions/types.js';

const initialState = {
    isRegisteredUser: null
};

export default function(state = initialState, action) {
    switch(action.type) {

        case DETERMINE_EMAIL_ASSOC_WITH_ACCOUNT:
            return  {
                ...state,
                isRegisteredUser: action.payload
            };

        default:
            return state;

    };
};