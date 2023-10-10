import './App.css';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom'
import Nav from './components/nav/Nav';
import Routing from './components/routes/Routing';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Routing />
      </HashRouter  >

    </div>
  );
}

export default App;
