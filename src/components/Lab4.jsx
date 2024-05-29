import { Button } from "./Button";
import React, { useState } from 'react';
import l4_desk from "../img/l4_desk.jpg"
import l4_lap from "../img/l4_lap.jpg"
import l4_mob from "../img/l4_mob.jpg"

export function Lab4() {
    const [context, setContext] = useState("");

    const changeContext = (newContext) => {
        setContext(newContext);
    };

    const base = 
    <div>
        <h3>Тема:</h3>
        <p>
            Адаптивна верстка. Медіа-запити. Метатег viewport. Стратегія "Mobile first"
        </p>
        <h3>Мета:</h3>
        <p>
            Навчитись користуватись методами та інструментами розробки, що використовуються для верстки веб-застосунків
            на різних пристроях включаючи смартфони, планшети та комп*ютери. Адаптувати власний застосунок під різні пристрої.
        </p>
        <h3 >Місце розташування:</h3>
        <ul>
            <li>
                Github репозиторій власного проекту:
                <a href="https://github.com/Shnaidruk/webdev_project_c3" target="blank">Перейти</a>
            </li>
            <li>
                Github репозиторій сторінки зі звітами:
                <a href="https://github.com/Shnaidruk/webdev_prot_3c" target="blank">Перейти</a>
            </li>
        </ul>
    </div>

    const desk =
        <div style={{width: '100%'}}>
            <h3>Десктопна версія</h3>
            <p>Спочатку розроблялася десктопна версія веб-застосунку, тому вносити якісь каринальні зміни не потрібно. Ті зміни, що є - внесені через медіазапит лише для того щоб уникнути конфліктів стилів та накладання вікон одне на одне. </p>
            <h3>Вигляд</h3>
            <img src={l4_desk} alt="" />
            <h3>CSS-код</h3>
            <textarea readonly style={{width: '20%', height: '300px'}} value={`
@media screen and (min-width: 992px) {
    main{
        margin-left: 13%;
        margin-right: 13%;
    }
    .btn-cont{
        display: flex;
        width: 47%;
        justify-content: right;
    }

    .btn-cont > button {
        margin-right: 5%;
        width: 10%;
    }

    .cafe-container {
        width: 12%;
    }
}
            `}/>
        </div>

    const lap =
        <div style={{width: '100%'}}>
            <h3>Планшетна верстка</h3>
            <p>Єкран в цій версії менший тому було вирішено зробити менше елементів в рядку але зробити їх ширшими. Ніяких суттєвих змін крім цих внесено не було.</p>
            <h3>Вигляд</h3>
            <img src={l4_lap} alt="" />
            <h3>CSS-код</h3>
            <textarea readonly style={{width: '20%', height: '300px'}} value={`
@media screen and (min-width:768px) and (max-width: 992px) {
    main{

        margin-left: 15%;
        margin-right: 15%;
    }

    .btn-cont {
        display: flex;
        width: 47%;
        justify-content: right;
    }

    .btn-cont > button {
        width: auto;
    }

    .cafe-container {
        width: 23%;
    }
} 
            `}/>
        </div>

    const mob = 
        <div style={{width: '100%'}}>
            <h3>Мобільна версія</h3>
            <p>В мобільній версії я вирішив змісти логотип вліво із виходячи із естетичних вподобань. Щодо елементів - зроблено один стовпчик широких елементів для запобігання накладання їх один на одного.</p>
            <h3>Вигляд</h3>
            <img src={l4_mob} alt="" />
            <h3>CSS-код</h3>
            <textarea readonly style={{width: '20%', height: '300px'}} value={`
@media screen and (max-width: 768px) {
    header{
        height: 140px;
    }
    .l-btn-container {
        height: 50%;
        flex-direction: inline;
        justify-content: space-between;
    }

    .logo{
        width: 70px;
    }

    .btn-cont {
        display: flex;
        width: 30%;
    }

    .btn-cont > button {
        margin-right: 5%;
        width: 50%;
    }

    .cafes {
        flex-direction: column;
        align-items: center;
    }

    .cafe-container {
        width: 70%;
        height: 400px;
    }
}
            `}/>
        </div>

    const vysn =
        <div>
            <h3>Висновки</h3>
            <p>
                У ході виконання лабораторної роботи було вивчено та використано на практиці методи адаптивної верстки.
                Використовючи медіа-запити та CSS, я створив мобільну, десктопну та планшетну версії свого веб-застосунку. 
            </p>
            <p>
                Використавиши метатег viewport я налаштував стилі для всіх трьох версій, для оптимального відображення 
                сторінки на різних пристроях та коректного функціонування користувацьгоко інтерфейсу.
            </p>
        </div>

    return(
        <div class="cont">
            <div class="sidebar">
                <ul style={{"list-style": "none"}}>
                    <li>
                        <Button buttonText="Тема, мета ЛР №4 Місце розташування сайту, звіту" onClick={() => changeContext(base)} />
                    </li>
                    <li>
                        <Button buttonText="Десктопна версія" onClick={() => changeContext(desk)} />
                    </li>
                    <li>
                        <Button buttonText="Планшетна версія" onClick={() => changeContext(lap)} />
                    </li>
                    <li>
                        <Button buttonText="Мобільна версія" onClick={() => changeContext(mob)} />
                    </li>
                    <li>
                        <Button buttonText="Висновки до ЛР №4" onClick={() => changeContext(vysn)} />
                    </li>
                </ul>
            </div>
            <div class="output">
                {context}
            </div>

        </div>
    )
}