
import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Services from './routes/Services.js';
import Reviews from './routes/Reviews';
import Contact from './routes/Contact.js';


function App() {
  return (
    <Router> 
      <div className='App'> 
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/reviews' element={<Reviews/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
  
      </div> 
    </Router>
  )
}

export default App;