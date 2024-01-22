import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialogitem/Dialogitem";
import {sendMessageCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";




const Dialog = (props) => {
    let messageElement = props.state.messageData.map(data=>{
        return <Message message={data.message} id={data.id}/>
    });
    let ref = React.createRef();
    let updateNewMessage = () =>{
        props.dispatch(updateMessageActionCreator(ref.current.value));
    };
    let dialogElement = props.state.dialogsData.map(data => {
        return <DialogItem name={data.name} id={data.id}/>;
    });
    let addNewMessage=()=>{
        props.dispatch(sendMessageCreator());
    }
    return (
        <div className={s.dialogs}>
            <div className={s['dialogs-items']}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea className={s.newMessageInput} ref={ref} onChange={updateNewMessage} value={props.state.newMessageText}></textarea>
                <button onClick={addNewMessage}>Submit</button>
            </div>
        </div>
    )
}

const test=()=>{};

export {Dialog};