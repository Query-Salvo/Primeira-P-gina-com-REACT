import styles from './ContactUs.module.css'
function ContactUs () {
    return (

        <div className={styles.principal}>
        <form className={styles.form_control}>
            <h1>Entre em Contato Conosco</h1>
            <label for ="name"> Seu Nome </label> 
            <input type ="text" id="name" placeholder="seu nome"/>
            <label for="email"> Seu Email</label>
            <input type="email" id="email" placeholder="email"/>
            <label for ="textarea">O que você quer nos dizer: </label>
            <textarea className={styles.box_text} id="txtArea" rows="10" cols="70" placeholder="Diga Aqui!"/>
            
        </form>
        </div>
    )
}

export default ContactUs 