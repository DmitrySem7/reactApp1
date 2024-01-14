import React from "react";
import prof from './Profile.module.css';
import Post from "./Posts/Post";
import {ProfileInfo} from "./profileInfo/profileInfo";
const Profile = () =>{
    return <div>
        Случайная информация из интернета для тестов разных!
        <ProfileInfo/>
        <Post/>
    </div>
}
export {Profile};