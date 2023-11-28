import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTenan = () => {
    const [namaTenan, setNamaTenan] = useState("");
    const [hp, setHp] = useState("");
    const navigate = useNavigate();
    const { kode } = useParams();

    console.log(kode);
  
    useEffect(() => {
      getTenanById();
    }, []);
  
    const updateTenan = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost:8082/tenan/update/${kode}`, {
          namaTenan,
          hp,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
  
    const getTenanById = async () => {
      try {
        console.log("kode: ", kode);
        const response = await axios.get(`http://localhost:8082/tenan/${kode}`);
        const { namaTenan, hp } = response.data;
        console.log(response.data);
        setNamaTenan(namaTenan);
        setHp(hp);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="columns mt-5 is-center">
        <div className="column is-half">
          <form onSubmit={updateTenan}>
            <div className="field">
              <label className="label">Nama Tenan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={namaTenan}
                  onChange={(e) => setNamaTenan(e.target.value)}
                  placeholder="Nama"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Hp</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  placeholder="Hp"
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default EditTenan;