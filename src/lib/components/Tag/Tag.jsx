//Styles
import styled from "styled-components";

function Tag({ onClick, children, typicalTag = true }) {
  const content = typicalTag ? `${children} x` : children;
  return <Wrapper onClick={onClick}>{content}</Wrapper>;
}

const Wrapper = styled.div`
  width: fit-content;
  padding: 4px 16px;
  background-color: var(--gray-100);
  border-radius: 100px;

  &:hover {
    background-color: var(--gray-200);
    cursor: pointer;
  }
`;

export default Tag;
