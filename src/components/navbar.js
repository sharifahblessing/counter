import React, { Component } from "react"
import { Link } from 'react-router-dom'

class NavBar extends Component {
   
    render() {
        return (
            <div>
                <Link to='/'>Articles Home</Link>
                <Link to='/articles'>Articles </Link>
                <Link to='/articles/new'>Add Articles</Link>
                <Link to='/articles/:id'>Articles Details</Link>
                <Link to='/articles/:id/edit'>Edit Articles</Link>
                
            </div>

        )

    }
}


export default NavBar;