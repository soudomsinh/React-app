import React from "react";
import PropTypes from 'prop-types'

function Post({id, title, deletePost}){
    return(
        <div className="Post">
            <button className="Post__delete" onClick={()=>deletePost(id)}>X</button>
            <div className="Post__title">{title}</div>
            <img className="Post__image" src={`https://source.unsplash.com/random?${title}`} alt={title} />
        </div>
    )

}

Post.propTypes ={
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    deletePost:PropTypes.func.isRequired
}

export default Post;