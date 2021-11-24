import Btn from "../layout/Bnt"
import ContactUs from "../texts/ContactUs"
import WhoWeAre from "../texts/WhoWeAre"
import YourNetworks from "../texts/YourNetworks"
import styles from './Contact.module.css'

function Contact () {
    return (
        <div className={styles.content}>
            <WhoWeAre/>
            <YourNetworks/>
            <ContactUs/>
            <Btn/>
            
        </div>
    )
}

export default Contact