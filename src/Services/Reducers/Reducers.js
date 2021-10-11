import { USER_ID, USERS, SELECTED_USERS, TITLE, MESSAGES } from "../types";

const initialState = {
  userID: 0,
  userName: '',
  Users: [],
  SelectedUsers: [],
  Title: '',
  Messages: 0
};
const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case USER_ID:
      return {
        ...state,
        userID: payload.id,
        userName: payload.name
      }
    case USERS:
      return {
        ...state,
        Users: payload
      }
    case SELECTED_USERS:
      return {
        ...state,
        SelectedUsers: payload
      }
    case TITLE:
      return {
        ...state,
        Title: payload
      }
    case MESSAGES:
      return {
        ...state,
        Messages: payload
      }
    default:
      return state;
  }
};
export { reducer };