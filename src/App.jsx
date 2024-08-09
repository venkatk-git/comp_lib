//Stylesheet
import "./App.css";
import styled from "styled-components";

//Components
import SimpleSearch from "./lib/components/SimpleSearch";

//Helpers & Constans

function App() {
  return (
    <Wrapper>
      <SimpleSearch />
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
