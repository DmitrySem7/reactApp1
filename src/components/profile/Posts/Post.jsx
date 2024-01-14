import React from "react";
import p from './Post.module.css';
import prof from "../Profile.module.css";
import {PB} from "./Post/PostBody";
const Post = ()=>{
    return <div>
        My posts
        <div className={p.postsBlock}>
            New post
            <div>
                <textarea>

            </textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </div>
        <div className={p.posts}>
            <PB message="Hi! How are you?" likeCount="0"/>
            <PB message="It's my first post!" likeCount="15"/>
            <PB/>
        </div>
    </div>
}
export default Post;