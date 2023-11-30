import React, {useState} from "react";
import {Alert, Form, Button, InputGroup, Col, Row, Card, Modal} from "react-bootstrap";

import '../assesst/Oyun1.css';

function Oyun1(){
    const [hedefSayi, ayarlananHedefSayi] = useState(rastgeleSayi());
    const [kullaniciTahmini, ayarlananKullaniciTahmini] = useState('');
    const [mesaj, ayarlananMesaj] = useState('');
    const [sonucRengi, ayarlananSonucRengi] = useState('');

    const [show, setShow] = useState(false);
    const [yenidenShow,setyenidenShow]=useState(false);

    const [baslaButton, setBaslaButton] = useState(false); // oyuna başla butonununun içindeki başla
    const [tahminButton,setTahminButton]=useState(false);
    const [startGameButton,setStartGameButton]=useState(true);
    const [returnGameButton,setReturnGameButton]=useState(false);

    const handleClose = () => {
        setShow(false);
        setyenidenShow(false);
        setBaslaButton(false);
        setTahminButton(false);
        setStartGameButton(true);
        setReturnGameButton(false);
    };
    const returnClose = () => {
        setShow(false);
        setyenidenShow(false);
        setBaslaButton(true);
        setTahminButton(true);
        setStartGameButton(false);
        setReturnGameButton(true);
    }
    const handleShow = () => {
        setShow(true);
        setyenidenShow(false);
        setBaslaButton(false);
        setTahminButton(false);
        setStartGameButton(true);
        setReturnGameButton(false);
    }

    const returnShow= () => {
        setShow(false);
        setyenidenShow(true);
        setBaslaButton(false);
        setTahminButton(false);
        setStartGameButton(true);
        setReturnGameButton(false);
    }
    const handleSaveChanges = () => {
        setShow(false);
        setyenidenShow(false);
        setBaslaButton(true);
        setTahminButton(true);
        setStartGameButton(false);
        setReturnGameButton(true);
    }
    const handleRestartGame = () => {
        setShow(false);
        setyenidenShow(false);
        setBaslaButton(true);
        setTahminButton(true);
        setStartGameButton(false);
        setReturnGameButton(true);

        ayarlananHedefSayi(rastgeleSayi());
        ayarlananKullaniciTahmini('');
        ayarlananMesaj('');
        ayarlananSonucRengi('');
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
            <div className="oyun1">
                <h1 className="baslik">Oyun 1</h1>
                <img src="./images/by.png" alt="by"/>
                {startGameButton && (
                    <Button variant="dark" onClick={handleShow}>
                        Oyuna Başla!
                    </Button>
                )}
                {returnGameButton && (
                    <Button variant="outline-dark" onClick={returnShow}>
                        Yeniden başla?
                    </Button>
                )}
            </div>
            <Row>
                <Col xs={12} >
                    <InputGroup  size="lg" type="number" value={kullaniciTahmini} onChange={girilenDeger}>
                        {tahminButton && (
                            <InputGroup.Text id="inputGroup-sizing-lg" style={{background: "black", color: "white"}}>
                                Tahmin:
                            </InputGroup.Text>
                        )}
                        {tahminButton && (
                            <Form.Control
                                disabled={!baslaButton}
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                                value={kullaniciTahmini}
                                onChange={girilenDeger}
                            />
                        )}
                    </InputGroup>
                    <div className="d-grid gap-2 my-2">
                        {tahminButton && (
                            <Button disabled={!baslaButton} variant="outline-dark" size="lg" onClick={tutulanDeger}>
                                Tahmin Et
                            </Button>
                        )}
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
                    <Button variant="light" onClick={handleClose}>
                        Kapat :(
                    </Button>
                    <Button variant="dark" onClick={handleSaveChanges}>
                        Başla!
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={yenidenShow} onHide={returnClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Uyarı!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Oyun yeniden başlayacak. Emin misin?</Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={returnClose}>
                        Hayır
                    </Button>
                    <Button variant="dark" onClick={handleRestartGame}>
                        Evet
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}
export  default Oyun1