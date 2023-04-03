import './App.css';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import Layaout from './components/commun/Layaout';
import {Home, Book, Login, Request, SinglBook, ErrorNotFound} from './pages/routes'

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layaout>{<Home />}</Layaout>} />
      <Route path="/book" element={ <Layaout><Book /></Layaout>} />      
      <Route path="/request" element={ <Layaout><Request /></Layaout>} />      
      <Route path="/singlebook" element={ <Layaout><SinglBook /></Layaout>} />      
      <Route path="/login" element={ <Login />  } />      
      <Route path="*" element={<Layaout>{<ErrorNotFound />}</Layaout>} />
      </Routes>
    </Router>
  );
}

export default App;
