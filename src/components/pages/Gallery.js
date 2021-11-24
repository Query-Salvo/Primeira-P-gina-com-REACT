import Post1 from "../posts/Post1"
import Post2 from "../posts/Post2"
import Post3 from "../posts/Post3"
import Post4 from "../posts/Post4"

function Gallery () {
    return (
        <div>
            <h1>Nossa Galeria</h1>
            <Post1/>
            <Post2/>
            <Post3/>
            <Post4/>
        </div>
    )
}

export default Gallery