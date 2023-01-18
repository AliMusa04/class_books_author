import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Authors from "./page/Authors/Authors";
import Books from "./page/Books/Books";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Authors/>}/>
        <Route path="/books" element={<Books/>}/>
      </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
