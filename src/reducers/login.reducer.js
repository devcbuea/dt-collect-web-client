import { USER_LOGED_IN } from './../actions/constants';

const initialState = {
    loginStatus: ''
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGED_IN: {
            return {
                ...state,
                loginStatus: action.data.status,
            }
        }

        default:
            return state;
    }
};
export default login;