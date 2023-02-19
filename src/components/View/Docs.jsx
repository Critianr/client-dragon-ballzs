// import { NavLink } from 'react-router-dom';
import {Header} from '../../components/Header/Header';
import './Docs.css';
const Docs =() =>{
    return(
    <>
      
      {/* <div className='Navigater'>
        <a id="introduction">Introduction</a>
        <h6></h6>
        <h6><NavLink to="/" className="">JavaScript client</NavLink></h6>
      </div> */}
      <div className='documentation'>
      <Header />
      <h1>Documentation</h1>
      <h2 id="introduction">Introduction</h2>
      <p>
      This documentation will help you get familiar with the resources of the Dragon Ball Z Super API and show you how to make different queries, so that you can get the most out of it.
      </p>
      <h1>Rest</h1>
      <p><strong> Url base: </strong><a href='https://back-dragon-ballzs-production.up.railway.app/'>https://back-dragon-ballzs-production.up.railway.app/</a></p>
      <p>The base url contains information about all available API's resources. All requests are <code className='language-text'>GET</code> requests and go over <code className='language-text'>https</code>. All responses will return data in <code className='language-text'>json</code>.</p>
      <p className="code-vista" data-language="shell"><span className="endpoint"><span className="request">GET </span>https://back-dragon-ballzs-production.up.railway.app/</span></p>
      <h2>Character</h2>
      <p>There is a total of 20 characters sorted by id.</p>
      <table>
        <tr>
        <td>Key</td>
        <td>Type</td>
        <td>Description</td>
        </tr>
        <tr>
          <td>id</td>
          <td>string</td>
          <td>The id of the character.</td>
        </tr>
        <tr>
          <td>name</td>
          <td>string</td>
          <td>The name of the character.</td>
        </tr>
        <tr>
          <td>race</td>
          <td>string</td>
          <td>The race of the character.</td>
        </tr>
        <tr>
          <td>gender</td>
          <td>string</td>
          <td>The gender of the character.</td>
        </tr>
        <tr>
          <td>bio</td>
          <td>string</td>
          <td>The bio of the character.</td>
        </tr>
        <tr>
          <td>bio</td>
          <td>string</td>
          <td>The bio of the character.</td>
        </tr>
        <tr>
          <td>health</td>
          <td>int</td>
          <td>The health of the character.</td>
        </tr>
        <tr>
          <td>attack</td>
          <td>int</td>
          <td>The attack of the character.</td>
        </tr>
        <tr>
          <td>defense</td>
          <td>int</td>
          <td>The defense of the character.</td>
        </tr>
        <tr>
          <td>kiRestoreSpeed</td>
          <td>int</td>
          <td>The kiRestoreSpeed of the character.</td>
        </tr>
        <tr>
          <td>abilities</td>
          <td>object</td>
          <td>The abilities of the character</td>
        </tr>
        <tr>
          <td>image</td>
          <td>string (url)</td>
          <td>Link to the character's image</td>
        </tr>
      </table>
      </div>
    </>
    )
}
export {Docs}