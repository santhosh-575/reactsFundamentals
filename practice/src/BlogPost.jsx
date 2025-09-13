import './BlogPost.css'
function BlogPost(post){
    return(
        <div className = "container">
            <p className = "Aname">Author : {post.author} </p>
            <p>Title : {post.title}</p>
            <p> Description : {post.description}</p>
        </div>
    )
}
export default BlogPost