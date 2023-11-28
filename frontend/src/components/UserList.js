import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllKasir();
  }, []);

  const getAllKasir = async () => {
    const response = await axios.get('http://localhost:8082/kasir');
    setUsers(response.data);
  }

  const deleteKasir = async (kode) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this Kasir?");
    
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8082/kasir/delete?kode_kasir=${kode}`);
        getAllKasir();
      } catch (error) {
        console.log(error);
      }
    }
  }  

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className='button is-success'>Add New</Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Hp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.kode_kasir}>
                <td>{index + 1}</td>
                <td>{user.nama}</td>
                <td>{user.hp}</td>
                <td>
                  <Link to={`edit/${user.kode_kasir}`} className="button is-small is-info">Edit</Link>
                  <button onClick={() => deleteKasir(user.kode_kasir)} className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList;
