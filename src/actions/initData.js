import { getInitialData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { GET_USERS} from "../utils/helper";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ users }) => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    });
  };
}

export function receiveUsers(users) 
  {return {type: GET_USERS,users};}

