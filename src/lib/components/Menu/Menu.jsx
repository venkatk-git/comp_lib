import React from "react";
import styled from "styled-components";

//Components
import { MdKeyboardArrowRight } from "react-icons/md";

//Helpers & Constants

function Menu() {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const MENU = [
    {
      name: "Undo",
      shortcut: "Ctrl+Z",
      menus: [],
    },
    {
      name: "Redo",
      shortcut: "Ctrl+Y",
      menus: [],
    },
    {
      name: "Cut",
      shortcut: "Ctrl+X",
      menus: [],
    },
    {
      name: "Copy",
      shortcut: "Ctrl+C",
      menus: [],
    },
    {
      name: "Find",
      shortcut: "Ctrl+F",
      menus: [],
    },
    {
      name: "Replace",
      shortcut: "Ctrl+H",
      menus: [],
    },
    {
      name: "Preferences",
      menus: [
        {
          name: "Profile",
          menus: [
            {
              name: "Default",
              menus: [],
            },
            {
              name: "New Profile",
              menus: [],
            },
            {
              name: "Export Profile",
              menus: [],
            },
            {
              name: "Import Profile",
              menus: [],
            },
          ],
        },
      ],
    },
  ];

  return (
    <MenuWrapper>
      <MenuButton handleToggle={handleToggle} />
      <Wrapper show={toggle}>
        {toggle && MENU?.map((menu) => <SMenu menu={menu} />)}
      </Wrapper>
    </MenuWrapper>
  );
}

function MenuButton({ handleToggle }) {
  return <MenuButtonWrapper onClick={handleToggle}>Edit</MenuButtonWrapper>;
}

function SMenu({ menu }) {
  return (
    <SMenuWrapper>
      <SMenuList>{menu.name}</SMenuList>
      <SMenuList>{menu.shortcut}</SMenuList>
      <Arrow show={menu.menus.length > 0} />
    </SMenuWrapper>
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

export default Menu;
