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
               <Route path="/login_mehrab" element={<Login/>}/>
               <Route path="/delete_mehrab" element={<Delete/>}/>
               <Route path="/Delete-Account_mehrab" element={<Home/>}/>
               <Route path="/*" element={<Home/>}/>
               <Route path="/test_mehrab" element={<Test/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;