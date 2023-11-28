import {BrowserRouter, Routes, Route} from "react-router-dom"

import AddKasir from "./components/AddKasir";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path="/add" element={<AddKasir/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
