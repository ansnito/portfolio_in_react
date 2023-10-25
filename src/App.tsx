import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./routes";
import theme from "./configs/theme";
import { CssBaseline } from "@mui/material";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

// Function based component
// App => Name of component
// return (html element return)
// function export

// Router
// Wrap
// React-router-dom => BrowserRouter
//
