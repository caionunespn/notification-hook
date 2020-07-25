import React from "react";

import Home from "./pages/Home";

import GlobalStyles from "./styles/GlobalStyles";
import { NotificationWrapper } from "./components/Notification";

function App() {
  return (
    <>
      <NotificationWrapper>
        <Home />
      </NotificationWrapper>
      <GlobalStyles />
    </>
  );
}

export default App;
