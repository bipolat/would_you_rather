import { SIGNOUT, SIGNIN } from '../utils/helper';

export default function authentication(state = '', action) {
  switch (action.type) {
    case SIGNIN:
      return action.id;
    case SIGNOUT:  
      return '';
    default:
      return state;
  }
}
