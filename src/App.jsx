// import { useState } from 'react'
import {useState, useEffect } from 'react'
import './App.css'
import { CardCharacter } from './components/Character/CardCharacter/CardCharacter'
import img_title from './assets/dragonballLogo.png';
function App() {
  

  return (
    <div className="App">
      <div className="main">
        <img className='img_title' src={img_title} alt="" />
        <div className='container-search'>
        <input className='search-character' type="text" placeholder='Busca el personaje' />
        </div>
        {/* <div className='card-character'> */}
        <CardCharacter />
        <footer>
            <p>Copyright 2022</p>            
            <p>Si deseas colabboraciòn en extender la funcionalidad de la API</p><span>contactanos</span>
        </footer>
        {/* </div> */}
        {/* <div className='list-character'>
        </div> */}
      </div>      
      {/* <Card /> */}
      {/* <div className="container searchContainer">
<div className="header">
    <img src="/assets/dragonballLogo.png" />
</div>
<div className="character-list">
    <h1>Character List</h1>
    <p>Type one of these character names, into the search box below. It will automatically, be converted to all
        lowercase.</p>
    <ul>
        <li>Goku</li>
        <li>Vegeta</li>
        <li>Gohan</li>
        <li>Trunks</li>
        <li>Frieza</li>
        <li>Cell</li>
        <li>Buu</li>
        <li>Beerus</li>
        <li>Piccolo</li>
        <li>Gotenks</li>
        <li>Hit</li>
        <li>Krilin</li>
        <li>Jiren</li>
        <li>Tien</li>
        <li>Android 17</li>
        <li>Android 18</li>
        <li>Broly</li>
        <li>Vegito</li>
        <li>Gogeta</li>
        <li>Goku Black</li>
    </ul>
</div>
<div className="search">
    <form className="dragonball-character">
        <div className="container-search">
            <label>
                <h1>Dragonball Character Database</h1>
            </label>
            <label>
                <p>Enter a characters name to fetch the user profile</p>
            </label>
            <input type="text" className="search-characters" placeholder="Search for a character" />
        </div>
    </form>

</div>
<div className="profile"></div>
</div>       */}
    </div>
  )
}

export default App
