import React from "react";
import prof from './Profile.module.css';
const Profile = () =>{
    return <div className={prof["content"]}>
        Случайная информация из интернета для тестов разных!
        <div><img className={prof['profile']} src="https://cdn.culture.ru/images/fb75eaff-2e9c-528b-9165-e74fa82307e1"/></div>
        <div> ava + description</div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={prof["posts"]}>
                <div className={prof["item"]}>
                    post 1
                </div >
                <div className={prof["item"]}>
                    post 2
                </div >
                <div className={prof["item"]}>
                    post 3
                </div>
            </div>
        </div>
    </div>
}
export {Profile};