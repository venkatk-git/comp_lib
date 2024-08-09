import styled from "styled-components";

function Results({ results, handleClick }) {
  return (
    <Wrapper>
      {results?.map((result, index) => (
        <Result result={result} handleClick={handleClick} key={index} />
      ))}
    </Wrapper>
  );
}

function Result({ result, handleClick }) {
  return (
    <ResultWrapper onClick={() => handleClick(result)}>
      <span>{result}</span>
    </ResultWrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--gray-500);
  color: var(--black);
`;

const ResultWrapper = styled.div`
  padding: 12px;
  padding-left: 40px;
  text-align: left;
  border-bottom: 1px solid var(--gray-400);

  &:hover {
    cursor: pointer;
    background-color: var(--gray-400);
  }
`;

export default Results;
