import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Navi() {
    return (
        <>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Link to="/" className='nav-link active'>Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/login" className='nav-link active'>Login</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/register" className='nav-link active'>Register</Link>
                </Nav.Item>

            </Nav>
        </>

    )
}
