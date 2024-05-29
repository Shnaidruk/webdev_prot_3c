import { Button } from "./Button";
import React, { useState } from 'react';
import back from "../img/back.png";
import fonty from "../img/font.png";
import tab from "../img/table.png";
import bord from "../img/bord.png"

export function Lab2() {
    const [context1, setContext1] = useState("");
  const [context2, setContext2] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const changeContext1 = (newContext) => {
    setContext1(newContext);
  };

  const changeContext2 = () => {
    if (!buttonClicked) {
        setContext2(bubu);
    } else {
        setContext2('');
    }
    setButtonClicked(!buttonClicked);
  };

  const base = 
    <div>
        <h3>Тема:</h3>
        <p>
            Каскадні таблиці стилів. Селектори. Ідентифікатори. Стильове оформлення текстових елементів в HTML-документах.
        </p>
        <h3>Мета:</h3>
        <p>
            Hабути практичних навичок роботи з селекторами, ідентифікаторами,
            списками, різноманітними властивостями кольору і фону, зовнішними та внутрішними відступами, плаваючими
            елементами, оформленням текстових елементів.
        </p>

        <h3 >Місце розташування:</h3>
        <ul>
            <li>
                Дизайн головної сторінки власного проекту:
                <a href="https://www.figma.com/file/7HWbd49r4kkQKW0VHQUo4l/Untitled?type=design&node-id=0-1&mode=design&t=bUBifnB9tpM6kXXi-0"
                target="blank">Перейти</a>
            </li>
            <li>
                Github репозиторій резюме:
                <a href="https://github.com/Shnaidruk/webdev_cv_3c" target="blank">Перейти</a>
            </li>
            <li>
                Github репозиторій власного проекту:
                <a href="https://github.com/Shnaidruk/webdev_project_c3" target="blank">Перейти</a>
            </li>
            <li>
                Github репозиторій сторінки зі звітами:
                <a href="https://github.com/Shnaidruk/webdev_prot_3c" target="blank">Перейти</a>
            </li>
        </ul>
    </div>;

    const pidcl = 
        <div>
            <ol>
                <li>
                    <p>Внутрішній спосіб підключення</p>
                        <pre>{`HTML-код: 
    <div style=" margin: 10px;">
        ...
    </div>`}</pre>
                </li>
                <li>
                    <p>Зовнішній спосіб підключення</p>
                        <pre>{`HTML-код: 
    <link rel="stylesheet" href="style.css">
CSS-код:
    .cafe-container{
        margin: 30px; 
        background-color: #9d9d9d;
        padding-top: 17.5px;
        width: 175px;
        height: 270px;}`}</pre>
                </li>
            </ol>
        </div>;

    const bubu = 
        <div>
            <ul style={{"list-style": "none"}}>
                <li style={{width:"100%"}}>
                    <Button buttonText="Селектор тегу" onClick={() => changeContext1(stag)} />
                </li>
                <li>
                    <Button buttonText="Селектори класу" onClick={() => changeContext1(sclas)} />
                </li>
                <li>
                    <Button buttonText="Селектори ідентифікатора" onClick={() => changeContext1(sid)} />
                </li>
                <li>
                    <Button buttonText="Інші селектори" onClick={() => changeContext1(sin)} />
                </li>
            </ul>
        </div>

    const stag = 
        <div>
            <h1>Селектор тегу:</h1>
            <p>Застосування</p>
            <pre>
            {`HTML-код:
    <footer>
        ...
    </footer>
CSS-код:
    footer{
        background-color: #9d9d9d;
        bottom: 0;
        width: 100%;
        text-align: left;
        padding-left: 30px;
    }`}
            </pre>
        </div>;

    const sclas = 
        <div>
            <h1>Селектор класу:</h1>
            <p>Застосування</p>
            <pre>
            {`HTML-код:
    <div class="cafe-container">
        ...
    </div>
CSS-код:
    .cafe-container{
        margin: 30px; 
        background-color: #9d9d9d;
        padding-top: 17.5px;
        width: 175px;
        height: 270px;
}`}
            </pre>
        </div>;

const sid = 
<div>
    <h1>Селектор ідентифікатора:</h1>
    <p>Застосування</p>
    <pre>
    {`HTML-код:
<div id="line">
...
</div>
CSS-код:
    #line {
        position: absolute;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: black; 
}`}
    </pre>
</div>;


const sin = 
<div>
    <h1>Інші селектори:</h1>
    <p>Універсальний селектор</p>
    <pre>
    {`
CSS-код:
    *{
        font-family: Arial, Helvetica, sans-serif;
    }`}
    </pre>

    <p>Дочірній селектор</p>
    <pre>
    {`
CSS-код:
    .cafe-container > .first-photo{
        padding-top: 17.5px;
        width: 140px;
        height: 140px;
    }`}
    </pre>
</div>;

const pros = 
    <div>
        <h1>CSS: Шрифти Текст Таблиці Фон Контур Списки CSS Просунутий</h1>
        <ol>
            <li>
                <p>Текст</p>
                <pre>
                    {`
CSS-код:
    *{
        font-family: Arial, Helvetica, sans-serif;
    }
                    `}
                </pre>
                <img src={fonty} alt="" />
            </li>
            <li>
                <p>Таблиці</p>
                <pre>
                    {`
CSS-код:
    .cafes{
        flex-wrap: wrap;
        margin: auto;
    }

    .cafe-container{
        border-color: #000000;
        border-width: 2px;
        margin: 30px; 
        background-color: #9d9d9d;
        width: 175px;
        height: 270px;
    }
                    `}
                </pre>
                <img src={tab} alt="" />
            </li>
            <li>
                <p>Фон</p>
                <pre>
                    {`
CSS-код:
    footer{
        background-color: #9d9d9d;
        ...
    }
                    `}
                </pre>
                <img src={back} alt="" />
            </li>
            <li>
                <p>Контур</p>
                <pre>
                    {`
CSS-код:
    .cafe-container{
        border: 1px solid #000000;
        margin: 30px; 
        background-color: #9d9d9d;
        width: 175px;
        height: 270px;
    }
                    `}
                </pre>
                <img src={bord} alt="" />
            </li>
        </ol>
    </div>;

const vysn = 
    <div>
        <h3>Висновки</h3>
        <p>
            У ході виконання лабораторної роботи №2 я отримав знання та практичні навички у використанні каскадних таблиць стилів для оформлення веб-сторінок
        </p>
        <p>
            Були вивчені та пропрацьовані види підключення стилів, селектори - методи вибору елементів сторінки для застосування до них стильових налаштувань.
            Використання всіх цих знань та навичок дозволило мені оформити мій веб-застосунок. 
        </p>
        <p>
            Також були пропраьовані такі елементи каскадних таблиць стилів як колір, фон, шрифт, зовнішні та внутрішні відступи. 
            Це дозволило мені зробити дизайн застосунку відповдним до моїх естетичних уподобань. Особливо користими стали внутрішна та зовнішні відступи,
            дозволивши коректно оформити простір веб застосунку. 
        </p>
    </div>


    return(
        <div class="cont">
            <div class="sidebar">
                <ul style={{"list-style": "none"}}>
                    <li>
                        <Button buttonText="Тема, мета ЛР №2 Місце розташування сайту, звіту" onClick={() => changeContext1(base)} />
                    </li>
                    <li>
                        <Button buttonText="Способи підключення стилів" onClick={() => changeContext1(pidcl)} />
                    </li>
                    <li>
                        <Button buttonText="Селектори" onClick={() => changeContext2(bubu)} />
                        {context2}
                    </li>
                    <li>
                        <Button buttonText="CSS: Шрифти Текст Таблиці Фон Контур Списки CSS Просунутий" onClick={() => changeContext1(pros)} />
                    </li>
                    <li>
                        <Button buttonText="Висновки до ЛР №2" onClick={() => changeContext1(vysn)} />
                    </li>
                </ul>
            </div>
            <div class="output">
                {context1}
            </div>

        </div>

    )
}
