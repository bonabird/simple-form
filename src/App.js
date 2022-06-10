import './App.css';
import logo from './spiral.svg';
// import Input from './pages/input';
import { useState } from 'react';
import Output from './pages/output';
import TextInput from './components/textinput';

function App() {
  const [screen, setScreen] = useState(true)
  function ManageClick() {
    setScreen(prevState => !prevState)
}
  return (
    <div className="App">
      <header className="App-header">
        <button className="App-button" onClick={ManageClick} >
          <img src={logo} className="App-logo" alt="logo" />
        </button>
      </header>


      {screen ? <TextInput /> : <Output />}

    </div>
  );
}

export default App;