import {useState, useEffect } from 'react'
import './CardCharacter.css'
import './CardCharacter'
// import data from '../../../db.json'; 
// funciono

function CardCharacter(){
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('../../../db.json')
      .then(response => response.json())
      .then(data=> setData(data.characters))
      .catch(error => console.log(error));
  }, []);

    return (
      <>
      {data && data.map(item => (
      <div key={item.id} className='container-card-character'>
        <img className="character-image" src={item.img}/>
        <h2> {item.name}</h2>
        <p>{item.bio}</p>
        
        <li>Race: {item.race}</li>
        <li>Abilities: {item.abilities}</li>
        
      </div>
       ))}
       </>
        
      );
}
export {CardCharacter}