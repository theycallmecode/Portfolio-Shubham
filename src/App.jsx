// import { BrowserRouter } from "react-router-dom";                [original]

import { BrowserRouter, Routes, Route } from "react-router-dom";   // from gemini
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;