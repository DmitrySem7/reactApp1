import React from "react";
import fr_css from "./Friend.module.css";
const FriendListElement = (props)=>{
    let friendListElement = props.state.map(data=>{
        return <div className={fr_css.FriendElement}>{data.name}</div>
    });
    return(
        <div>
        <div>Friends</div>
        <div className={fr_css.FriendBlock}>
        {friendListElement}
        </div>
        </div>)
}
export {FriendListElement};