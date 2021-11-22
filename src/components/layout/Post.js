import styles from './Post.module.css'

function Post ({title, image}) {
    return (
        <section>
        <h1>{title}</h1>
        <img src={image}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
        
    )
}

export default Post