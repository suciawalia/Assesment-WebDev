import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBarang = () => {
    const [namaBarang, setNamaBarang] = useState("");
    const [satuan, setSatuan] = useState("");
    const [hargaSatuan, setHargaSatuan] = useState("");
    const [stok, setStok] = useState("");
    const navigate = useNavigate();
    const { kode } = useParams();

    console.log(kode);
  
    useEffect(() => {
      getBarangById();
    }, []);
  
    const updateBarang = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost:8082/barang/update/${kode}`, {
          namaBarang,
          satuan,
          hargaSatuan,
          stok
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
  
    const getBarangById = async () => {
      try {
        console.log("kode: ", kode);
        const response = await axios.get(`http://localhost:8082/barang/${kode}`);
        const { namaBarang, satuan, hargaSatuan, stok} = response.data;
        console.log(response.data);
        setNamaBarang(namaBarang);
        setSatuan(satuan);
        setHargaSatuan(hargaSatuan);
        setStok(stok)
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="columns mt-5 is-center">
        <div className="column is-half">
          <form onSubmit={updateBarang}>
            <div className="field">
              <label className="label">Nama Barang</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={namaBarang}
                  onChange={(e) => setNamaBarang(e.target.value)}
                  placeholder="Nama Barang"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Satuan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={satuan}
                  onChange={(e) => setSatuan(e.target.value)}
                  placeholder="satuan"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Harga Satuan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={hargaSatuan}
                  onChange={(e) => setHargaSatuan(e.target.value)}
                  placeholder="harga satuan"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">HStok</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={stok}
                  onChange={(e) => setStok(e.target.value)}
                  placeholder="stok"
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
  
  export default EditBarang;