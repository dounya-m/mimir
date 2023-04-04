import './App.css';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import Layaout from './components/commun/Layaout';
import {Home, Book, Login, Request, SinglBook, ErrorNotFound} from './pages/routes'
// import {BookProvider} from './contexts/BookContext'

function App() {

  return (
    <Router>
      <Routes>
      {/* <BookProvider> */}
      <Route path="/" element={<Layaout>{<Home />}</Layaout>} />
      <Route path="/book" element={ <Layaout><Book /></Layaout>} />      
      <Route path="/request" element={ <Layaout><Request /></Layaout>} />      
      <Route path="/singlebook" element={ <Layaout><SinglBook /></Layaout>} />      
      <Route path="/login" element={ <Login />  } />      
      <Route path="*" element={<Layaout>{<ErrorNotFound />}</Layaout>} />
      {/* </BookProvider> */}
      </Routes>
    </Router>
  );
}

export default App;
