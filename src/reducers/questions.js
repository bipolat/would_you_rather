import { ADD_NEW_QUESTION, GET_QUESTIONS, SET_QUESTION_ANSWER } from '../utils/helper';


export default function questions(state = null, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {...state,...action.questions};
    case ADD_NEW_QUESTION:
      return {...state,[action.question.id]: action.question};
    case SET_QUESTION_ANSWER:
      return {...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: Array.from(
              new Set(
                state[action.qid][action.answer].votes.concat([action.authentication])
              )
            ),
          },
        },
      };  
    default:
      return state;
  }
}
