import React from "react";
import prof from './Profile.module.css';
import Post from "./Posts/Post";
import {ProfileInfo} from "./profileInfo/profileInfo";
import {updateNewPostText} from "../../redux/state";
const Profile = (props) =>{

    return <div>
        Случайная информация из интернета для тестов разных!
        <ProfileInfo />
        <Post state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
}
export {Profile};