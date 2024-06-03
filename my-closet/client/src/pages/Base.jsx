import React from 'react';
import logo from '../../assets/logo.png'; 
import backgroundImage from '../../assets/fundohomepage.webp'; 
import 'tailwindcss/tailwind.css'; 

const App = () => {

  const handleSignUpClick = () => {
    window.location.href = '/sign-in';
  };

  return (
    <div 
      className="App flex flex-col justify-between items-center min-h-screen relative text-gray-800"
      style={{ 
        backgroundColor: '#f8f9fa', 
        fontFamily: 'Roboto, Arial, Helvetica, sans-serif', 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }}
    >
      <img src={logo} alt="Logo" className="logo w-40 h-auto mt-5" />
      <header className="App-header bg-black bg-opacity-70 p-7 rounded-lg text-white w-4/5 max-w-lg shadow-lg flex flex-col items-center mx-auto">
        <h1 className="text-3xl font-bold my-2">Bem-vindo ao My Closet!</h1>
        <p className="text-lg my-2">Seu guarda-roupa virtual.</p>
        <p className="text-lg my-4">Todas suas roupas em um único lugar!</p>
      </header>
      <button 
        className="sign-up-button bg-black text-white border-none py-3 px-8 rounded-full text-xl cursor-pointer shadow-lg transition-transform transform hover:bg-white hover:-translate-y-0.5 mb-5 w-4/5 max-w-xs mx-auto"
        onClick={handleSignUpClick}
      >
        Explorar
      </button>
    </div>
  );
}

export default App;
