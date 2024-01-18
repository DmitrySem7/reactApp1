import React from "react";
import p from './Post.module.css';
import prof from "../Profile.module.css";
import {PB} from "./Post/PostBody";
import {updateNewPostText} from "../../../redux/state";
const Post = (props)=>{
    let newPostElement = React.createRef();
    let addPost = ()=>{
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let postElement = props.state.postList.map(data=>{
        return <PB message={data.message} likeCount={data.likeCount} id={data.id}/>
    })
    return <div>
        My posts
        <div className={p.postsBlock}>
            New post
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.state.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

        </div>
        <div className={p.posts}>
            {postElement}
        </div>
    </div>
}
export default Post;