import React from "react";
import { buyCakeAction } from "../redux/cakes/CakeActions";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes in shop is :{props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cakeRed.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCakeAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
