import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return(
        <div className="post">
            <div className="post__content" >
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                {props.post.body}
                </div>
            </div>
            <divc className = 'post__btns'>
                <MyButton>Удалить</MyButton>
            </divc>
        </div>
    );
};

export default PostItem