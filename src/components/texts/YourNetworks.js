import styles from './YourNetworks.module.css'
import {FaFacebook, FaInstagram, FaTwitter, FaPinterestSquare } from 'react-icons/fa'
function YourNetworks () {
    return (
        <div className={styles.title}>
            <h1>Siga nos nas redes sociais: </h1>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaTwitter/>
                </li>
                <li>
                    <FaPinterestSquare/>
                </li>
            </ul>
        </div>
    )
}

export default YourNetworks