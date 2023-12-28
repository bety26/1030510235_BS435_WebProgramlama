import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Hakkimda() {
    return (
        <Container>
            <Row>
                <Col xs={3} md={2} className="float-right">
                    <img src="./images/1559676034387.png" style={{ width: '200px', height: '250px' }} alt="Profil Resmi" />
                </Col>
                <Col xs={9} >
                    <h1>Betül Gül Yılmaz</h1>
                    <h3>1030510235</h3>
                    <h5>Bilgisayar Mühendisliği</h5>
                </Col>
            </Row>
        </Container>
    );
}

export default Hakkimda;
