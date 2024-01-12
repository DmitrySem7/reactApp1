import React from "react";
import prof from './Profile.module.css';
import Post from "./Posts/Post";
const Profile = () =>{
    return <div>
        Случайная информация из интернета для тестов разных!
        <div><img className={prof['profile']} src="https://cdn.culture.ru/images/fb75eaff-2e9c-528b-9165-e74fa82307e1"/></div>
        <div> ava + description</div>
        <Post/>
    </div>
}
export {Profile};