import React, {useState} from "react";
import {Alert, Form, Button, InputGroup, Col, Row, Card, Modal} from "react-bootstrap";
function Oyun1(){
    const [hedefSayi, ayarlananHedefSayi] = useState(rastgeleSayi());
    const [kullaniciTahmini, ayarlananKullaniciTahmini] = useState('');
    const [mesaj, ayarlananMesaj] = useState('1 ile 10 arasında bir sayı tut.');
    const [sonucRengi, ayarlananSonucRengi] = useState('');
    const [show, setShow] = useState(false);
    const [firstButtonActive, setFirstButtonActive] = useState(false);

    const handleClose = () => {
        setShow(false);
        setFirstButtonActive(false);//açılır pencere kapatıldı
    };
    const handleShow = () => setShow(true);
    const handleSaveChanges = () => {
        setShow(false);
        setFirstButtonActive(true); //açılır pencerede başla butonuna basıldı
    }
    function rastgeleSayi() {
        return Math.floor(Math.random() * 10) + 1; // 1 ile 10 arasında rastgele bir sayı
    }

    function girilenDeger(event) {
        ayarlananKullaniciTahmini(event.target.value);
    }

    function tutulanDeger() {
        const tahmin = parseInt(kullaniciTahmini);

        if (isNaN(tahmin)) {
            ayarlananMesaj('Geçerli bir sayı girin.');
            ayarlananSonucRengi('warning');
            return;
        }

        if (tahmin === hedefSayi) {
            ayarlananMesaj('Tebrikler! Doğru tahmin ettiniz.');
            ayarlananSonucRengi('success');
        } else {
            ayarlananMesaj(tahmin < hedefSayi ? tahmin+" sayısından daha büyük bir sayı deneyin." : tahmin+' sayısından daha küçük bir sayı deneyin.');
            ayarlananSonucRengi('danger');
        }
    }
    return(
        <div className="container">
            <Row>
                <Col xs={3} style={{ borderRight: '1px solid #ccc' }}>
                    <Card style={{ width: '18rem' }} className="text-center">
                        <Card.Img variant="top" src="./images/by.png" />
                        <Card.Body>
                            <Card.Title >Oyun 1</Card.Title>
                            <Card.Text> 1. Oyuna Hoşgeldin :D </Card.Text>
                            {!firstButtonActive && (
                                <Button variant="primary" onClick={handleShow}>
                                    Oyuna Başla!
                                </Button>)}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={9} >


                    <InputGroup  size="lg" type="number" value={kullaniciTahmini} onChange={girilenDeger}>
                        <InputGroup.Text id="inputGroup-sizing-lg" style={{ background: "black", color: "white" }}>Tahmin: </InputGroup.Text>
                        <Form.Control
                            disabled={!firstButtonActive}
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                    <div className="d-grid gap-2 my-2">
                        <Button disabled={!firstButtonActive} variant="outline-dark" size="lg" onClick={tutulanDeger}>Tahmin Et</Button>
                    </div>
                    <div className={`alert alert-${sonucRengi}`} role="alert">
                        <p>{mesaj}</p>
                    </div>

                </Col>
            </Row>


            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Oyun Kuralları</Modal.Title>
                </Modal.Header>
                <Modal.Body>1'den 10'a kadar rastgele sayı seçiliyor. En kısa zamanda bu sayıyı bilmen gerekiyor. Oyun Başla butonuna basınca başlayacak!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Kapat :(
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Başla!
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );

}
export  default Oyun1