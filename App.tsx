import React from "react";
import { Provider } from "react-native-paper";

import { Navigator } from "./_helpers/navigation/Navigator";

export default function App() {
  return (
    <Provider>
      <Navigator />
    </Provider>
  );
}
