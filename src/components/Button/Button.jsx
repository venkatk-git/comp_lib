import styled from "styled-components";

const BUTTON_VARIANTS = {
  size: {
    lg: `width: 256px;
         height: 58px;
         font-size: 1.1rem;`,
    md: `width: 156px;
         height: 46px;
         font-size: 1rem;`,
    sm: `width: 96px;
         height: 32px;
         font-size: 1rem;`,
  },

  variants: {
    primary: `
      background-color: #f9f9f9; 
      color: #000;
      font-weight: 700;

      &:hover{
        cursor: pointer;
        background-color: var(--hover-dark);
        outline-width: 2px;
        outline-style: solid;
        outline-color: var(--border-color);
      }
      `,
    secondary: `
      background-color: transparent; 
      color: #f9f9f9;
      font-weight: 500;
      border: 2px solid var(--border-color);
      
      &:hover{
        cursor: pointer;
        background-color: #f9f9f9;
        outline-width: 2px;
        outline-style: solid;
        outline-color: var(--border-color);
        color: black;
      }
    `,
  },
};

function Button({ size = "sm", variant = "primary", children }) {
  return (
    <ButtonWrapper size={size} variant={variant}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  border-radius: 8px;
  outline: none;
  border: none;
  ${(props) => BUTTON_VARIANTS.size[props.size]}
  ${(props) => BUTTON_VARIANTS.variants[props.variant]}
`;

export default Button;
