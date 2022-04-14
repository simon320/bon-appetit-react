import React from 'react';
import './style.css'
import Header from './components/header/Header';
import LatestRecipes from './components/latest-recipes/LatestRecipes';
import Tips from './components/tips/Tips';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />

      <div className="contenedor__fondo">
        <LatestRecipes />
        <Tips />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
