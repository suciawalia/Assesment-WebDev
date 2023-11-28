import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";
import AddKasir from "./components/AddKasir";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/add" element={<AddKasir/>}/>
      <Route path="/edit/:kode" element={<EditUser />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
