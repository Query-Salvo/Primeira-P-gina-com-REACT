
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Post from './components/layout/Post';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Home from './components/pages/Home';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Navbar/>
        <Container>
          <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route exact path="/gallery" element = {<Gallery/>}/>
            <Route exact path="/contact" element = {<Contact/>}/>
          </Routes>
        </Container>
         
        
      <Footer></Footer>
    </BrowserRouter>
    
    </div>
  )
}

export default App;
