//import logo from './logo.svg';
import './styles/reset.css';
import './styles/style.css';
import Home from './components/Home.js';
import {Combate} from './components/Combate.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {

  return (
        <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/play" element={<Combate />} />
            </Routes>
      </Router>
  );


}

export default App;
