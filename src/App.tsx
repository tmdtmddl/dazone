import { useState } from "react";
import { Container, TextInput } from "./ui";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div>
      <Container.InputWrapper>
        <TextInput.Label />
      </Container.InputWrapper>
      <Container.Row>
        <p>123123</p>
        <p>123123</p>
      </Container.Row>
    </div>
  );
}

export default App;
