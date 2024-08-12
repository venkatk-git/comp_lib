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

//Functions

//Hooks
import useRoveFocus from "../../hooks/useRoveFocus";

//Helpers & Constants
import { SEARCH_DATAS } from "../../../utils/constants";

function YTSearch() {
  const [searchVal, setSearchVal] = React.useState("");

  const results = SEARCH_DATAS.filter((data) =>
    data.toLowerCase().includes(searchVal.toLowerCase())
  ).slice(0, 7);

  const [currFocus, setCurrFocus] = useRoveFocus(results.length);

  function handleClick(val) {
    setSearchVal(val);
  }

  function handleKeyPress(e) {
    if (e.key == "ArrowDown")
      setCurrFocus((prev) =>
        prev === null || prev === results.length - 1 ? 0 : prev + 1
      );

    if (e.key == "ArrowUp")
      setCurrFocus((prev) =>
        prev != 0 && prev != null ? prev - 1 : results.length - 1
      );

    if (e.key == "Enter") handleClick(results[currFocus]);
  }

  return (
    <MainWrapper>
      <InputWrapper>
        <SearchIcon />
        <Input
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Search"
          onKeyDown={handleKeyPress}
        />
      </InputWrapper>
      <Results
        results={results}
        handleClick={handleClick}
        currFocus={currFocus}
      />
    </MainWrapper>
  );
}

export default YTSearch;
