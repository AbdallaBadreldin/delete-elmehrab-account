import React, {useState, useEffect} from 'react';
import Home from './page/Home';
import Delete from './page/Delete.js';
import Login from './page/Login.js';
import Test from './page/Test.js';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                  npm build

               <Route path="/" element={<Home/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/delete" element={<Delete/>}/>
               <Route path="/Delete-Account" element={<Home/>}/>
               <Route path="/*" element={<Home/>}/>
               <Route path="/test" element={<Test/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;