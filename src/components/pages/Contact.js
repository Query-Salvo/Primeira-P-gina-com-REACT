import ContactForm from "../contact/ContactForm"
import WhoWeAre from "../texts/WhoWeAre"
import YourNetworks from "../texts/YourNetworks"
import styles from './Contact.module.css'

function Contact () {
    return (
        <div className={styles.content}>
            <WhoWeAre/>
            <YourNetworks/>
            <ContactForm/>
        </div>
    )
}

export default Contact