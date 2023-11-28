import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const BarangList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllBarang();
  }, []);

  const getAllBarang = async () => {
    const response = await axios.get('http://localhost:8082/barang/');
    setUsers(response.data);
  }

  const deleteBarang = async (kode) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this Barang?");
    
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8082/barang/delete/${kode}`);
        getAllBarang();
      } catch (error) {
        console.log(error);
      }
    }
  }  

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`../add/barang`} className='button is-success'>Add New</Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Nama Barang</th>
              <th>Satuan</th>
              <th>Harga Satuan</th>
              <th>Stok</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.kodeBarang}>
                <td>{index + 1}</td>
                <td>{user.namaBarang}</td>
                <td>{user.satuan}</td>
                <td>{user.hargaSatuan}</td>
                <td>{user.stok}</td>
                <th>Action</th>
                <td>
                  <Link to={`../edit/barang/${user.kodeBarang}`} className="button is-small is-info">Edit</Link>
                  <button onClick={() => deleteBarang(user.kodeBarang)} className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BarangList;
