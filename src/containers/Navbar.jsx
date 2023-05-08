import { useState } from 'react';
import { DropdownButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import rest from "../containers/rest.png"

function NavScrollExample() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    return (
        <Navbar bg="dark" expand="lg" sticky='top'>
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}

                        navbarScroll
                    >
                        <Nav.Link href="/" id='nav-home' >Home</Nav.Link>
                        <NavDropdown title="Menu" id='navdropdown1' >
                            <NavDropdown.Item  onClick={() => navigate("/addMenu")}>Create New Menu</NavDropdown.Item>
                            <NavDropdown.Item  onClick={() => navigate("/")}>Show Menus</NavDropdown.Item>
    
                        </NavDropdown>
                        <NavDropdown title="Category" id='navdropdown2' >
                            <NavDropdown.Item onClick={() => navigate("/addCategory")}>Add New Category</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/deleteCategory")}>
                                Delete Category
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dish" id='navdropdown3' >
                            <NavDropdown.Item onClick={() => navigate("/addDish")}>Add New Dish</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/deleteDish")}>
                                Delete Dish
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/updateDish")}>
                               Update Dish
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <img src = {rest} className='heading-img heading-img-pos1'/>
                    <h1 className="main-heading">My Menu Manager</h1>
                    <img src = {rest} className='heading-img heading-img-pos2'/>
                    <Form className="d-flex" style={{ justifyContent: "flex-end", marginRight: "8px" }}>

                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 nav-input"
                            aria-label="Search"
                            style={{ width: "250px" }}
                            onChange={(event) => setSearchValue(event.target.value)}
                            value={searchValue}
                        />
                        <Button variant="outline-success"
                            onClick = {() => {
                                console.log(searchValue);
                                navigate("/dishByName", {state : {dishName : searchValue}})
                            }}
                        >Search</Button>

                    </Form>
                    <Button variant="danger"
                        onClick={() => {
                            sessionStorage.setItem("isVerified", false);
                            navigate("/login");
                        }}
                    >Log-out</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;