import logo from "./images/by.png";

import './App.css';
import Anasayfa from "./components/Anasayfa";
import {Route, Routes, useParams} from 'react-router-dom';
import {Alert, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";
import Hakkimda from "./components/Hakkimda";
import Oyun2 from "./components/Oyun2";
import Oyun1 from "./components/Oyun1";

function App() {
    return (
        <div className="App">

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <img className="logo" src={logo} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link  href="/">Ana Sayfa</Nav.Link>
                            <Nav.Link href="/hakkimda">Hakkımda</Nav.Link>
                            <NavDropdown title="Oyun" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/oyun1">Oyun 1</NavDropdown.Item>
                                <NavDropdown.Item href="/oyun2">Oyun 2</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                       <Routes>
                           <Route path="/" element={<Anasayfa/>}/>
                           <Route path="/hakkimda" element={<Hakkimda/>}/>
                           <Route path="/oyun1" element={<Oyun1/>}/>
                           <Route path="/oyun2" element={<Oyun2/>}/>
                       </Routes>

                        <Alert variant="primary" className="mt-3">
                            <Routes>
                                <Route path="/:id" element={<Child />} />
                            </Routes>
                        </Alert>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;

function Child() {
    let {id}=useParams();
    return(
        <div>
            <h6>ID: {id}</h6>
        </div>
    )
}