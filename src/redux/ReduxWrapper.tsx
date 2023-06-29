import React, { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const ReduxWrapper: FC<{ element: any }> = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

export default ReduxWrapper;
