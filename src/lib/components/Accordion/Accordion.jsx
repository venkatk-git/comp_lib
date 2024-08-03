import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

function Accordion({ items, keepOpen = false }) {
  const [accordionItems, setAccordionItems] = React.useState(null);

  useEffect(() => {
    if (items)
      setAccordionItems([
        ...items?.map((item) => ({ ...item, toggle: false })),
      ]);
  }, []);

  const handleToggle = (id) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item) => {
        if (keepOpen)
          return {
            ...item,
            toggle: item.id === id ? !item.toggle : item.toggle,
          };

        return {
          ...item,
          toggle: item.id === id ? !item.toggle : false,
        };
      })
    );
  };

  return (
    <AccordionWrapper>
      {accordionItems?.map((item) => (
        <AccordionItem
          value={item}
          key={item.id}
          handleToggle={handleToggle}
        ></AccordionItem>
      ))}
    </AccordionWrapper>
  );
}

function AccordionItem({ value, handleToggle }) {
  return (
    <AccordionItemWrapper>
      <Button onClick={() => handleToggle(value.id)} show={value.toggle}>
        <span>{value.heading}</span>
        <span>{value.toggle ? "-" : "+"}</span>
      </Button>
      <ContentWrapper show={value.toggle}>
        <p>{value.renderContent()}</p>
      </ContentWrapper>
    </AccordionItemWrapper>
  );
}

const AccordionWrapper = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  max-width: min-content;
`;

const AccordionItemWrapper = styled.div``;

const Button = styled.button`
  background-color: var(--gray-500);
  border: none;
  color: black;
  width: 256px;
  height: 44px;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid black;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: ${({ show }) => (show ? "0px" : "4px")};
  border-bottom-right-radius: ${({ show }) => (show ? "0px" : "4px")};
`;

const ContentWrapper = styled.div`
  max-height: ${({ show }) => (show ? "auto" : "0px")};
  padding: ${({ show }) => (show ? "12px" : "0px")};
  background-color: var(--gray-100);
  transition: all 0.2s ease;
  width: inherit;
  text-align: left;
  overflow: hidden;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  & p {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

export default Accordion;
