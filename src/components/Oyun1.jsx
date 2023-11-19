import React, {useState} from "react";
import {Alert,Form, Button, InputGroup} from "react-bootstrap";
function Oyun1(){
    const [hedefSayi, ayarlananHedefSayi] = useState(rastgeleSayi());
    const [kullaniciTahmini, ayarlananKullaniciTahmini] = useState('');
    const [mesaj, ayarlananMesaj] = useState('1 ile 10 arasında bir sayı tut.');
    const [sonucRengi, ayarlananSonucRengi] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <div className={`alert alert-dark ${sonucRengi}`} role="alert">
                <h3 className="text-center">Oyun 1</h3>
            </div>
            <div className={`alert alert-${sonucRengi}`} role="alert">
                <p>{mesaj}</p>
            </div>
            <InputGroup size="lg" type="number" value={kullaniciTahmini} onChange={girilenDeger}>
                <InputGroup.Text id="inputGroup-sizing-lg" style={{ background: "black", color: "white" }}>Tahmin: </InputGroup.Text>
                <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"/>
            </InputGroup>
            <div className="d-grid gap-2 my-2">
                <Button variant="outline-dark" size="lg" onClick={tutulanDeger}>Tahmin Et</Button>
            </div>
        </div>

    )
}
export  default Oyun1