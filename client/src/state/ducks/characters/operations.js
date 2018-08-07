import actions from "./actions";

const store = character => dispatch => {
  dispatch(actions.create()).then(() => {
    dispatch(actions.get());
  });
};
const get = actions.get;

export default {
  store,
  get
};
