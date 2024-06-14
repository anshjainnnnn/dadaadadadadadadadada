import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";

const Header = () => {
    const token = localStorage.getItem("token");
    const userEmail = localStorage.getItem("userEmail"); // Assuming you store user email in localStorage after login
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail"); // Remove user email from localStorage on logout
        navigate("/login");
    };

    return (
        <Navbar bg="dark" variant="dark" className="navbar">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    {token ? `Logged In as ${userEmail}` : "Not Logged In"}
                </Navbar.Brand>
                <Nav className="me-auto">
                    {token ? (
                        <>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={Link} to="/upload-photo">Upload Photo</Nav.Link>
                            <Nav.Link as={Link} to="/photos">My Photos</Nav.Link>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
