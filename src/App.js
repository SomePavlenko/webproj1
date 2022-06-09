import React, { useMemo, useRef, useState } from "react"; 
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'гг', body: 'аа'},
        {id: 2, title: 'аа', body: 'бб'},
        {id: 3, title: 'вв', body: 'яя'},
        {id: 4, title: 'гг', body: 'аа'},
        {id: 5, title: 'аа', body: 'бб'},
        {id: 6, title: 'вв', body: 'яя'},
    ])

    const [filter, setFilter] = useState({ sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
   

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    

    return ( 
    < div className = "App" >

        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Создать пост 
        </MyButton>
        <MyModal visible={modal} setVisible={setModal} >
            <PostForm create = {createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}} />
        <PostFilter
        filter={filter}
        setFilter={setFilter}
        />
        <PostList  
        remove = {removePost}
        posts={sortedAndSearchedPosts} 
        title = 'Посты по JS'
        />
    </div>

    );
}

export default App;