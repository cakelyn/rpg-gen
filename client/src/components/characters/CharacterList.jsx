import React from "react";
import { connect } from "react-redux";

const CharacterList = () => {
  return <div>Characters</div>;
};

const mapStateToProps = state => ({
  cartItems: state.characters
});

export default connect(
  mapStateToProps,
  null
)(CharacterList);
