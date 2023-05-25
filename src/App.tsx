import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sample01 } from "./pages/Sample01";
import { Sample02 } from "./pages/Sample02";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home></Home>}></Route>
        <Route path={`/sample/1`} element={<Sample01></Sample01>}></Route>
        <Route path={`/sample/2`} element={<Sample02></Sample02>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;