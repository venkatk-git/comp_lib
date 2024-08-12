import styled from "styled-components";

function Results({ results, handleClick, currFocus }) {
  return (
    <Wrapper>
      {results?.map((result, index) => (
        <Result
          result={result}
          handleClick={handleClick}
          key={index}
          isfocused={(currFocus === index).toString()}
        />
      ))}
    </Wrapper>
  );
}

function Result({ result, handleClick, isfocused }) {
  return (
    <ResultWrapper onClick={() => handleClick(result)} isfocused={isfocused}>
      <span>{result}</span>
    </ResultWrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--gray-500);
  color: var(--black);
`;

const ResultWrapper = styled.div.attrs(({ isfocused }) => ({
  "data-focused": isfocused || undefined,
}))`
  padding: 12px;
  padding-left: 40px;
  text-align: left;
  border-bottom: 1px solid var(--gray-400);
  background-color: ${({ isfocused }) =>
    isfocused == "true" ? "var(--gray-400)" : "inherit"};

  &:hover {
    cursor: pointer;
    background-color: var(--gray-400);
  }
`;

export default Results;
