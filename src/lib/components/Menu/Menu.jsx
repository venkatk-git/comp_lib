import React from "react";
import styled from "styled-components";

//Components
import { MdKeyboardArrowRight } from "react-icons/md";

//Helpers & Constants

function Menu({ menus }) {
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <MenuWrapper>
      <Wrapper show={toggle}>
        {menus?.map((menu) => (
          <SMenu menu={menu} />
        ))}
      </Wrapper>
    </MenuWrapper>
  );
}

function SMenu({ menu }) {
  const [nestedMenu, setNestedMenu] = React.useState(false);
  function handleNestedMenu(menu) {
    if (menu?.menus.length > 0) setNestedMenu((prev) => !prev);
  }

  return (
    <>
      <SWrapper>
        <SMenuWrapper onClick={() => handleNestedMenu(menu)}>
          <SMenuList>{menu.name}</SMenuList>
          <SMenuList>{menu.shortcut}</SMenuList>
          <Arrow show={menu.menus.length > 0} />
        </SMenuWrapper>
        <NestedMenuWrapper>
          {nestedMenu && <Menu menus={menu.menus} />}
        </NestedMenuWrapper>
      </SWrapper>
    </>
  );
}

function Arrow({ show }) {
  return show && <MdKeyboardArrowRight />;
}

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuButtonWrapper = styled.div`
  padding: 4px 8px;
  background-color: var(--color-menu-bg);
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 8px;
  width: min-content;

  &:hover {
    background-color: var(--color-menu-bg-hover);
  }
`;

const Wrapper = styled.div`
  display: ${(props) => (!props.show ? "none" : "revert")};
  background-color: var(--color-menu-bg);
  border-radius: 4px;
  padding: 8px;
`;

const SWrapper = styled.div`
  position: relative;
`;

const SMenuWrapper = styled.ul`
  margin: unset;
  width: 186px;
  font-size: 0.85rem;
  color: var(--gray-400);
  padding: 4px 12px;
  border-radius: 4px;
  background-color: var(--color-menu-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-menu-bg-hover);
  }
`;

const SMenuList = styled.li`
  list-style: none;
`;

const NestedMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 101%;
`;

export default Menu;
