import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';

let id = 1;
function App() {
  const [posts, setPosts] = useState([])
  function addPost(title){
    const newPost = {id:id, title:title}
    setPosts([newPost, ...posts]);
    id+=1
  }

  function deletePost(id){
    const updatedPosts = posts.filter((post)=>post.id !==id);
    setPosts(updatedPosts);
  }
  return (
    <div className="App">
      <Navbar/>
      <Input addNewPost={addPost}/> {/* addNewPost is the 'props name' being created here, and it's being sent to Input.js file. Input.js is ready to receive data */}
      
      {posts.map((post)=>(
      <Post key={post.id} id={post.id} title={post.title} deletePost ={deletePost}/>
      ))}
    </div>
  );
}

export default App;
