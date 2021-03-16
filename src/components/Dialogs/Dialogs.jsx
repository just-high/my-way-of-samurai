import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = props.dialogsPage.newMessageBody

    let onMessageType = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    };
    let onSendMessageClick = () => {
        props.sendMessage()
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onMessageType} value={newMessageBody} placeholder="Type here"/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;