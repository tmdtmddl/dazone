import { useState } from "react";
import { TextInput } from "./ui";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div>
      <div>App</div>
      <TextInput.Input className="px-5" />
      <select name="" id="">
        <option value="">hello</option>
      </select>
      <button onClick={() => document.body.classList.toggle("dark")}>
        {isDarkMode ? "Darkmode" : "light mode"}
      </button>
    </div>
  );
}

export default App;
