import {Link} from 'react-router-dom'
import Container from './Container'


function Navbar () {
    return (
        <nav>
            <Container>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Galeria</Link>
                    </li>
                    <li>
                        <Link to="/contact">Quem Somos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar