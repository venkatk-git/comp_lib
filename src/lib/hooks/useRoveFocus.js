//Dependecies
import React from "react";
import { useKeyPressEvent } from "react-use";

function useRoveFocus(size) {
  const [currFocus, setCurrFocus] = React.useState(null);

  useKeyPressEvent("ArrowDown", () => {
    setCurrFocus((prev) => (prev != null || prev < size - 1 ? prev++ : 0));
  });

  useKeyPressEvent("ArrowDown", () => {
    setCurrFocus((prev) => (prev != null || prev > 0 ? prev-- : prev));
  });

  return [currFocus, setCurrFocus];
}

export default useRoveFocus;
