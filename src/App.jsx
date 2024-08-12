//Stylesheet
import "./App.css";
import styled from "styled-components";

//Components
import YTSearch from "./lib/components/YTSearch";

//Helpers & Constans

function App() {
  return (
    <Wrapper>
      <YTSearch />
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
