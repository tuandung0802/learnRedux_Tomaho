import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "./actionTypes";

const A = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.studentReducer.student);
  // console.log("data của students là", students);
  useEffect(() => {
    dispatch({
      type: Actions.I_WILL_BE_THE_BEST_DEV,
    });
    // console.log(Actions.I_WILL_BE_THE_BEST_DEV);
  }, []);
  const clickButton = (e) => {
    dispatch({
      // type: Actions.TEST_YIELD_SPAWN_FORK,
      type: Actions.TEST_YIELD_CALL,
    });
  };
  const clickButton2 = (e) => {
    dispatch({
      type: Actions.TEST_TAKE_LASTEST,
    });
  };
  const clickButton3 = (e) => {
    dispatch({
      type: Actions.TEST_TAKE_EVERY,
    });
  };
  return (
    <div>
      <button onClick={clickButton}>click me</button>
      <h1>Xin chào Tomaho Newcomer, well-leart nhé!!</h1>
      <button onClick={clickButton2}>click me (TEST_TAKE_LASTEST)</button>
      <button onClick={clickButton3}>click me (TEST_TAKE_EVERY)</button>
    </div>
  );
};

export default A;
