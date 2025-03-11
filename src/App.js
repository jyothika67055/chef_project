import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CookAndChefApp from './pages/CookAndChefApp';
import Login from './pages/Login';
import ApplyForm from './pages/ApplyForm';
import LoginIt from './pages/LoginIt';
import ChefAcademy from './pages/ChefAcademy';
import Main from './pages/Experts';
import Recipe from './pages/Recipe';
import LearnMore from './pages/LearnMore';
import Recipes from './pages/Recipes';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CookAndChefApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="/LoginIt" element={<LoginIt/>} />
        <Route path="/chefacademy" element={<ChefAcademy />} />
        <Route path="/experts" element={<Main/>} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;