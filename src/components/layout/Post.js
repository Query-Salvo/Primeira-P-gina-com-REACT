import styles from './Post.module.css'

function Post ({title, image}) {
    return (
        <section className={styles.section}>
            <img src={image}/>
            <div className={styles.overlay}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </section>
        
    )
}

export default Post