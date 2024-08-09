import React from "react";

//Styles
import {
  MainWrapper,
  InputWrapper,
  SearchIcon,
  Input,
} from "./StyledComponents";

//Components
import Results from "./Results";

//Helpers & Constants
import { SEARCH_DATAS } from "../../../utils/constants";

function SimpleSearch() {
  const [searchVal, setSearchVal] = React.useState("");

  const results = SEARCH_DATAS.filter((data) =>
    data.toLowerCase().includes(searchVal.toLowerCase())
  ).slice(0, 7);

  function handleClick(val) {
    setSearchVal(val);
  }

  return (
    <MainWrapper>
      <InputWrapper>
        <SearchIcon />
        <Input
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Search"
        />
      </InputWrapper>
      <Results results={results} handleClick={handleClick} />
    </MainWrapper>
  );
}

export default SimpleSearch;
