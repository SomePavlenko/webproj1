import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = ({remove,  ...props}) => {

    const removePostId = () => {

        remove(props.post)
    }


    return(
        <div className="post">
            <div className="post__content" >
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                {props.post.body}
                </div>
            </div>
            <divc className = 'post__btns'>
                <MyButton onClick = {removePostId}>Удалить</MyButton>
            </divc>
        </div>
    );
};

export default PostItem