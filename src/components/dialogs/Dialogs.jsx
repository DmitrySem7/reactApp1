import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
const DialogItem = (props) =>{

    return(
        <div className={s.dialog+" "+s.active}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) =>{
    return(
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialog = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s['dialogs-items']}>
                <DialogItem name='Andrey POPOVICH' id="0"/>
                <DialogItem name='OverVery' id="1"/>
                <DialogItem name='Sveta' id="2"/>
                <DialogItem name='Sasha' id="3"/>
                <DialogItem name='Victor' id="4"/>
                <DialogItem name='Sasha2' id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="Hi! My Name Is"/>
                <Message message="Hi! WHO?"/>
            </div>
        </div>
    )
}
export {Dialog};