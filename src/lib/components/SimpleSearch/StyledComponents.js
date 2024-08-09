import styled from "styled-components";

//Components
import { IoIosSearch } from "react-icons/io";

export const MainWrapper = styled.div`
  width: min(364px, 100%);
  border-radius: 8px;
  background-color: var(--gray-500);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const InputWrapper = styled.div`
  padding: 12px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--black);
  font-size: 1rem;
  flex: 1;
  padding: 0;
`;

export const SearchIcon = styled(IoIosSearch)`
  color: var(--gray-100);
  font-size: 1.2rem;
  padding-bottom: 2px;
`;
