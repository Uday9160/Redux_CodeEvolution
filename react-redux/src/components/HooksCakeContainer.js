import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCakeAction } from "../redux/cakes/CakeActions";

function HooksCakeContainer() {
  const dispatch = useDispatch(); //Same as mapDispatchToProps
  const cakesNo = useSelector((state) => state.cakeRed.numOfCakes); //Same as mapStateToProps
  return (
    <div>
      <h2>Number of Cakes in shop is : {cakesNo}</h2>
      <button onClick={() => dispatch(buyCakeAction())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
