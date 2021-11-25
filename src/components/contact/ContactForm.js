import Btn from "../layout/Bnt"
import ContactUs from "../texts/ContactUs"
import styles from './ContactForm.module.css'

function ContactForm () {
    return (
        <form className={styles.principal}>
            <ContactUs/>
            <Btn/> 
        </form>
    )
}

export default ContactForm