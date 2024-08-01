import React from "react";

import { css } from "styled-components";
import { styled } from "styled-components";

const FIELD_VARIANTS = {
  error: css`
    color: red;
    border-color: red;

    &::placeholder {
      color: red;
    }
  `,
  types: {
    default: css`
      background-color: var(--gray-100);
      border-bottom: 1px solid var(--white);
    `,
    filled: css`
      background-color: var(--gray-100);
      border-bottom: 1px solid var(--white);
    `,
    outlined: css`
      background-color: transparent;
      border: 1px solid var(--white);
    `,
  },
};

function TextField({ label, type = "default", error = false, assistiveText }) {
  if (!(type in FIELD_VARIANTS.types)) type = "default";

  return (
    <Wrapper>
      <Input placeholder={label} type={type} error={error} />
      {assistiveText && (
        <AssistiveText error={error}>{assistiveText}</AssistiveText>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 264px;
  height: 42px;
  outline: none;
  border: none;
  padding: 0 8px;
  color: var(--white);
  font-size: 1.05rem;
  border-radius: 4px;

  &::placeholder {
    font-size: 1.05rem;
    color: var(--white);
  }

  ${(props) => FIELD_VARIANTS.types[props.type]}
  ${(props) => props.error && FIELD_VARIANTS.error}
`;

const AssistiveText = styled.span`
  padding: 3px 8px;
  text-align: left;
  font-size: 0.7rem;
  color: var(--white);

  ${(props) => props.error && FIELD_VARIANTS.error}
`;

export default TextField;
