import React, { useRef, useState } from "react"; 
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPost(){
        console.log('Отработала функция соритровки постов')
        if(selectedSort){
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        else
        return posts
    }   

    const sortedPost = getSortedPost()

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
            defaultValue="Сортировка"
            options = {[
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По описанию' },
            ]}
            />
        </div>
        {posts.length
            ?
            <PostList remove = {removePost} posts={sortedPost} title = 'Посты по JS' />
            :
            <h1 style= {{textAlign : "center"}}>
                Постов нет епта !!!
            </h1>
        }
    </div>

    );
}

export default App;