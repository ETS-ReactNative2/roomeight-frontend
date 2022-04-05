import {
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
} from '../constants';
import auth from '@react-native-firebase/auth';

const logoutUserRequest = () => ({
    type: LOGOUT_USER_REQUEST,
});

const logoutUserSuccess = (user) => ({
    type: LOGOUT_USER_SUCCESS,
    payload: user,
});

const logoutUserFailure = (error) => ({
    type: LOGOUT_USER_FAILURE,
    payload: error,
});

export const logoutUser = () => (dispatch) => {
    dispatch(logoutUserRequest());

    signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
            dispatch(logoutUserSuccess(response.user));
        })
        .catch((error) => {
            dispatch(logoutUserFailure(error));
        });
};
