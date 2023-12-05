import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import CartWidget from '../Cart/CartWidget';


const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="Container-NvBar">
                <Container>
                    <Navbar.Brand href="#home"> BOOK-SHOPP!!! </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                            <Nav.Link href="#home"> Home </Nav.Link>
                            <Nav.Link href="#link"> Contact </Nav.Link>

                            <NavDropdown title="List" id="basic-nav-dropdown">

                                <NavDropdown.Item href="#action/3.1">
                                    Finanzas
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.2">
                                    Terror
                                </NavDropdown.Item>

                                <NavDropdown.Item  href="#action/3.3">
                                    Desarrollo Personal
                                </NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget/>
            </Navbar>
        </div>
    )
}

export default NavBar;