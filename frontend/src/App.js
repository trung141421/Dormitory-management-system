import logo from './logo.svg';
import './App.css';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Home } from './Pages/Home';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      
      {
         currentForm ==="home"? <Home onFormSwitch={toggleForm}/>:
         currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      
    </div>
  );
}
export default App;
