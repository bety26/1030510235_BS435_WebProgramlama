<<<<<<< HEAD
import React, {useEffect, useState} from "react";

import "../assesst/Oyun2.css";
import {Button, ButtonGroup, Col, Container, Form, ProgressBar, Row} from "react-bootstrap";
import {Label} from "reactstrap";

function Oyun2(){
    const [seciliZorluk, setSeciliZorluk] = useState(10);
    const [buttonDurum,setButtonDurum] = useState(Array.from({length: seciliZorluk}, () => true))

    const [mesaj, setMesaj] = useState('Beni Tahmin Et!');
    const [secilenDeger, setSecilenDeger] = useState('');
    const [hedefSayi, setHedefSayi] = useState(null);
    const [progress, setProgress] = useState(10);
    const  [intervalId,setIntervalId] = useState(null);
    const [butonaBasmaSayisi, setButonaBasmaSayisi] = useState(0);

    function secilenDegerHandler(deger) {
        if (mesaj !== "Doğru Tahmin") {
            setSecilenDeger(deger);

            const  yeniButonDurumlari = buttonDurum.map((durum, index) =>
                index === deger -1 ? false : durum);
            setButtonDurum(yeniButonDurumlari);
            tahmin();
            setButonaBasmaSayisi((prevState) => prevState + 1);
        }
    }

    useEffect(() => {
        setSecilenDeger('');
        setMesaj('Beni Tahmin Et!');
        setButtonDurum(Array.from({length: seciliZorluk}, () => true));
        setProgress(10);
        clearInterval(intervalId);
    }, [seciliZorluk]);

    const rastgeleSayi = () => {
        return Math.floor(Math.random() * seciliZorluk) + 1;
    };
    useEffect(() => {
        setHedefSayi(rastgeleSayi());
    }, [seciliZorluk]);

    useEffect(() => {
        if (progress > 0) {
            const interval = setInterval(() => {
                setProgress(prevProgress => prevProgress -1);
            }, 1000);
            setIntervalId(interval);
            return () => clearInterval(interval);
        }
    }, [progress]);

    useEffect(() => {
        if (progress === 0 || secilenDeger === hedefSayi){
            clearInterval(intervalId);
        }
    },[progress, intervalId, secilenDeger, hedefSayi]);
    const tahmin = () => {
        const sonuc = hedefSayi === secilenDeger ? 'Doğru Tahmin' : 'Yanlış Tahmin';
        setMesaj(`Sonu.: ${sonuc}`);
        return sonuc;
    }
    const handleRadioChange = (value) => {
        setSeciliZorluk(value);
        setButonaBasmaSayisi(0);
    }
    const handleYenidenDene = () => {
        setHedefSayi(rastgeleSayi());
        setSecilenDeger('');
        setMesaj('Beni Tahmin Et!');
        setButtonDurum(Array.from({length: seciliZorluk}, () => true));
        setProgress(10);
        setButonaBasmaSayisi(0);
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
                disabled={!buttonDurum[i-1] || secilenDeger === hedefSayi || (seciliZorluk === 50 && progress === 0)}>
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
                            <ProgressBar>
                                {seciliZorluk === 50 && (
                                    <ProgressBar striped variant="primary" now={(progress/10)*100} label={`${progress}`} key={1}/>
                                )}
                            </ProgressBar>
                            <Button
                                onClick={handleYenidenDene}
                                disabled={(seciliZorluk===50 ? (progress!==0 ? tumButonlarAktif : '') : tumButonlarAktif)}
                                size="lg">
                                Yeniden Dene
                            </Button>
                            <h1 className="secenekBaslik">
                                {secilenDeger === ''
                                    ? (seciliZorluk === 50
                                        ? (progress === 0
                                            ? 'süre doldu'
                                            : 'beni tahmin et')
                                        :'Beni Tahmin Et!')

                                    : secilenDeger === hedefSayi
                                        ? 'Doğru Tahmin'
                                        : 'Yanlış Tahmin'}
                            </h1>
                            {seciliZorluk === 50 && (
                                <h3>
                                    {secilenDeger === ''
                                        ? ''
                                        :(secilenDeger === hedefSayi
                                            ? 'Tebrikler! '+progress+ ' saniye kala '+butonaBasmaSayisi+'. tahminde buldun'
                                            : '')}
                                </h3>
                            )}
                            <div className="button-container mt-3">{buttons}</div>
                        </Col>



                        <Label>rastgele sayı: {hedefSayi}</Label>
                        <Label>seçilen sayı: {secilenDeger}</Label>
                        <Label>sonuç: {
                            secilenDeger===''
                                ? 'Beni Tahmin Et!'
                                :(secilenDeger===hedefSayi ?'doğru' : 'yanlış')}</Label>
                        <label> {
                            secilenDeger===''
                                ? 'Beni Tahmin Et!'
                                :(secilenDeger===hedefSayi ?'Tebrikler doğru sonucu buldun' : 'devamm')} </label>
                        {/* <label>buton basma sayısı: {butonaBasmaSayisi}</label> */}
                        <label>progresbar: {progress}</label>
                        <label>{progress===0 ? 'süre doldu' : ''}</label>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
=======
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
>>>>>>> origin/master
export  default Oyun2