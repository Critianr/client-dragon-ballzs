import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import App from './App';
import {Docs} from './components/View/Docs'
import {Support} from './components/View/Support'
import {About} from './components/View/About'
export default function AppRouter() {
    return (
        
         <Routes>
            
            {/* <Switch> */}
            {/* <Fragment>  */}

            <Route  path={"/"} element={<App />} />
            {/* <Header /> */}
            <Route path={"/Docs"} element={<Docs />}  />
            <Route path={"/Support"} element={<Support />} />
            <Route path={"/About"} element={<About />} />
            {/* <Route path={'*'} element={<NotFound />} /> */}
            {/* </Fragment> */}
            {/* </Switch> */}
        </Routes>
        
        )
}