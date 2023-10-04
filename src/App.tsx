import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Router />
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
