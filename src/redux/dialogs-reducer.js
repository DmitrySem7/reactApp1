const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const ADD_MESSAGE = 'ADD-MESSAGE';

function addMessage(state){
    let data = {
        id:10,
        message:state.newMessageText
    }
    state.messageData.push(data);
    state.newMessageText="";
    return state;
}
function updateNewMessageText(state,newText){
    state.newMessageText=newText;
    return state;
}

const dialogsReducer = (state,action) =>{
    switch (action.type){
        case ADD_MESSAGE:
            state = addMessage(state);
            break;
        case UPDATE_MESSAGE:
            state = updateNewMessageText(state,action.newText);
            break;
    }

    return state;
}


export const sendMessageCreator = () =>({type:ADD_MESSAGE});
export const updateMessageActionCreator = (text) =>({type:UPDATE_MESSAGE,newText:text});

export default dialogsReducer;