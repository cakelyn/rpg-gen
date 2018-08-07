import types from "./types";

const create = character => ({
  type: types.CREATE,
  payload: character
});

const get = () => ({
  type: types.GET
});

export default {
  create,
  get
};
