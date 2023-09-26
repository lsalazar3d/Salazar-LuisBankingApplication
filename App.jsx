import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/home/Home'
import Createaccount from './components/createaccount/Createaccount';
import Deposit from './components/deposit/deposit';
import Withdraw from './components/withdraw/withdraw';
import Alldata from './components/alldata/alldata';
import Cashbalance from './components/cashbalance/Cashbalance';
import Navbar from 'react-bootstrap/Navbar';
import { UserProvider } from './components/usercontext/UserContext'; 


function App() {
  
  return (
    <UserProvider>
    <div>
   
            <Router>
              
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/createaccount" element={<Createaccount />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/alldata" element={<Alldata />} />
              <Route path="/cashbalance" element={<Cashbalance />} />
              </Routes>

            </Router>
   
          
          </div>
          </UserProvider>
          
  )
}

export default App


