import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Mediapage from './Mediapage';
import Photopage from './Photopage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className = "app">
        <Header/>
        <div className='content'>
          <Routes>
            <Route path='/' element={
              <Mediapage/>
            } />
            <Route path='/photo' element={
              <Photopage/>
            } />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
