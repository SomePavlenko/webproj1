import React from "react";
import { Link, useParams } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = ({remove,  ...props}) => {
    
    const removePostId = () => {
        
        remove(props.post)
    }

    let {id} = useParams()
    id = JSON.stringify(props.post.id)

    return(
        <div className="post">
            <div className="post__content" >
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                {props.post.body}
                </div>
            </div>
            <div className = 'post__btns'>
                <MyButton> <Link to={`/posts/${id}`}> Открыть </Link> </MyButton>
                <MyButton onClick = {removePostId}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem