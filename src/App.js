import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Home from './components/home/Home';
import AddQuestion from './components/addQuestion/AddQuestion';
import AddAnswer from './components/addAnswer/AddAnswer';
import './styles/App.css';

const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
        <Route path="home/questions" element={<AddQuestion />} />
        <Route path="home/answers" element={<AddAnswer />} />
      </Routes>
    </div>
  )
}

export default App;
