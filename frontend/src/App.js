import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from "./components/UserList&Delete";
import EditUser from "./components/EditUser";
import AddKasir from "./components/AddKasir";
import AddBarang from "./components/AddBarang";
import EditBarang from "./components/EditBarang";
import BarangList from "./components/BarangList&Delete";
import AddTenan from "./components/AddTenan";
import EditTenan from "./components/EditTenan";
import TenanList from "./components/TenanList&Delete";

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
      <Route path="/add/tenan" element={<AddTenan />} />
      <Route path="/edit/tenan/:kode" element={<EditTenan />} />
      <Route path="/tenan" element={<TenanList />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
