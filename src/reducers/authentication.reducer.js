import { USER_LOGED_IN, SIGN_UP } from '../actions/constants';

const initialState = {
    signupStatus: '',
    userToken: ''
};

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGED_IN: {
            console.log(action.data);
            return {
                ...state,
                loginToken: action.data.token
            }
        }
        case SIGN_UP: {
            return {
                ...state,
                signupStatus: action.data.created
            }
        }

        default:
            return state;
    }
};
export default authentication;