import { DETERMINE_EMAIL_ASSOC_WITH_ACCOUNT } from './types.js';

export const determine_email_assoc_with_account = formData => dispatch => {
    console.log(">>> determine_email_assoc_with_account function called");
    dispatch({
        type: DETERMINE_EMAIL_ASSOC_WITH_ACCOUNT,
        payload: formData.email == "dom"
    });
};