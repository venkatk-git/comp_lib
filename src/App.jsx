//Stylesheet
import "./App.css";

//Components
import Menu from "./lib/components/Menu/Menu";
import FolderTree from "./lib/components/FolderTree";
import Accordion from "./lib/components/Accordion";

//Helpers & Constans
import { MENUS, values } from "./utils/constants";

function App() {
  return (
    <>
      <div>
        <Menu menus={MENUS} />
      </div>
    </>
  );
}

export default App;
