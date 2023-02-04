import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Ecectika_Gallery from './components/Main_Gallery/Gallery';
import Sponsor from './components/Sponsors/Sponsor';
import Overall_Team from './components/Team/Overall_Team';
import MultiActionAreaCard from './materialUI/CardComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import OverAll_Design from './OverAll_Design';



function App() {
  return (
    <div>
    
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< OverAll_Design />}></Route>
                 <Route  path='team' element={< Overall_Team/>}></Route>
          </Routes>
          </div>
       </Router>
   </div>
  );
}

export default App;
