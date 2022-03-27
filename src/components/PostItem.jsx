import React from "react";

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
                <button>Удалить</button>
            </divc>
        </div>
    );
};

export default PostItem