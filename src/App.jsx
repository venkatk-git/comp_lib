//Dependencies
import React from "react";

//Stylesheet
import "./App.css";
import styled from "styled-components";

//Components
import AddTag from "./lib/components/AddTag";

//Helpers & Constans

function App() {
  return (
    <Wrapper>
      <AddTag/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items; center;
  width: 100%;
`;

export default App;
