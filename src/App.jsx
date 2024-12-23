import React from 'react';
import './App.css';
//import Api from './api_test/Api';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login';
import { UserStorage } from './UserContext';
import Photo from './components/Photo/Photo';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import User from './components/User/User';
import UserProfile from './components/User/userProfile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" end element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/foto/:id" element={<Photo />} />
            <Route path="/perfil/:user" element={<UserProfile />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
