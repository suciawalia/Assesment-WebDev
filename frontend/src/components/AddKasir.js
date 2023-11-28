import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AddKasir = () => {
const [nama, setNama] = useState("");
const [hp, setHp] = useState("");
const navigate = useNavigate();

const saveKasir = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8082/kasir/insert',{
            nama,
            hp
        });
        navigate("/");
    }catch (error){
        console.log(error);
    }
}

  return (
    <div className="columns mt-5 is-center">
        <div className="column is-half">
            <form onSubmit={saveKasir}>
                <div className="field">
                    <label className="label">Nama</label>
                    <div className="control">
                        <input type="text" className="input" value={nama} onChange={(e)=>setNama(e.target.value)} placeholder='Nama'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">No.Hp</label>
                    <div className="control">
                        <input type="text" className="input" value={hp} onChange={(e)=>setHp(e.target.value)} placeholder='Hp'/>
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

export default AddKasir
