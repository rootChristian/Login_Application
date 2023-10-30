/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
import React from 'react';
import { ToastContainer } from "react-toastify";
import {
  Routes, Route
} from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { Container } from './styles/styledApp/App.Styled';
import ErrorPage from './pages/errorPage/ErrorPage';
import Layout from './components/layout/Layout';
import Users from './pages/users/Users';

function App() {
  return (
    <Container>
      <ToastContainer />
      <Routes>
        <Route path='/' exact element={<Layout />}>
          <Route path='/' exact element={<Home />} />
          <Route path='/users' exact element={<Users />} />
          <Route path='/login' exact element={<Login />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
}

export default App;
