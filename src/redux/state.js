let rerenderEntireTree = ()=>{
    console.log('State is changed');
}
let PostList = [
    {id:1,message:"Hi! How are you?",likeCount:11},
    {id:2,message:"Okey? It's my time!",likeCount:0},
    {id:3,message:"Test String",likeCount:5},
    {id:4,message:"Delete Open Text",likeCount:100},
];
let dialogsData =[
    {
        id:1,
        name:'Dima'
    },
    {
        id:2,
        name:'YES!Fact!'
    },
    {
        id:3,
        name:'TestChar'
    },
    {
        id:4,
        name:'Omsk'
    },
    {
        id:5,
        name:'Naming'
    }
];
let messageData=[
    {id:1,message:'MessageId1'},
    {id:2,message: "TestMessage"},
    {id:3,message: "КЛючвое слово для проверки"},
    {id:4,message: "Расскажу анекдот..."},
    {id:5,message: "Да, это я. Это не секрет."},
    {id:6,message: "КЛючвое слово для проверки"}
];
let friendList=[
    {name:"dima",id:"1"},
    {name:"vova",id:"2"},
    {name:"vika",id:"3"},
    {name:"lika",id:"4"},
]
let state = {
    profilePage:{
        postList : PostList,
        newPostText: 'Введите сообщение'
    },
    messagePage:{
        dialogsData: dialogsData,
        messageData: messageData,
        newMessageText: ""
    },
    sidebar: {
        friendList
    }

}
window.state=state;

export let addPost = (postMessage) =>{
    let newPost = {
        id:5,
        message: postMessage,
        likeCount: 0
    };
    state.profilePage.postList.push(newPost);
    state.profilePage.newPostText="";
    rerenderEntireTree(state);
}
export let addMessage=(text)=>{
    let data = {
        id:10,
        message:text
    }
    state.messagePage.messageData.push(data);
    state.messagePage.newMessageText="";
    rerenderEntireTree(state);

}
export let updateNewMessageText = (newText)=>{
    state.messagePage.newMessageText=newText;
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
}
export const subscribe =(observer)=>{
    rerenderEntireTree = observer;
}
export default state;