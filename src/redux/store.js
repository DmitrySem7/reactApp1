import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = "UPDATE-NEW-POST-TEXT";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const ADD_MESSAGE = 'ADD-MESSAGE';
let store = {
    _state: {
            profilePage:{
                postList : [{id:1,message:"Hi! How are you?",likeCount:11},
                    {id:2,message:"Okey? It's my time!",likeCount:0},
                    {id:3,message:"Test String",likeCount:5},
                    {id:4,message:"Delete Open Text",likeCount:100}],
                newPostText: 'Введите сообщение'
            },
            messagePage:{
                dialogsData: [
                    {id:1, name:'Dima'},
                    {id:2, name:'YES!Fact!'},
                    {id:3, name:'TestChar'},
                    {id:4, name:'Omsk'},
                    {id:5, name:'Naming'}
                ],
                messageData: [
                    {id:1,message:'MessageId1'},
                    {id:2,message: "TestMessage"},
                    {id:3,message: "КЛючвое слово для проверки"},
                    {id:4,message: "Расскажу анекдот..."},
                    {id:5,message: "Да, это я. Это не секрет."},
                    {id:6,message: "КЛючвое слово для проверки"}
                ],
                newMessageText: ""
            },
            sidebar: [
                {name:"dima",id:"1"},
                {name:"vova",id:"2"},
                {name:"vika",id:"3"},
                {name:"lika",id:"4"},
            ]
    },
    _callSubscriber(){
        console.log('State is changed');
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },


    dispatch(action){
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.messagePage=dialogsReducer(this._state.messagePage,action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);
    }

}


window.state=store;


export default store;