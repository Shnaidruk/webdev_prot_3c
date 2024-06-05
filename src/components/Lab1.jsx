import { Button } from "./Button";
import React, { useState } from 'react';
import image from "../img/image.png";


export function Lab1() {
    const [context1, setContext1] = useState("");
  const [context2, setContext2] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const changeContext1 = (newContext) => {
    setContext1(newContext);
  };

  const changeContext2 = () => {
    if (!buttonClicked) {
        setContext2(struct);
    } else {
        setContext2('');
    }
    setButtonClicked(!buttonClicked);
  };

  const opys =
    <div>
        <h3>Предметне середовище</h3>
        <p>
            Предметним середовищем є розробка веб-сайту з пошуку ресторанів.
            В додатку повинна бути фільтрація ресторанів за рейтингом та кухнею, пошук ресторанів 
            та основна сторінка як каталог найпопулярніших пошукових запитів на заклади харчування.
            Для того щоб це реалізувати потрібно використати технології такі як HTML розмітка та CSS
            для оформлення стилів. Для управління версіями використовується система управління Git
            та хмарне середовище Github.    
        </p>
    </div>


  const base = 
    <div>
        <h3>Тема:</h3>
        <p>
            Структруа HTML-Документа. Вибір предметної шалузі.
            Робота з посиланнями, таблицями, зображеннями, списками в
            HTML-Документі.
        </p>
        <h3>Мета:</h3>
        <p>
            Придбати практичні навички роботи з HTML-документом, таблицями, ,
            зображеннями, посиланнями, списками, формами
            Створити шаблон звітного HTML-документом для відображення
            результатів роботи всіх лабораторних робіт.
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


    const struct = 
        <div>
            <ul style={{"list-style": "none"}}>
                <li style={{width:"100%"}}>
                    <Button buttonText="HTML-код таблиці" onClick={() => changeContext1(tabl)} />
                </li>
                <li>
                    <Button buttonText="HTML-код форми" onClick={() => changeContext1(forma)} />
                </li>
                <li>
                    <Button buttonText="HTML-код картинки" onClick={() => changeContext1(pic)} />
                </li>
            </ul>
        </div>

    const tabl = 
        <div>
            <h3>HTML-код таблиці</h3>
            <textarea readOnly style={{width:'200px', height: '220px'}} value={`
<table>
<tr>
    <td>1</td>
    <td>2</td>
</tr>
<tr>
    <td>3</td>
    <td>4</td>
</tr>
</table>
            `}/>
            <h3>Вигляд на сторінці:</h3> 
            <table>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>4</td>
                </tr>
            </table>
        </div>;

    const forma = 
        <div>
             <h3>HTML-код форми</h3>
            <textarea readOnly style={{width:'300px', height: '120px'}} value={`
<form>
    <label htmlFor="name"></label>
    <input type="text" id="name" name="name"/><br>
</form>
            `}/>
            <h3>Вигляд на сторінці:</h3>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"/>
            </form>
        </div>;

    const pic = 
        <div>
        <h3>HTML-код картинки</h3>
            <textarea readOnly style={{width:'320px', height: '100px'}} value={`
<img src="image.jpg" alt="Description" />
            `}/>
            <h3>Вигляд на сторінці:</h3>
            <img src={image} alt="Description" />
        </div>;

const vysn = 
    <div>
        <h3>Висновки</h3>
        <p>
            У ході виконання лабораторної роботи я поглибив свої знання про HTML розмітку та використав їх на практиці.
            Мною було розроблено сторінку резюме, сторінку живого звіту та сторінку проекту без підключення стилів. Я також 
            освоїв основи веб-дизайну за допомогою потужного інсрументу Figma.
        </p>
    </div>


    return(
        <div class="cont">
            <div class="sidebar">
                <ul style={{"list-style": "none"}}>
                    <li>
                        <Button buttonText="Опис предметного середовища" onClick={() => changeContext1(opys)} />
                    </li>
                    <li>
                        <Button buttonText="Тема, мета ЛР №1 Місце розташування сайту, звіту" onClick={() => changeContext1(base)} />
                    </li>
                    <li>
                        <Button buttonText="Структура документу" onClick={() => changeContext2()} />
                        {context2}
                    </li>
                    <li>
                        <Button buttonText="Висновки до ЛР №1" onClick={() => changeContext1(vysn)} />
                    </li>
                </ul>
            </div>
            <div class="output">
                {context1}
            </div>

        </div>

    )
}

