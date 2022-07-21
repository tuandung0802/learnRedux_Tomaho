import * as Actions from "./actionTypes";
const initialState = {
  student: [], // danh sách sv
};
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.I_WILL_BE_THE_BEST_DEV: {
      // gọi hành động đến reducer, chưa cập nhật State
      console.log("Toi da vao I_WILL_BE_THE_BEST_DEV");
      return state;
    }
    default:
      return state;
  }
};
export default studentReducer;
