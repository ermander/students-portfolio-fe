import React from "react"
import "../App.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faHome } from '@fortawesome/free-solid-svg-icons'

function Navbar () {
    return(
        <div className="Navbar">
            <Link to="/" style={{color: "white"}}>
                <h3 >Strive School Student Portfolio</h3>
            </Link>

            <ul className="Links">
                <Link to="/" style={{color: "white", fontSize: "20px",}}>
                    <li>
                        <FontAwesomeIcon icon={faHome} />
                        <span className="navbarLinks">Home</span>
                    </li>
                </Link>    
                <Link to="/addStudent" style={{color: "white", fontSize: "20px"}}>
                    <li>
                        <FontAwesomeIcon icon={faUserPlus} style={{color: "white"}}/>
                        <span className="navbarLinks">Add User</span>
                    </li>
                </Link>                
            </ul>
        </div>
    )
}

export default Navbar