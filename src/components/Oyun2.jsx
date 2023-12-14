import React, {useEffect, useState} from "react";

import "../assesst/Oyun2.css";
import {Button, ButtonGroup, Col, Container, Form, Row} from "react-bootstrap";
import {Label} from "reactstrap";

function Oyun2(){
    const [seciliZorluk, setSeciliZorluk] = useState(10);
    const [buttonDurum,setButtonDurum] = useState(Array.from({length: seciliZorluk}, () => true))

    const [mesaj, setMesaj] = useState('Beni Tahmin Et!');
    const [secilenDeger, setSecilenDeger] = useState('');
    const [hedefSayi, setHedefSayi] = useState(null);

    function secilenDegerHandler(deger) {
        if (mesaj !== "Doğru Tahmin") {
            setSecilenDeger(deger);

            const  yeniButonDurumlari = buttonDurum.map((durum, index) =>
                index === deger -1 ? false : durum);
            setButtonDurum(yeniButonDurumlari);
            tahmin();
        }
    }

    useEffect(() => {
        setSecilenDeger('');
        setMesaj('Beni Tahmin Et!');
        setButtonDurum(Array.from({length: seciliZorluk}, () => true));
    }, [seciliZorluk]);

    const rastgeleSayi = () => {
        return Math.floor(Math.random() * seciliZorluk) + 1;
    };
    useEffect(() => {
        setHedefSayi(rastgeleSayi());
    }, [seciliZorluk]);

    const tahmin = () => {
        const sonuc = hedefSayi === secilenDeger ? 'Doğru Tahmin' : 'Yanlış Tahmin';
        setMesaj(`Sonu.: ${sonuc}`);
        return sonuc;
    }
    const handleRadioChange = (value) => {
        setSeciliZorluk(value);
    }
    const handleYenidenDene = () => {
        setHedefSayi(rastgeleSayi());
        setSecilenDeger('');
        setMesaj('Beni Tahmin Et!');
        setButtonDurum(Array.from({length: seciliZorluk}, () => true));
    }
    const renderButtons = () => {
        const buttonCount = seciliZorluk;
        const buttons = [];
        let buttonGroup = [];

        const tumButonlarAktif = buttonDurum.every(durum =>durum);

        for (let i = 1; i <= buttonCount; i++) {
            buttonGroup.push(
                <Button key={i}
                        variant="primary"
                        onClick={() => secilenDegerHandler(i)}
                disabled={!buttonDurum[i-1] || secilenDeger === hedefSayi}>
                    {i}
                </Button>
            );


            if (buttonGroup.length > 0) {
                buttons.push(
                    <ButtonGroup
                        key={`button-group-${i}`}
                        size="lg"
                        className="mb-3 me-2"
                        aria-label="Button group">
                        {buttonGroup}
                    </ButtonGroup>
                );
                buttonGroup = []; //mevcut butonları sıfırlar yeni küme için
            }
        }
        return {buttons, tumButonlarAktif};
    };
    const {buttons,tumButonlarAktif} = renderButtons();

    return(
        <div className="container">
            <div className="oyun2">
                <h1 className="baslik2"> Oyun 2</h1>
                <Container>
                    <Row>
                        <Col xs={2}>
                            <Form>
                                <Form.Group className="text-right baslik2">
                                    <p className="zorlukBaslik">Zorluk Derecesi</p>
                                    <div key={'reverse-radio'} className="mb-3 zorlukSecenek">
                                        <Form.Check
                                            reverse
                                            label="Basit"
                                            name="group1"
                                            type="radio"
                                            id={`reverse-radio-1`}
                                            value={10}
                                            checked={seciliZorluk === 10}
                                            onChange={() => handleRadioChange(10)}
                                        >
                                        </Form.Check>
                                        <Form.Check
                                            reverse
                                            label="Orta"
                                            name="group1"
                                            type="radio"
                                            id={`reverse-radio-2`}
                                            value={100}
                                            checked={seciliZorluk === 100}
                                            onChange={() => handleRadioChange(100)}
                                        >
                                        </Form.Check>
                                        <Form.Check
                                            reverse
                                            label="Zor"
                                            type="radio"
                                            id={`reverse-radio-3`}
                                            value={100}
                                            checked={seciliZorluk === 50}
                                            onChange={() => handleRadioChange(50)}
                                        >
                                        </Form.Check>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={10} className="d-grid gap-2 my-2">
                            <Button
                                onClick={handleYenidenDene}
                                disabled={tumButonlarAktif}
                                size="lg">
                                Yeniden Dene
                            </Button>
                            <h1 className="secenekBaslik">
                                {secilenDeger === ''
                                    ? 'Beni Tahmin Et!'
                                    :(secilenDeger === hedefSayi
                                        ? 'Doğru Tahmin'
                                        : 'Yanlış Tahmin')}
                            </h1>
                            <div className="button-container mt-3">{buttons}</div>
                        </Col>



                        <Label>rastgele sayı: {hedefSayi}</Label>
                        <Label>seçilen sayı: {secilenDeger}</Label>
                        <Label>sonuç: {
                            secilenDeger===''
                                ? 'Beni Tahmin Et!'
                                :(secilenDeger===hedefSayi ?'doğru' : 'yanlış')}</Label>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export  default Oyun2