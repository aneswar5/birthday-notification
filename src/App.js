import { useState } from 'react';
import './App.css';
import List from './components/list';
import data from './components/data.json';


function App() {
  const [birthday, setbirthday] = useState(data);
  return (
    <div className="main">
      <div className='container'>
        <h3>{birthday.length} birthday's list</h3>
        <List data={birthday} setdata={setbirthday}/>
        <button className="button" onClick={() => setbirthday([])}>clear all</button>
      </div>
    </div>
  );
}

export default App;
