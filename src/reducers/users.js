import { GET_USERS, SET_USER_ANSWER, ADD_USER_QUESTION } from '../utils/helper';

export default function user(state = null, action) {
  switch (action.type) {
    case ADD_USER_QUESTION:
      return {...state,[action.question.author]: {...state[action.question.author],questions: state[action.question.author].questions.concat([action.question.id])}};
    case SET_USER_ANSWER:
      return {...state,[action.authentication]: {...state[action.authentication],answers: {...state[action.authentication].answers,[action.qid]: action.answer}}};  
    case GET_USERS:
      return {...state,...action.users};
    default:
      return state;
  }
}
