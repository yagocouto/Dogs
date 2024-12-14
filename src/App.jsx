import React from 'react';
import './App.css';
//import Api from './api_test/Api';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login';
import Conta from './components/conta/Conta';
import { UserStorage } from './UserContext';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" end element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/conta" element={<Conta />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
