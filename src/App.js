import React from "react"
import Wrapper from "./components/Wrapper"
import Header from "./components/Header";
// import Search from "./components/SearchBox"
import Employee from "./pages/employee"

import "./App.css";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Employee />
        <SearchBox/>
      </Wrapper>
    </div>
  );
}

export default App;
