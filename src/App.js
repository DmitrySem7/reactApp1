
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialog} from "./components/dialogs/Dialogs";
import { Route,Routes } from "react-router-dom";
import {addMessage, updateNewMessageText, updateNewPostText} from "./redux/state";

function App(props) {
  return (
    <div className="app-wrapper">
        <Header/>
        <Navbar state={props.appState.sidebar}/>
        {/*<Profile/>*/}
        <div className="app-wrapper-content">
            <Routes>
                <Route path="/profile/*" element={<Profile state={props.appState.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                <Route path="/dialogs/*" element={<Dialog state={props.appState.messagePage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>}/>
                <Route path="/" element={<div>АБОБА</div>}/>
            </Routes>

        </div>

    </div>
  );
}


export default App;
