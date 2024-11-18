import React, { useContext, useEffect } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css';
import Signup from './Pages/Signup'
import { authContext } from './Store/Context';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import LoginPage from './Pages/Login';


function App() {
  const {setUser} = useContext(authContext)
  useEffect(() => {
      onAuthStateChanged(getAuth(),user=> setUser(user))
  })
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
