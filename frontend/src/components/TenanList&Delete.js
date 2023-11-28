import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const TenanList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllTenan();
  }, []);

  const getAllTenan = async () => {
    const response = await axios.get('http://localhost:8082/tenan');
    setUsers(response.data);
  }

  const deleteTenan = async (kode) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this Tenan?");
    
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8082/tenan/delete/${kode}`);
        getAllTenan();
      } catch (error) {
        console.log(error);
      }
    }
  }  

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`../add/tenan`} className='button is-success'>Add New</Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Nama Tenan</th>
              <th>Hp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.kodeTenan}>
                <td>{index + 1}</td>
                <td>{user.namaTenan}</td>
                <td>{user.hp}</td>
                <td>
                  <Link to={`../edit/tenan/${user.kodeTenan}`} className="button is-small is-info">Edit</Link>
                  <button onClick={() => deleteTenan(user.kodeTenan)} className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TenanList;
