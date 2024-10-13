import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Profile from './Pages/Profile/Profile';
import Members from './Pages/Members/Members';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Update from './Pages/Update-Delete/Update';
import reportWebVitals from './reportWebVitals';
import ExerciseDetail from './Pages/ExercisesDetailsPage/ExerciseDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/members" element={<Members />} />
        <Route path="/update" element={<Update />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
