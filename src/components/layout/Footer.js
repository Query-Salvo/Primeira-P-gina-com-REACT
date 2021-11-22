import {FaFacebook, FaInstagram, FaTwitter, FaPinterestSquare } from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer () {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaTwitter/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaPinterestSquare/>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span>&copy; 2021 Thiago Pacheco Faria</p> 
        </footer>
    )
}

export default Footer