
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialog} from "./components/dialogs/Dialogs";

function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        {/*<Profile/>*/}
        <div className="app-wrapper-content">
            <Dialog/>
        </div>

    </div>
  );
}


export default App;
