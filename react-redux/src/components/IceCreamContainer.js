import React from "react";
import { connect } from "react-redux";
import { buyIceCreamAction } from "./../redux/icecreams/iceCreamActions";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Creams in shop is :{props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCreamRed.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => {
      dispatch(buyIceCreamAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
