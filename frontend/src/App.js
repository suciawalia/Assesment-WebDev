import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from "./components/UserList&Delete";
import EditUser from "./components/EditUser";
import AddKasir from "./components/AddKasir";
import AddBarang from "./components/AddBarang";
import EditBarang from "./components/EditBarang";
import BarangList from "./components/BarangList&Delete";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/add" element={<AddKasir/>}/>
      <Route path="/edit/kasir/:kode" element={<EditUser />} />
      <Route path="/add/barang" element={<AddBarang />} />
      <Route path="/edit/barang/:kode" element={<EditBarang />} />
      <Route path="/barang" element={<BarangList />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
