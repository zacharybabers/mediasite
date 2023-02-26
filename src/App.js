import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Mediapage from './Mediapage';
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
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
