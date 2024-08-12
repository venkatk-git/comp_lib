export function handleKeyPress(e) {
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
