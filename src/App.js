
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialog} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route,Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        {/*<Profile/>*/}
        <div className="app-wrapper-content">
            <Routes>
                <Route path="/profile/*" element={<Profile/>}/>
                <Route path="/dialogs/*" element={<Dialog/>}/>
                <Route path="/" element={<div>АБОБА</div>}/>
            </Routes>

        </div>

    </div>
      </BrowserRouter>
  );
}


export default App;
