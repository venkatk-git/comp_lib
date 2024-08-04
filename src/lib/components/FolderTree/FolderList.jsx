import React from "react";

//Stylesheet
import styled from "styled-components";

//Components
import { FaFolder } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function FolderList({ folder }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FolderListWrapper>
      <Span>
        <Collapse isOpen={isOpen} handleCollapse={handleCollapse} />
        <FaFolder />
        {folder.name}
      </Span>
      {folder.folders?.map(
        (folder) =>
          isOpen && (
            <NestedFolderList key={folder.name}>
              <FolderList folder={folder} />
            </NestedFolderList>
          )
      )}
    </FolderListWrapper>
  );
}

function Collapse({ isOpen, handleCollapse }) {
  const Tag = isOpen ? Open : Close;

  return <Tag onClick={handleCollapse} />;
}

const FolderListWrapper = styled.ul`
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
`;

const NestedFolderList = styled.ul`
  margin: 0;
  margin-top: 8px;
  padding: 0;
  margin-left: 18px;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Open = styled(FaAngleDown)`
  font-size: 0.8rem;
  cursor: pointer;
`;

const Close = styled(FaAngleRight)`
  font-size: 0.8rem;
  cursor: pointer;
`;

export default FolderList;
