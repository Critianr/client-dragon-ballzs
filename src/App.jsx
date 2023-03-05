import {useState, useEffect } from 'react'
import './App.css'
import { CardCharacter } from './components/Character/CardCharacter'
import img_title from './assets/dragonballLogo.png';
import { Header } from './components/Header/Header';


function App() {

const [data, setData] = useState(null);
const [character, setCharacter]= useState([]);
const [search, setSearch]=useState([])

const perGet=()=>{
    fetch('https://dragon-ballz-super-api.site/api/'
    // ,
    // { method: 'GET',
    // // headers: ({'Content-type':'application/json'}),
    // mode: 'no-cors', // <---
    // cache: 'default'
    // }
    )
    .then(response => response.json())
    .then(character=>setCharacter(character.characters))
    .catch(error=>console.log(error));
}

const characterGet=()=>{
    fetch('https://dragon-ballz-super-api.site/api/'
    // , 
    //  { method: 'GET',
    //    headers: ({'Content-type':'application/json'}),
    //   //  mode: 'no-cors', // <---
    //   //  cache: 'default'
    // }
    )
    .then(response => response.json())
    .then(data=>setData(data.characters))
    .catch(err=>{
      console.log(err);
    })
    // .then(response => response.json())
    // .then(data=>setData(data.characters))
    // .catch(error=>console.log(error))
}
const handleChange=e=>{
    setSearch(e.target.value);
    filtrar(e.target.value)

    console.log("busqueda es : -> "+ e.target.value)
}
const filtrar=(terminoBusqueda)=>{
    var resBusqueda=character.filter((elemento)=>{
    if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
    return elemento;
    }
    });
    setData(resBusqueda);
  }
useEffect(()=>{
    characterGet();
    perGet();
    },[]);
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
