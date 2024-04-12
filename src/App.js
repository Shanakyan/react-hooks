import React from 'react';
import './App.css';
// import Popup from './Components/Popup/Popup'
import {useState, useEffect} from 'react';

function App() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());
  setInterval(()=>setNow(new Date().toLocaleTimeString()),1000);
  const [open, setOpen] = useState(false);


  return (
    <div className="container">
      <h1>{now}</h1>
     <button onClick={()=>{setOpen(true) }} type='button' className='btn btn-success'>Открыть модальное окно</button>
     {/* условный рендер модального окна */}
     {open &&  ( <div className="popup">
      <div className='wrap'>
        <p className="modal-txt">Это простое модальное окно!</p>
        <button type='button' onClick={()=>setOpen(false)} className="modalCloseItem">&times;</button>           
      </div>  
        </div>) }
    
    </div>
    
  );
}

export default App;

