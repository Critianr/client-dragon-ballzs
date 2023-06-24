import React from 'react'
import {useState, useEffect } from 'react'
import './App.css'
import { CardCharacter } from './components/Character/CardCharacter'
import img_title from './assets/dragonballLogo.png';
import { Header } from './components/Header/Header';


function App() {

const [data, setData] = useState(null);
const [character, setCharacter]= useState([]);
const [search, setSearch]=useState([])
const perGet=async()=>{
    // fetch('https://www.dragon-ballz-super-api.site/api',{
     await fetch('https://back-dragon-ballzs-production.up.railway.app/',
     
   { method: 'GET',  //    headers: ({'Content-type':'application/json'}),
   mode: 'no-cors', // <---
  }
  )
.then(response => response.json())
.then(character=>setCharacter(character.characters))
.catch(err=>{
console.log(err);
 })
 }
// const perGet = async () => {
//   try {
//     const response = await fetch('http://localhost:3000/api'
//     //   method: 'GET',
//     //   headers: { 'Content-type': 'application/json' },
//     //   cache: 'default'
//     // }
//     );

//     const character = await response.json();

//     console.log(character);
//   } catch (err) {
//     console.log('Error fetching data:', err);
//   }
// };

const characterGet=()=>{
     fetch('https://back-dragon-ballzs-production.up.railway.app/'
       
     )
     .then(response => response.json())
     .then(data=>setData(data.characters))
     .catch(err=>{
       console.log(err);
     })
  //    .then(response => response.json())
  //    .then(data=>setData(data.characters))
  //  .catch(error=>console.log(error))
}
useEffect(()=>{
  perGet();
  characterGet();

  },[]);
const handleChange=e=>{
    setSearch(e.target.value);
    
     filtrar(e.target.value)
    console.log("busqueda es : -> "+ e.target.value)
}
// const filtrar=(terminoBusqueda)=>{
//     var resBusqueda=character.filter((elemento)=>{
//     if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
//     || elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
//     ){
//     return elemento;
//     }
//     });
//     setData(resBusqueda);
//   }

  return (
    
    <div className="App">
      
      <div className="main">
        
      <Header />
        <img className='img_title' src={img_title} alt="drangonballz" />
        <div className='container-search'>
        <input className='search-character' type="text" 
        placeholder='Busca el personaje'
        value={search}
        onChange={handleChange}

        />
        </div>
        <div className='envol'>
        <CardCharacter data={data} />
        <footer>
            <p>Copyright 2023</p>
            <span></span>
            <p>If you want to collaborate in extending the functionality of the API 
            <span> contact us</span> greentreegreen7@gmail.com
            </p>
        </footer>
        
      </div>      
      </div>
    </div>
    )
}

export default App
