import {Alert, Card, CardGroup} from "react-bootstrap";
import React from "react";

import '../assesst/Anasayfa.css';



function Anasayfa(){
    return(
        <div>
            <CardGroup>
                <Card >
                    <Card.Body className="custom-card">
                        <Card.Title className="text-center">
                            Oyun 1
                        </Card.Title>
                        <Card.Text>
                           <ul>
                                <li>Oyun "Oyuna Başla!" butonuna basıldığında başlar.</li>
                                <li>"Oyuna Başla!" butonuna basılıdğında bir uyarı penceresi açılır. Bu kısımda oyunun kuralları anlatılır. Oyuna başlayıp başlamamak kullanıcıya bırakılır.</li>
                                <li>Kullanıcı "Başla!" butonuna bastığı anda oyun başlar.</li>
                               <li>Kullanıcıdan 1'den 10'a kadar sayılar arasında (1 ve 10 dahil) bir sayı girmesi istenir.</li>
                               <li>Kullanıcı sayısal bir değer girmediği zaman alert kullanarak uyarı veriyor. Eğer kullanıcı sayısal bir değer girer ve yanlış tahminde bulunursa farklı bir renkte alert kullanarak uyarı verir. Doğru tahminde bulunduğunda da farklı bir renkte alert kullanarak uyarı verir.</li>
                               <li>Kullanıcı isterse oyuna yeniden başlayabilir. Bunun için "Yeniden Başla?" butonuna tıklayarak tüm oyunun sıfırlanması sağlanır.</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Body className="custom-card2">
                        <Card.Title className="text-center">
                            Oyun 2
                        </Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Oyun varsayılan zorluk olarak "Basit"den başlar.</li>
                                <li>Oyunda 3 farklı zorluk değeri bulunmakta. Bunlar Basit, Orta ve Zor.</li>
                                <li>Basit modda rastgele 1 ile 10 arasında bir sayı tutulur. Ekranda da 1'den 10'a kadar buton bulunur. Bu butonlara basarak tutulan sayıyı bulmak hedeflenir. Ekranda bulunan "Yeniden Dene" butonu herhangi bir butona basmadan aktif olmayacak şekilde ayarlanmıştır. "Yeniden Dene" butonuna basıldığında oyun sıfırlanır ve yeniden başlar.</li>
                                <li>Orta modda rastgele 1 ile 100 arasında bir sayı tutulur. Ekranda da 1'den 100'e kadar buton bulunur. Bu butonlara basarak tutulan sayıyı bulmak hedeflenir. Ekranda bulunan "Yeniden Dene" butonu herhangi bir butona basmadan aktif olmayacak şekilde ayarlanmıştır. "Yeniden Dene" butonuna basıldığında oyun sıfırlanır ve yeniden başlar.</li>
                                <li>Zor modda rastgele 1 ile 50 arasında bir sayı tutulur. Ekranda da 1'den 50'ye kadar buton bulunur. Bu butonlara basarak tutulan sayıyı bulmak hedeflenir. Ancak bu kısımda 10 saniyelik bir sayaç bulunur. 10 saniye içinde tutulan sayı bulmak hedeflenir. Süre dolmadan doğru tahmin bulunamazsa "Süre doldu" yazar ve yeniden dene butonu hariç tüm butonlar disaktif olur. Ekranda bulunan "Yeniden Dene" butonu herhangi bir butona basmadan aktif olmayacak şekilde ayarlanmıştır. "Yeniden Dene" butonuna basıldığında oyun sıfırlanır ve yeniden başlar. </li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

        </div>
    )
}
export default Anasayfa