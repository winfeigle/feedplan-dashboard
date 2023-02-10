import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div id="login-forms">
          <LoginForm />
          <SignupForm />
        </div>
      </header>
    </div>
  );
}

export default App;
