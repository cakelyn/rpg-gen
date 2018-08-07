import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./state/store";
import Form from "./components/form/Form.jsx";
import CharacterList from "./components/characters/CharacterList.jsx";
import "./index.scss";

const store = configureStore();

const Index = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Form />
        <CharacterList />
      </React.Fragment>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));
