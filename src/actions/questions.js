import { hideLoading, showLoading } from "react-redux-loading";
import { getQuestions, saveQuestion, saveQuestionAnswer } from "../utils/api";
import { GET_QUESTIONS,SET_QUESTION_ANSWER, ADD_NEW_QUESTION,SET_USER_ANSWER,ADD_USER_QUESTION } from "../utils/helper";

export function handleQuestions() {return (dispatch) => {dispatch(showLoading());

    return getQuestions().then(({ questions }) => {
      dispatch(receive_Questions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleSetQuestionAnswer(info) {return (dispatch) => {dispatch(showLoading());

    return saveQuestionAnswer(info)
    .then((question) => {
      dispatch(set_Question_Answer(question))
      dispatch(set_User_Answer(question))
    })
      .then(() => dispatch(hideLoading()));
  };
}

export function handleNewQuestion(info) {return (dispatch) => {dispatch(showLoading());

    return saveQuestion(info)
      .then((question) => {
        dispatch(add_New_Question(question))
        dispatch(add_User_Question(question))
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function receive_Questions(questions) 
{
  return {type: GET_QUESTIONS,questions};
}

function add_New_Question(question) 
{
  return {type: ADD_NEW_QUESTION,question};
}

function set_Question_Answer({ authentication, qid, answer }) 
{
  return {type: SET_QUESTION_ANSWER,authentication,qid,answer};
}

export function set_User_Answer({ authentication, qid, answer }) {
  return {type: SET_USER_ANSWER,authentication,qid,answer};
}

export function add_User_Question(question) {
  return {type: ADD_USER_QUESTION,question};
}
