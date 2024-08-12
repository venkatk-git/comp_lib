//Dependencies
import React from "react";

//Styles
import styled from "styled-components";

//Components
import Tag from "../Tag";
import SearchTag from "../SearchTag";

function AddTag() {
  const [showSearch, setShowSearch] = React.useState(false);

  function handleAddTag() {
    setShowSearch((prev) => !prev);
  }
  return (
    <Wrapper>
      <Tag typicalTag={false} onClick={handleAddTag}>
        + Tag
      </Tag>
      {showSearch && <SearchTag />}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default AddTag;
