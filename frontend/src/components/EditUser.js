import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditKasir = () => {
    const [nama, setNama] = useState("");
    const [hp, setHp] = useState("");
    const navigate = useNavigate();
    const { kode } = useParams();

    console.log(kode);
  
    useEffect(() => {
      getKasirByKode();
    }, []);
  
    const updateKasir = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost:8082/kasir/update/${kode}`, {
          nama,
          hp,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
  
    const getKasirByKode = async () => {
      try {
        console.log("kode: ", kode);
        const response = await axios.get(`http://localhost:8082/kasir/${kode}`);
        const { nama, hp } = response.data;
        console.log(response.data);
        setNama(nama);
        setHp(hp);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="columns mt-5 is-center">
        <div className="column is-half">
          <p>Edit Kasir</p>
          <form onSubmit={updateKasir}>
            <div className="field">
              <label className="label">Nama</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
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
  
  export default EditKasir;