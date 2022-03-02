import { Navbar, Container, Nav } from "react-bootstrap";


const Header = () => {

    return (
        <div className="App">
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="/">Demo</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/item">Item</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </div>

    )

}

export default Header;