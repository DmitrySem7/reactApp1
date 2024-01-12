import React from "react";
import pb from './PostBody.module.css';
const PB = (props) =>{
    //debugger;
    return <div className={pb["item"]}>
        <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"/>
        {props.message}
        <div><span>like {props.likeCount }</span></div>
    </div >
}
export {PB};