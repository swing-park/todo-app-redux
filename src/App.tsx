import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { GlobalStyle } from "styles";
import Home from "routes/Home";
import Detail from "routes/Detail";
import Story from "routes/Story";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
};

export default App;
