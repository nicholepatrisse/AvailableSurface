import * as UserAPIUtil from '../util/users_api_util';
import { receiveCurrentUser } from './session_actions';

export const updateUser = user => dispatch => (
    UserAPIUtil.updateUser(user)
    .then( user => dispatch(receiveCurrentUser(user)))
);

export const fetchUser = userId => dispatch => (
    UserAPIUtil.fetchUser(userId)
    .then( user => dispatch(receiveCurrentUser(user)) )
);