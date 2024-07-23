import React, { useContext } from "react";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Loading from "./components/Loading";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
