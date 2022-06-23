import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import MyButton from '../components/UI/button/MyButton';

const PostIdPage = () => {

    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, erorr] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comErorr] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div>
            {isLoading
                ? <Loader />
                : <div> {post.id}. {post.title} </div>
            }
            <h1>
                Comments
            </h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div style={{ marginTop: 45 }}>
                            <h5>
                                {comm.email}
                            </h5>
                            <div>
                                {comm.body}
                            </div>
                            <hr />
                        </div>
                    )}
                </div>
            }
            <div style={{ textAlign: 'center', padding: 20 }}>
                <Link to="/posts">
                    <MyButton
                        style={{ width: 200, height: 50 }}>
                        Назад
                    </MyButton>
                </Link>
            </div>
        </div>
    );
};

export default PostIdPage;