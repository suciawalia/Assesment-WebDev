import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AddBarang = () => {
const [namaBarang, setNamaBarang] = useState("");
const [satuan, setSatuan] = useState("");
const [hargaSatuan, setHargaSatuan] = useState("");
const [stok, setStok] = useState("");
const navigate = useNavigate();

const saveBarang = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8082/barang/insert',{
            namaBarang,
            satuan,
            hargaSatuan,
            stok
        });
        navigate("/");
    }catch (error){
        console.log(error);
    }
}

  return (
    <div className="columns mt-5 is-center">
        <div className="column is-half">
            <form onSubmit={saveBarang}>
                <div className="field">
                    <label className="label">Nama Barang</label>
                    <div className="control">
                        <input type="text" className="input" value={namaBarang} onChange={(e)=>setNamaBarang(e.target.value)} placeholder='Nama'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Satuan</label>
                    <div className="control">
                        <input type="text" className="input" value={satuan} onChange={(e)=>setSatuan(e.target.value)} placeholder='satuan'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Harga Satuan</label>
                    <div className="control">
                        <input type="text" className="input" value={hargaSatuan} onChange={(e)=>setHargaSatuan(e.target.value)} placeholder='hargasatuan'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Stok</label>
                    <div className="control">
                        <input type="text" className="input" value={stok} onChange={(e)=>setStok(e.target.value)} placeholder=''/>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button us-success'>Add</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddBarang
