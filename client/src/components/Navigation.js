import React from "react";
import {Link} from "react-router-dom";

function Navigation(){
    
    return (
        <nav>
            <Link to="/register">Register</Link>
            <Link to="/">Login</Link>
        </nav>
    )
}

export default Navigation;