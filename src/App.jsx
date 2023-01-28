import {useState, useEffect } from 'react'
import './App.css'
import { CardCharacter } from './components/Character/CardCharacter'
import img_title from './assets/dragonballLogo.png';
import simbolo from './assets/prob.png';
function App() {

const [data, setData] = useState(null);
const [character, setCharacter]= useState([]);
const [search, setSearch]=useState([])

const perGet=()=>{
    fetch('https://back-dragon-ballzs-production.up.railway.app/',
    { method: 'GET',
    // headers: ({'Content-type':'application/json'}),
    mode: 'no-cors', // <---
    cache: 'default'
 })
    .then(response => response.json())
    .then(character=>setCharacter(character.characters))
    .catch(error=>console.log(error));
}

const characterGet=()=>{
    fetch('./db.json')
    .then(response => response.json())
    .then(data=>setData(data.characters.slice(0,5)))
    .catch(error=>console.log(error));
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
        {/* <header>
            <div>
            <a><img src={simbolo} /></a>
            <div>
            <a>Docs</a>
            <a>Supports us</a>
            </div>
            </div>
            <p>API Dragon Ball Z Super</p>

        </header> */}
      <div className="main">
      <header>
            <div>
            <a><img src={simbolo} /></a>
            <div>
            <a>Docs</a>
            <a>Supports us</a>
            </div>
            </div>
            <p>API Dragon Ball Z Super</p>

        </header>
        <img className='img_title' src={img_title} alt="" />
        <div className='container-search'>
        <input className='search-character' type="text" 
        placeholder='Busca el personaje'
        value={search}
        onChange={handleChange}

        />
        </div>
        <CardCharacter data={data} />
        <footer>
            <p>Copyright 2022</p>            
            <p>Si deseas colabboraciòn en extender la funcionalidad de la API</p><span>contactanos</span>
        </footer>
      </div>      
    </div>
  )
}

export default App
