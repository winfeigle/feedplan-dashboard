import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <LoginForm />
        <SignupForm />
      </header>
    </div>
  );
}

export default App;
