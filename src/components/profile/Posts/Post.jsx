import React from "react";
import p from './Post.module.css';
import prof from "../Profile.module.css";
import {PB} from "./Post/PostBody";
const Post = ()=>{
    return <div>
        My posts
        <div>
            New post
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div>
            <PB message="Hi! How are you?" likeCount="0"/>
            <PB message="It's my first post!" likeCount="15"/>
            <PB/>
        </div>
    </div>
}
export default Post;