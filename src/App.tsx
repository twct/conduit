import Editor from "./Editor";
import { ThemeProvider } from "@emotion/react";

const theme = {
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Editor></Editor>
      </ThemeProvider>
    </>
  );
}

export default App;
