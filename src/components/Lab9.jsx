import { Button } from "./Button";
import React, { useState } from 'react';
import l1 from '../img/lab9/1.jpg'
import l2 from '../img/lab9/2.jpg'
import l3 from '../img/lab9/3.jpg'
import l4 from '../img/lab9/4.jpg'
import l5 from '../img/lab9/5.jpg'
import l6 from '../img/lab9/6.jpg'
import l7 from '../img/lab9/7.jpg'
import l8 from '../img/lab9/8.jpg'
import l9 from '../img/lab9/9.jpg'
import l10 from '../img/lab9/10.jpg'
import l11 from '../img/lab9/11.jpg'
import l12 from '../img/lab9/12.jpg'
import l13 from '../img/lab9/13.jpg'
import l14 from '../img/lab9/14.jpg'
import l15 from '../img/lab9/15.jpg'
import l16 from '../img/lab9/16.jpg'
import l17 from '../img/lab9/17.jpg'
import l18 from '../img/lab9/18.jpg'
import l19 from '../img/lab9/19.jpg'
import l20 from '../img/lab9/20.jpg'
import l21 from '../img/lab9/21.jpg'
import l22 from '../img/lab9/22.jpg'
import l23 from '../img/lab9/23.jpg'
import l24 from '../img/lab9/24.jpg'
import sert from '../img/lab9/sert.jpg'


export function Lab9() {
    const [context, setContext] = useState("");

    const changeContext = (newContext) => {
        setContext(newContext);
    };

    const base =
        <div style={{display:'flex', flexDirection:'column'}}>
            <h3>Тема:</h3>
        <p>
        Створення RESTful API за допомогою Node.js і Express. База даних MongoDB.
        </p>
        <h3>Мета:</h3>
        <p>
        Придбати практичні навички роботи з Node.js і Express. Пройти курс Building RESTful APIs with Node.js and Express.
        </p>
        <a href="https://coursera.org/share/a920f28d58a8203d3bfaabcb944c046c">Посилання на сертифікат</a>
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
            <h3>Тести другого модуля</h3>
            <img src={l8} alt="" />
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
            <h3>Тести третього модуля</h3>
            <img src={l19} alt="" />
            <img src={l20} alt="" />
            <img src={l21} alt="" />
            <img src={l22} alt="" />
            <img src={l23} alt="" />
            <img src={l24} alt="" />
        </div>

    const vysn =
        <div style={{width: '50%',}}>
            <h3>Висновки</h3>
            <p>
                Під час проходження курсу я поглибив свої знання та покражив навички у використанні JS та фреймворку Express.
                Також мною були здобуті знання про MongoDB. Було побудовано стандартне RESTful API для з
                звичайними запитами до бази, підключено нереляційну базу даних MongoDB, застосунок протестований в Postman, все працює коректно.
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