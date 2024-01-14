import React from "react";
import prof from './profileInfo.module.css';
const ProfileInfo = () =>{
    return (
        <div>
            <div>
                <img className={prof['profile']} src="https://cdn.culture.ru/images/fb75eaff-2e9c-528b-9165-e74fa82307e1"/>
            </div>
            <div className={prof.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export {ProfileInfo};