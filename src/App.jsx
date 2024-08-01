import "./App.css";
import TextField from "./lib/components/TextField";

function App() {
  return (
    <>
      <div>
        <TextField
          label="Label"
          type="outlined"
          assistiveText="Helper Text"
        ></TextField>
      </div>
    </>
  );
}

export default App;
