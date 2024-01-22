const ADD_POST = 'ADD-POST';
const UPDATE_POST = "UPDATE-NEW-POST-TEXT";
function addPost(state){
    let newPost = {
        id:5,
        message: state.newPostText,
        likeCount: 0
    };
    state.postList.push(newPost);
    state.newPostText="";
    return state;
}
function updateNewPostText(state,newText){
    state.newPostText=newText;
    return state;
}

const profileReducer = (state,action) =>{
    switch (action.type){
        case ADD_POST:
            state = addPost(state);
            break;
        case UPDATE_POST:
            state = updateNewPostText(state,action.newText);
            break;
    }
    return state;
}


export const addPostActionCreator = () =>({type:ADD_POST});
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_POST, newText: text});

export default profileReducer;