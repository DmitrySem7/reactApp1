import React from "react";
import prof from './Profile.module.css';
import Post from "./Posts/Post";
import {ProfileInfo} from "./profileInfo/profileInfo";
import {updateNewPostText} from "../../redux/store";
const Profile = (props) =>{

    return <div>
        Случайная информация из интернета для тестов разных!
        <ProfileInfo />
        <Post state={props.state} dispatch={props.dispatch}/>
    </div>
}
export {Profile};