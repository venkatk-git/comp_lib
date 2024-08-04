import React, { Children } from "react";

//Stylesheet
import styled from "styled-components";

//Components
import FolderList from "./FolderList";

//Helpers & Constants
import { FOLDERS } from "../../../utils/constants";

function FolderTree() {
  const [folders, setFolders] = React.useState(null);

  React.useEffect(() => {
    setFolders(FOLDERS);
  }, [folders]);

  return (
    <Wrapper>
      <FolderWrapper>
        {folders?.map((folder, index) => (
          <FolderList key={index} folder={folder} />
        ))}
      </FolderWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const FolderWrapper = styled.div``;

export default FolderTree;
