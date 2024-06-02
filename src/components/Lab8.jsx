import { Button } from "./Button";
import React, { useState } from 'react';
import l1 from '../img/lab8/1.jpg'
import l2 from '../img/lab8/2.jpg'
import l3 from '../img/lab8/3.jpg'
import l4 from '../img/lab8/4.jpg'
import l5 from '../img/lab8/5.jpg'
import l6 from '../img/lab8/6.jpg'
import l7 from '../img/lab8/7.jpg'
import l8 from '../img/lab8/8.jpg'
import l9 from '../img/lab8/9.jpg'
import l10 from '../img/lab8/10.jpg'
import l11 from '../img/lab8/11.jpg'
import l12 from '../img/lab8/12.jpg'
import l13 from '../img/lab8/13.jpg'
import l14 from '../img/lab8/14.jpg'
import l15 from '../img/lab8/15.jpg'
import l16 from '../img/lab8/16.jpg'
import l17 from '../img/lab8/17.jpg'
import l18 from '../img/lab8/18.jpg'
import l19 from '../img/lab8/19.jpg'
import l20 from '../img/lab8/20.jpg'
import l21 from '../img/lab8/21.jpg'
import l22 from '../img/lab8/22.jpg'
import l23 from '../img/lab8/23.jpg'
import l24 from '../img/lab8/24.jpg'
import l25 from '../img/lab8/25.jpg'
import l26 from '../img/lab8/26.jpg'
import l27 from '../img/lab8/27.jpg'
import l28 from '../img/lab8/28.jpg'
import l29 from '../img/lab8/29.jpg'
import l30 from '../img/lab8/30.jpg'
import l31 from '../img/lab8/31.jpg'
import l32 from '../img/lab8/32.jpg'
import l33 from '../img/lab8/33.jpg'
import l34 from '../img/lab8/34.jpg'
import l35 from '../img/lab8/35.jpg'
import sert from '../img/lab8/sert.jpg'


export function Lab8() {
    const [context, setContext] = useState("");

    const changeContext = (newContext) => {
        setContext(newContext);
    };

    const base =
        <div style={{display:'flex', flexDirection:'column'}}>
            <h3>Тема:</h3>
        <p>
            React JS
        </p>
        <h3>Мета:</h3>
        <p>
            Набути знань з використання бібліотеки React.Пройти курс React Basics
        </p>
        <a href="https://coursera.org/share/a33b1e202824f22d8205e7415685ba69">Посилання на сертифікат</a>
        <img src={sert} alt="" style={{width: '80%'}}/>
        </div>

    const t = 
        <div>
            <h3>Тести першого модуля</h3>
            <img src={l1} alt="" />
            <img src={l2} alt="" />
            <img src={l3} alt="" />
            <img src={l4} alt="" />
            <img src={l5} alt="" />
            <img src={l6} alt="" />
            <img src={l7} alt="" />
            <img src={l8} alt="" />
            <h3>Тести другого модуля</h3>
            <img src={l9} alt="" />
            <img src={l10} alt="" />
            <img src={l11} alt="" />
            <img src={l12} alt="" />
            <img src={l13} alt="" />
            <img src={l14} alt="" />
            <img src={l15} alt="" />
            <img src={l16} alt="" />
            <img src={l17} alt="" />
            <img src={l18} alt="" />
            <img src={l19} alt="" />
            <img src={l20} alt="" />
            <img src={l21} alt="" />
            <img src={l22} alt="" />
            <img src={l23} alt="" />
            <img src={l24} alt="" />
            <h3>Тести третього модуля</h3>
            <img src={l25} alt="" />
            <img src={l26} alt="" />
            <img src={l27} alt="" />
            <img src={l28} alt="" />
            <img src={l29} alt="" />
            <img src={l30} alt="" />
            <img src={l31} alt="" />
            <img src={l32} alt="" />
            <img src={l33} alt="" />
            <img src={l34} alt="" />
            <img src={l35} alt="" />
        </div>

    const vysn =
        <div style={{width: '50%',}}>
            <h3>Висновки</h3>
            <p>
                Під час проходження курсу я відкрив для себе багато нових, корисних знань.
                Покращив навички користування бібліотекую React, та дізнався більше про нього та SPA.
            </p>
        </div>


    return(
        <div class="cont">
            <div class="sidebar">
                <ul style={{"list-style": "none"}}>
                    <li>
                        <Button buttonText="Тема, мета, сертифікат" onClick={() => changeContext(base)} />
                    </li>
                    <li>
                        <Button buttonText="Тести" onClick={() => changeContext(t)} />
                    </li>
                    <li>
                        <Button buttonText="Висновки" onClick={() => changeContext(vysn)} />
                    </li>
                    
                </ul>
            </div>
            <div class="output">
                {context}
            </div>

        </div>

    )
}