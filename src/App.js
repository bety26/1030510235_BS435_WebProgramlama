import logo from "./images/by.png";
import './App.css';
import {Alert, Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="logo" src={logo} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Ana Sayfa</Nav.Link>
                            <Nav.Link href="#link">Hakkımda</Nav.Link>
                            <NavDropdown title="Oyun" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Oyun 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Oyun 2</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Alert variant="success" className="mt-3">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                </p>
            </Alert>
            <header className="App-header">

                <Button>Hi</Button>
            </header>
        </div>
    );
}

export default App;
