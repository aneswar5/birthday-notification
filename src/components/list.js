import React from 'react';
import './list.css';

const listdata = ({data, setdata}) => {
  function remove(id){
    let person=data.filter((filper)=>filper.id!==id);
    setdata(person);
  }
    return (
        <>
          {data.map((person) => {
          const { id, name, age, image } = person;
          return (
          <div key={id} className='data'>
            <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            <button className="databutton" onClick={()=>remove(id)}>Clear</button>
          </div> 
        );
      })}
        </>
    )
}
export default listdata;