import styles from './Home.module.css'
import Post1 from "../posts/Post1"
import Post2 from "../posts/Post2"
import Post3 from '../posts/Post3'
import Post4 from '../posts/Post4'
import Post5 from '../posts/Post5'
import Post6 from '../posts/Post6'


function Home () {
    return (
        <div className={styles.principal}>
            <h1 className={styles.title}> Nossos últimos trabalhos: </h1>

            <div className={styles.posts}> 
                <Post1/>
                <Post2/>
                <Post3/>
                <Post4/>
                <Post5/>
                <Post6/>
                
            </div>
            
        </div>
    )
}

export default Home