import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preference from './components/Preference/Preference';
import Login from './components/Login/Login';
// import useToken from './userToken';

function setToken(userToken){
localStorage.setItem('token', JSON.stringify(userToken))
}

function getToken(){
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken.token

}
const App = () => {
  //const token = getToken();
 const [token,setToken] =useState();
 if(!token)
 {
  return <Login setToken={setToken}/>
 }
  return (
    <div className='wrapper'>
      <h1>Hello</h1>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/preference' element={<Preference/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
