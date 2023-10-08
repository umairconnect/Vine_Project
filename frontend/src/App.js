import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/nav/Nav';
import Routing from './components/routes/Routing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>

    </div>
  );
}

export default App;
