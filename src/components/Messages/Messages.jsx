import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Messages.module.css'
import React from 'react';

const Messages = (props) => {
    let dialogs = props.dialogsData.map( dialog => <DialogItem name={dialog.name} key={dialog.id} ava={dialog.ava} /> )
    let messages = props.messagesData.map( message => <Message text={message.text} key={message.id} /> )

    let newMessage = React.createRef();

    let onSendMessage = () => {
        // props.dispatch(sendMessageActionCreator());
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        // props.dispatch(updateNewMessageTextActionCreator(text));
        props.onMessageChange(text);
    }

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogItems}>
                    {dialogs}
                </div>
                <div className={styles.messages}>
                    {messages}
                    <textarea cols="30" rows="10"
                              onChange={ onMessageChange }
                              ref={newMessage}
                              value={props.newMessageBody}/>
                    <button onClick={ onSendMessage }>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;