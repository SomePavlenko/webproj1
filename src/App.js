import React, { useMemo, useRef, useState } from "react"; 
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'гг', body: 'аа'},
        {id: 2, title: 'аа', body: 'бб'},
        {id: 3, title: 'вв', body: 'яя'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    
    const sortedPosts = useMemo(() => {
        if(selectedSort){
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        else
        return posts
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => { 

        return sortedPosts.filter(
            post => post.title.includes(searchQuery))

    }, [searchQuery, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    
    const sortPost = (sort) => {
        setSelectedSort(sort);
    }

    return ( 
    < div className = "App" >
        <PostForm create = {createPost}/>
        <hr style={{margin: '15px 0'}} />
        <div> 
            <MyInput
                value = {searchQuery}
                onChange = {e => setSearchQuery(e.target.value)}
                placeholder="Поиск..."
            />
            <MySelect
            value = { selectedSort }
            onChange = {sortPost}
            style={{color: 'white'}}
            defaultValue="Сортировка"
            options = {[
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По описанию' },
            ]}
            />
        </div>
        {posts.length
            ?
            <PostList  
            remove = {removePost}
            posts={sortedAndSearchedPosts} 
            title = 'Посты по JS'
            />
            :
            <h1 style= {{textAlign : "center"}}>
                Постов нет епта !!!
            </h1>
        }
    </div>

    );
}

export default App;