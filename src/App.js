
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Home from './components/pages/Home';

function App() {
  return (
    <div>
    <h1>Olá</h1>
    <p>Olá mundo olá mundo</p>
    <BrowserRouter>
        <Navbar/>
        <Container>
          <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route exact path="/gallery" element = {<Gallery/>}/>
            <Route exact path="/contact" element = {<Contact/>}/>
          </Routes>
        </Container>
          
        

    </BrowserRouter>
    </div>
  )
}

export default App;
