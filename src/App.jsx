import { useContext } from "react";
import "./App.css";
import Routering from "./Routering";
import UserContextProvider from "./Context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Card from "./Components/UI/Card/Card";

function App() {
    
    return (
        <Router>
            <UserContextProvider>
                <NavBar />
                <Routering />
            </UserContextProvider>
        </Router>
        
    );

}

export default App;
