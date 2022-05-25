import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Forget from "./components/forget/Forget";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                {/* <NavLink exact activeClassName="active" to="/"></NavLink> */}
                    <Route path="/">
                        <Route index element={<Login/>}/>                            
                        <Route path="forget" element={<Forget/>}/>
                        <Route path="home" element={<Home/>} />
                        <Route path="users">
                            <Route index element={<List/>}/>                            
                                <Route path="new" element={<New/>}/>
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;