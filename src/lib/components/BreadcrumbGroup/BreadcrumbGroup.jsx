import React from "react";

//Stylesheet
import styled from "styled-components";

//Helpers & Constants
import { BREADCRUMB_LINKS } from "../../../utils/constants";

//Components
import { MdKeyboardArrowRight } from "react-icons/md";

function BreadcrumbGroup() {
  const [links, setLinks] = React.useState(null);

  React.useEffect(() => {
    setLinks(BREADCRUMB_LINKS);
  }, []);

  return (
    <Wrapper>
      {links?.map((el, index) => {
        return (
          <>
            <Breadcrumb
              name={el.name}
              link={el.link}
              active={index == links.length - 1}
            />
          </>
        );
      })}
    </Wrapper>
  );
}

function Breadcrumb({ name, link, active }) {
  return !active ? (
    <>
      <Link href={link}>{name}</Link>
      <Seperator> / </Seperator>
    </>
  ) : (
    <ActiveLink>{name}</ActiveLink>
  );
}

const Wrapper = styled.div``;

const Link = styled.a`
  color: var(--color-link);
`;

const ActiveLink = styled.span`
  color: var(--gray-400);
`;

const Seperator = styled.span``;

export default BreadcrumbGroup;
