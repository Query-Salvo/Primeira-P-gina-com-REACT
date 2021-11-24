import styles from "./Gallery.module.css"
import Post1 from "../posts/Post1"
import Post2 from "../posts/Post2"
import Post3 from "../posts/Post3"
import Post4 from "../posts/Post4"
import Post5 from "../posts/Post5"
import Post6 from "../posts/Post6"
import Post7 from "../posts/Post7"
import Post8 from "../posts/Post8"
import Post9 from "../posts/Post9"
import Post10 from "../posts/Post10"
import Post11 from "../posts/Post11"
import Post12 from "../posts/Post12"
import Post13 from "../posts/Post13"
import Post14 from "../posts/Post14"
import Post15 from "../posts/Post15"



function Gallery () {
    return (
        <div className={styles.principal}>
            <h1 className={styles.title}>Nossa Galeria</h1>
            <div className={styles.posts}>
                <Post1/>
                <Post2/>
                <Post3/>
                <Post4/>
                <Post5/>
                <Post6/>
                <Post7/>
                <Post8/>
                <Post9/>
                <Post10/>
                <Post11/>
                <Post12/>
                <Post13/>
                <Post14/>
                <Post15/>
            </div>
        </div>
    )
}

export default Gallery