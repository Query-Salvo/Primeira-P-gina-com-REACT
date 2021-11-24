import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo.svg'



function Navbar () {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Viel" className={styles.logo}/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/gallery">Galeria</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Quem Somos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar