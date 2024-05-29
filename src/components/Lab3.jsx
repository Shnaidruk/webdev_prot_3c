import { Button } from "./Button";
import React, { useState } from 'react';
import l3_3_1 from "../img/l3_3_1.jpg"
import l3_3_2 from "../img/l3_3_2.jpg"
import l3_3_3 from "../img/l3_3_3.jpg"


export function Lab3() {
    const [context1, setContext1] = useState("");
  const [context2, setContext2] = useState("");
  const [context3, setContext3] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const changeContext1 = (newContext) => {
    setContext1(newContext);
  };

  const changeContext2 = () => {
    if (!buttonClicked) {
        setContext2(t2);
    } else {
        setContext2('');
    }
    setButtonClicked(!buttonClicked);
  };

  const changeContext3 = () => {
    if (!buttonClicked) {
        setContext3(t3);
    } else {
        setContext3('');
    }
    setButtonClicked(!buttonClicked);
  };

  

  const t2 =
    <div>
        <ul style={{"list-style": "none"}}>
            <li>
                <Button buttonText="Фіксована таблична верстка" onClick={() => changeContext1(t2_1)} />
            </li>
            <li>
                <Button buttonText="Гумова таблична верстка" onClick={() => changeContext1(t2_2)} />
            </li>
            <li>
                <Button buttonText="Фіксована блокова верстка" onClick={() => changeContext1(t2_3)} />
            </li>
            <li>
                <Button buttonText="Гумова блокова верстка" onClick={() => changeContext1(t2_4)} />
            </li>
        </ul>
    </div>;

    const t3 =
        <div>
            <ul style={{"list-style": "none"}}>
                <li>
                    <Button buttonText="Зовнішній вигляд сторінки" onClick={() => changeContext1(t3_1)} />
                </li>
                <li>
                    <Button buttonText="HTML-код сторінки" onClick={() => changeContext1(t3_2)} />
                </li>
                <li>
                    <Button buttonText="CSS-код сторінки" onClick={() => changeContext1(t3_3)} />
                </li>
            </ul>
        </div>

    const base = 
        <div>
            <h3>Тема:</h3>
            <p>
                Верстка HTML-документу. Блококва Верстка. Верстка Засобами CSS та FLEXBOX.
            </p>
            <h3>Мета:</h3>
            <p>
                Придбати практичні навички роботи верстки сторінок засобами CSS, верстки на
                основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-
                сторінок
                придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX
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
        </div>;

    const t1 = 
        <div>
            <textarea readonly  style={{width: '90%', height: '400px', 'margin-top': '3%'}}
                value={`

            `}
            />
        </div>

    const t2_1 = 
        <div style={{width: '100%'}}>
            <h2>Фіксована таблична верстка</h2>
            <table style={{width: '800px', border: 'black 2px solid', height: '1000px', 'border-spacing': '0'}}>
                <tr>
                    <td colspan="3" style={{width: '100%', height: '10%', 'background-color': 'orange', border: 'black 2px solid'}}>
                        <table  style={{width: '100%', 'border-spacing': '30px'}}>
                            <tr>
                                <td  style={{width: '50%', border: 'black 2px solid', height: '50%',  'background-color': 'white',}}>

                                </td>
                                <td  style={{width: '50%', height: '50%', 'text-align': 'center'}}>
                                    <p>1</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '20%', backgroundColor: 'blue', height: '80%', border: 'black 2px solid', textAlign: 'center', }}>
                        <p>2</p>
                    </td>
                    <table style={{'border-spacing': '20px', height: '100%', width: '100%'}}>
                        <tr>
                            <td colspan="2" style={{width: '50%', backgroundColor: 'red', height: '10%', border: 'black 2px solid', margin: '20px'}}>

                            </td>
                        </tr>
                        <tr>
                            <td style={{width: '25%', backgroundColor: 'white', height: '70%', border: 'black 2px solid', margin: '20px', textAlign: 'center'}}>
                                <p>3</p> 
                            </td> 
                            <td style={{width: '20%', backgroundColor: 'blue', height: '70%', border: 'black 2px solid', margin: '20px', textAlign: 'center', }}>
                                <p>4</p>
                            </td>
                        </tr>
                    </table>
                    
                </tr>
                
                <tr>
                    <td colspan="3" style={{width: '100%', height: '20%', 'background-color': 'orange', border: 'black 2px solid', }}>
                        <p>5</p>
                    </td>
                </tr>
            </table>
            <textarea readonly  style={{width: '90%', height: '400px', 'margin-top': '3%'}}
                value={`
<table style={{width: '800px', border: 'black 2px solid', height: '1000px', 'border-spacing': '0'}}>
    <tr>
        <td colspan="3" style={{width: '100%', height: '10%', 'background-color': 'orange', border: 'black 2px solid'}}>
            <table  style={{width: '100%', 'border-spacing': '30px'}}>
                <tr>
                    <td  style={{width: '50%', border: 'black 2px solid', height: '50%',  'background-color': 'white',}}>
                    </td>
                    <td  style={{width: '50%', height: '50%', 'text-align': 'center'}}>
                        <p>1</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style={{width: '20%', backgroundColor: 'blue', height: '80%', border: 'black 2px solid', textAlign: 'center', }}>
            <p>2</p>
        </td>
        <table style={{'border-spacing': '20px', height: '100%', width: '100%'}}>
            <tr>
                <td colspan="2" style={{width: '50%', backgroundColor: 'red', height: '10%', border: 'black 2px solid', margin: '20px'}}>
                </td>
            </tr>
            <tr>
                <td style={{width: '25%', backgroundColor: 'white', height: '70%', border: 'black 2px solid', margin: '20px', textAlign: 'center'}}>
                    <p>3</p> 
                </td> 
                <td style={{width: '20%', backgroundColor: 'blue', height: '70%', border: 'black 2px solid', margin: '20px', textAlign: 'center', }}>
                    <p>4</p>
                </td>
            </tr>
        </table>            
    </tr>        
    <tr>
        <td colspan="3" style={{width: '100%', height: '20%', 'background-color': 'orange', border: 'black 2px solid', }}>
            <p>5</p>
        </td>
    </tr>
</table>
            `}
            />
        </div>
    
    const t2_2 = 
        <div style={{width: '100%'}}>
            <h2>Гумова таблична верстка</h2>
            <table style={{width: '45.5%', border: 'black 2px solid', height: '1000px', 'border-spacing': '0'}}>
                <tr>
                    <td colspan="3" style={{width: '100%', height: '10%', 'background-color': 'orange', border: 'black 2px solid'}}>
                        <table  style={{width: '100%', 'border-spacing': '30px'}}>                                <tr>
                                <td  style={{width: '50%', border: 'black 2px solid', height: '50%',  'background-color': 'white',}}>
                                </td>
                                <td  style={{width: '50%', height: '50%', 'text-align': 'center'}}>
                                    <p>1</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '20%', backgroundColor: 'blue', height: '80%', border: 'black 2px solid', textAlign: 'center', }}>
                        <p>2</p>
                    </td>
                    <table style={{'border-spacing': '20px', height: '100%', width: '100%'}}>
                        <tr>
                            <td colspan="2" style={{width: '50%', backgroundColor: 'red', height: '10%', border: 'black 2px solid', margin: '20px'}}>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: '25%', backgroundColor: 'white', height: '70%', border: 'black 2px solid', margin: '20px', textAlign: 'center'}}>
                                <p>3</p> 
                            </td> 
                            <td style={{width: '20%', backgroundColor: 'blue', height: '70%', border: 'black 2px solid', margin: '20px', textAlign: 'center' }}>
                                <p>4</p>
                            </td>
                        </tr>
                    </table>    
                </tr>   
                <tr>
                    <td colspan="3" style={{width: '100%', height: '20%', 'background-color': 'orange', border: 'black 2px solid', }}>
                        <p>5</p>
                    </td>
                </tr>
            </table>

            <textarea readonly style={{width: '90%', height: '400px', 'margin-top': '3%'}}
                value={`
<table style={{width: '100%', border: 'black 2px solid', height: '1000px', 'border-spacing': '0'}}>
    <tr>
        <td colspan="3" style={{width: '100%', height: '10%', 'background-color': 'orange', border: 'black 2px solid'}}>
            <table  style={{width: '100%', 'border-spacing': '30px'}}>
                <tr>
                    <td  style={{width: '50%', border: 'black 2px solid', height: '50%',  'background-color': 'white',}}>
                    </td>
                    <td  style={{width: '50%', height: '50%', 'text-align': 'center'}}>
                        <p>1</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style={{width: '20%', backgroundColor: 'blue', height: '80%', border: 'black 2px solid', textAlign: 'center', }}>
                        <p>2</p>
        </td>
        <table style={{'border-spacing': '20px', height: '100%', width: '100%'}}>
            <tr>
                <td colspan="2" style={{width: '50%', backgroundColor: 'red', height: '10%', border: 'black 2px solid', margin: '20px'}}>

                </td>
            </tr>
            <tr>
                <td style={{width: '25%', backgroundColor: 'white', height: '70%', border: 'black 2px solid', margin: '20px', textAlign: 'center'}}>
                    <p>3</p> 
                </td> 
                <td style={{width: '20%', backgroundColor: 'blue', height: '70%', border: 'black 2px solid', margin: '20px', textAlign: 'center' }}>
                    <p>4</p>
                </td>
            </tr>
        </table>
                    
    </tr>             
    <tr>
        <td colspan="3" style={{width: '100%', height: '20%', 'background-color': 'orange', border: 'black 2px solid', }}>
            <p>5</p>
        </td>
    </tr>
</table>
                `}
            />
        </div>;
    
    const t2_3 =
        <div style={{width: '100%'}}>
            <h2>Фіксована блокова верстка</h2>
            <div style={{width: '800px', border: 'black 2px solid', height: '1000px'}}>
                <div style={{width: '800px', height: '100px', 'background-color': 'orange', border: 'black 2px solid'}}>
                    <div style={{width: '320px', height: '48px', 'background-color': 'white', border: 'black 2px solid', float: 'left', margin: '3%'}}>
                    </div>
                    <div style={{width: '320px', float: 'left', margin: '3%', textAlign: 'center'}}>
                        <p>1</p>
                    </div>
                </div>
                <div style={{width: '800px', height: '800px', border: 'black 2px solid'}}>
                    <div style={{width: '160px', backgroundColor: 'blue', height: '800px', border: 'black 2px solid', float: 'left', position: 'relative'}}>
                        <p style={{position: 'absolute', top: '40%', left: '50%'}}>2</p>
                    </div>
                    <div style={{width: '618px', backgroundColor: 'white', height: '784px', border: 'black 2px solid', float: 'left', 'padding': '1%'}}>
                        <div style={{width: '593px', backgroundColor: 'red', height: '160px', border: 'black 2px solid', margin: '2%' }}>

                        </div>
                        <div style={{width: '281px', backgroundColor: 'white', height: '565px', border: 'black 2px solid', margin: '2%', float: 'left', position: 'relative'}}>
                            <div style={{height: '70%', position: 'relative'}}>
                                <p style={{position: 'absolute', top: '40%', left: '50%'}}>3</p>
                            </div>
                            <div style={{width: '281px', backgroundColor: 'red', height: '164px', border: 'black 2px solid', position: 'absolute', bottom: '0'}}>

                            </div>
                        </div>
                        <div style={{width: '281px', backgroundColor: 'blue', height: '565px', border: 'black 2px solid', margin: '2%', float: 'left', position: 'relative' }}>
                            <p style={{position: 'absolute', top: '30%', left: '50%'}}>4</p>
                        </div>
                    </div>
                </div>
                <div style={{width: '800px', height: '95px', 'background-color': 'orange', border: 'black 2px solid', position: 'relative'}}>
                    <p style={{position: 'absolute', top: '30%'}}>5</p>
                </div>
            </div>
            <textarea readonly style={{width: '90%', height: '400px', 'margin-top': '3%'}}
                value={`
<div style={{width: '800px', border: 'black 2px solid', height: '1000px'}}>
    <div style={{width: '800px', height: '100px', 'background-color': 'orange', border: 'black 2px solid'}}>
        <div style={{width: '320px', height: '48px', 'background-color': 'white', border: 'black 2px solid', float: 'left', margin: '3%'}}>
        </div>
        <div style={{width: '320px', float: 'left', margin: '3%', textAlign: 'center'}}>
            <p>1</p>
        </div>
    </div>
    <div style={{width: '800px', height: '800px', border: 'black 2px solid'}}>
        <div style={{width: '160px', backgroundColor: 'blue', height: '800px', border: 'black 2px solid', float: 'left', position: 'relative'}}>
            <p style={{position: 'absolute', top: '40%', left: '50%'}}>2</p>
        </div>
        <div style={{width: '618px', backgroundColor: 'white', height: '784px', border: 'black 2px solid', float: 'left', 'padding': '1%'}}>
            <div style={{width: '593px', backgroundColor: 'red', height: '160px', border: 'black 2px solid', margin: '2%' }}>
            </div>
            <div style={{width: '281px', backgroundColor: 'white', height: '565px', border: 'black 2px solid', margin: '2%', float: 'left', position: 'relative'}}>
                <div style={{height: '70%', position: 'relative'}}>
                    <p style={{position: 'absolute', top: '40%', left: '50%'}}>3</p>
                </div>
                <div style={{width: '281px', backgroundColor: 'red', height: '164px', border: 'black 2px solid', position: 'absolute', bottom: '0'}}>

                </div>
            </div>
            <div style={{width: '281px', backgroundColor: 'blue', height: '565px', border: 'black 2px solid', margin: '2%', float: 'left', position: 'relative' }}>
                <p style={{position: 'absolute', top: '30%', left: '50%'}}>4</p>
            </div>
        </div>
    </div>
    <div style={{width: '800px', height: '95px', 'background-color': 'orange', border: 'black 2px solid', position: 'relative'}}>
        <p style={{position: 'absolute', top: '30%'}}>5</p>
    </div>
</div>
            `}
            />
        </div>;

    const t2_4 =
        <div style={{width: '100%'}}>
            <h2>Гумова блокова верстка</h2>
            <div style={{width: '45.3%', height: '1000px'}}>
                <div style={{width: '100%', height: '100px', 'background-color': 'orange', border: 'black 2px solid', 'box-sizing': 'border-box'}}>
                    <div style={{width: '40%', height: '48px', 'background-color': 'white', border: 'black 2px solid', float: 'left', 'margin-top': '3%', 'margin-left': '3%','box-sizing': 'border-box'}}>

                    </div>
                    <div style={{width: '40%', float: 'left', 'margin-top': '3%', 'margin-left': '3%', textAlign: 'center', 'box-sizing': 'border-box'}}>
                        <p>1</p>
                    </div>
                </div>
                <div style={{width: '100%', height: '800px', border: 'black 2px solid', 'box-sizing': 'border-box'}}>
                    <div style={{width: '20%', backgroundColor: 'blue', height: '800px', border: 'black 2px solid', float: 'left', position: 'relative', 'box-sizing': 'border-box'}}>
                        <p style={{position: 'absolute', top: '40%', left: '50%'}}>2</p>
                    </div>
                    <div style={{width: '80%', backgroundColor: 'white', height: '800px', border: 'black 2px solid', float: 'left', 'box-sizing': 'border-box'}}>
                        <div style={{width: '96%', backgroundColor: 'red', height: '160px', border: 'black 2px solid', margin: '2%' }}>

                        </div>
                        <div style={{width: '45.5%', backgroundColor: 'white', height: '576px', border: 'black 2px solid', margin: '2%', float: 'left', position: 'relative', 'box-sizing': 'border-box'}}>
                            <div style={{height: '70%', position: 'relative'}}>
                                <p style={{position: 'absolute', top: '40%', left: '50%'}}>3</p>
                            </div>
                            <div style={{width: '100%', backgroundColor: 'red', height: '167px', border: 'black 2px solid', position: 'absolute', bottom: '0', 'box-sizing': 'border-box'}}>

                            </div>
                        </div>
                        <div style={{width: '45.5%', backgroundColor: 'blue', height: '576px', border: 'black 2px solid', margin: '2%', float: 'left', position: 'relative', 'box-sizing': 'border-box'}}>
                            <p style={{position: 'absolute', top: '30%', left: '50%'}}>4</p>
                        </div>
                    </div>
                </div>
                <div style={{width: '100%', height: '100px', 'background-color': 'orange', border: 'black 2px solid', position: 'relative', 'box-sizing': 'border-box'}}>
                    <p style={{position: 'absolute', top: '30%'}}>5</p>
                </div>  
            </div>
            <textarea readonly style={{width: '90%', height: '400px', 'margin-top': '3%'}}
                value={`
<div style={{width: '45.3%', height: '1000px'}}>
    <div style={{width: '100%', height: '100px', 'background-color': 'orange', border: 'black 2px solid', 'box-sizing': 'border-box'}}>
        <div style={{width: '40%', height: '48px', 'background-color': 'white', border: 'black 2px solid', float: 'left', margin: '3%', 'box-sizing': 'border-box'}}>
        </div>
        <div style={{width: '40%', float: 'left', margin: '3%', textAlign: 'center', 'box-sizing': 'border-box'}}>
            <p>1</p>
        </div>
    </div>
    <div style={{width: '100%', height: '800px', border: 'black 2px solid'}}>
        <div style={{width: '20%', backgroundColor: 'blue', height: '800px', border: 'black 2px solid', float: 'left', position: 'relative', 'box-sizing': 'border-box'}}>
            <p style={{position: 'absolute', top: '40%', left: '50%'}}>2</p>
        </div>
        <div style={{width: '80%', backgroundColor: 'white', height: '800px', border: 'black 2px solid', float: 'left', 'padding': '1%', 'box-sizing': 'border-box'}}>
            <div style={{width: '96%', backgroundColor: 'red', height: '160px', border: 'black 2px solid', margin: '2%' }}>
            </div>
            <div style={{width: '45.5%', backgroundColor: 'white', height: '576px', border: 'black 2px solid', margin: '2%', float: 'left', position: 'relative', 'box-sizing': 'border-box'}}>
                <div style={{height: '70%', position: 'relative'}}>
                    <p style={{position: 'absolute', top: '40%', left: '50%'}}>3</p>
                </div>
                <div style={{width: '100%', backgroundColor: 'red', height: '232px', border: 'black 2px solid', position: 'absolute', bottom: '0', 'box-sizing': 'border-box'}}>
                </div>
            </div>
            <div style={{width: '45.5%', backgroundColor: 'blue', height: '576px', border: 'black 2px solid', margin: '2%', float: 'left', position: 'relative', 'box-sizing': 'border-box'}}>
                <p style={{position: 'absolute', top: '30%', left: '50%'}}>4</p>
            </div>
        </div>
    </div>
    <div style={{width: '100%', height: '100px', 'background-color': 'orange', border: 'black 2px solid', position: 'relative', 'box-sizing': 'border-box'}}>
        <p style={{position: 'absolute', top: '30%'}}>5</p>
    </div>  
</div>
            `}
            />
        </div>;

    const t3_1 =
        <div>
            <img src={l3_3_1} alt="" />
            <img src={l3_3_2} alt="" />
            <img src={l3_3_3} alt="" />
        </div>;
    const t3_2 =
    <div style={{width: '100%'}}>
        <textarea readonly style={{width: '90%', height: '1000px', 'margin-top': '3%'}}
            value={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div>
            <h1>Професія Java-розробник</h1>
        </div>
        <div class="p-container">    
            <div class="pam">
                <p>● Портфоліо для старту кар'єри</p>
            </div>
            <div class="pam">
                <p>● Навчання на реальних кейсах</p>
            </div>
            <div class="pam">
                <p>● Заробіток після 4 місяців навчання</p>
            </div>  
            <div class="pam">
                <p>● Можна працювати віддалено</p>
            </div>   
        </div>
    </header>
    <main>
        <h2>Як проходить навчаня</h2>
        <div id="stages">
            <div class="st-container">
                <div class="num">
                    <p>1</p>
                </div>
                <h3>Дивитеся відеолекції</h3>
                <p>Якісне відео із зрозумілим поясненням теорії</p>             
                <img class="stage-img-cont" src="img/vid.jpg" alt="">
            </div>
            <div class="st-container">
                <div class="num">
                    <p>2</p>
                </div>
                <h3>Робите завдання і відправляєте на перевірку</h3>
                <p>Поспішати не треба, вибирайте зручний режим навчання</p>               
                <img class="stage-img-cont" src="img/zav.jpg" alt="">
            </div>
            <div class="st-container">
                <div class="num">
                    <p>3</p>
                </div>
                <h3>Отримуєте розбір вашої роботи</h3>
                <p>Ваш куратор розповість про помилкиі про те як їх виправити</p>
                <img class="stage-img-cont" src="img/rozb.jpg" alt="">   
            </div>
            <div class="st-container">
                <div class="num">
                    <p>4</p>
                </div>
                <h3>Працюєте над помилками</h3>
                <p>Проходьте перевірку ще раз щоб переконатися що все правильно</p>
                <img class="stage-img-cont" src="img/pom.jpg" alt="">
            </div>
        </div>
        <h2>Рівні навчання</h2>
        <div class="level-cont">
            <div style="width: 65%;">
                <img style="width: 100%;" src="img/lev1.jpg" alt="">
            </div>
            <div style="width: 30%; margin-left: 5%;">
                <h3>Перший рівень: чітка і зрозуміла теорія</h3>
                <p>
                    За 4 місяці вам необхідно буде пройти 16 тем. Ви самостійно набудете базових навичок, з якими зможете створювати справжні проекти. Ви створите дипломний проект - движок блогу в веб-інтерфейсі. Захист проекту проходить у відкритому режимі - на нашому майданчику
                    або по відеозв'язку
                </p>
            </div>
        </div>
        <h2>Рівні навчання</h2>
        <div class="level-cont">
            <div style="width: 65%;">
                <img style="width: 100%;" src="img/lev2.jpg" alt="">
            </div>
            <div style="width: 30%; margin-left: 5%;">
                <h3>Другий рівень: інтенсивна практика</h3>
                <p>
                    Під керівництвом наставника ви в складі команди створите власну соціальну мережу. Фактично ця частина програми прирівнюється до стажування. Вам видадуть Т3 і дизайн проекту. Всі процеси, через які ви
                    пройдете, - це максимально наближений до бойових
                    умов досвід. Саме так створюється комерційне програмне забезпечення в Фірмах-роботодавців.
                </p>
            </div>
        </div>
    </main>
    <footer>
        <div style="width: 80%; height: 40px; background-color: black; margin: 0.5%;">
            <p style="margin-left: 3%;color: white;">2024</p>
        </div>
        <div style="display: flex;">
            <a style="margin: 3%;" href="https://web.telegram.org/a/">
                <div class="ur-container">
                    <img class="ur-logo" src="img/teleg.png" alt="">
                </div>
            </a>
            <a style="margin: 3%;" href="https://www.youtube.com/">
                <div class="ur-container">
                    <img class="ur-logo" src="img/you.png" alt="">
                </div>
            </a>
            <a style="margin: 3%;" href="https://www.instagram.com/">
                <div class="ur-container">
                    <img class="ur-logo" src="img/inst.png" alt="">
                </div>
            </a>
            <a style="margin: 3%;" href="https://ua.linkedin.com/">
                <div class="ur-container">
                    <img class="ur-logo" src="img/in.png" alt="">
                </div>
            </a>
            <a style="margin: 3%;" href="https://www.facebook.com/?locale=uk_UA">
                <div class="ur-container">
                    <img class="ur-logo" src="img/facebook.png" alt="">
                </div>
            </a>
        </div>
    </footer>
</body>
</html>
            `}
        />
    </div>;
    const t3_3 =
    <div style={{width: '100%'}}>
        <textarea readonly style={{width: '30%', height: '1000px', 'margin-top': '3%'}}
            value={`
*{
    font-family: Arial, Helvetica, sans-serif;
}

body{
    margin-left: 20%;
    margin-right: 20%;
}

footer{
    display: flex;
}

h1{
    background-color: orange;
}

.p-container{
    display: flex;
    justify-content: center;
}

.pam{
    margin: 10px;
    padding: 10px;
    width: 150px;
    background-color: orange;
}

.st-container{
    margin: 10px;
    width: 17%;
    height: 350px;
    border: 1px solid black;
    flex-direction: column;
    position: relative;
}

.stage-img-cont{
    width: 100%;
    height: 39.5%;  
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
}

.num{
    margin: 5px;
    width: 20px;
    height: 20px;
    background-color: orange;
    border-radius: 50%;
    text-align: center;
}

.level-cont{
    display: flex;
}

.ur-container{
  
    width: 40px;
    height: 40px;
    background-color: black;
}
.ur-logo{
    width: 40px;
    height: 40px;
}

#stages{
    display: flex;
    justify-content: center;
}

            `}
        />
    </div>

    const vysn =
        <div>
            <h3>Висновки</h3>
            <p>У ході виконання ми опрацювали різні види верстки HTML-документу, поглибили свої знання та навички у використанні
                CSS, а також спробували використати Flexbox.     
            </p>
            <p>
                На приактиці прийшло розуміння організації веб-сторінки, як вона будується та з яких елементів. Саме це ми опрацювали
                спробувавши використати табличну фіксовану, табличну гумову, блокову фіксовану та блокову гумову верстки. Вивчили всі їх 
                плюси та недоліки протестувавши все від лиця користувача.
            </p>
            <p>
                Flexbox - потужний CSS-інструмент призначений для створення гнучких та адаптивних макетів веб-сторінок. Освоєння цього інструменту 
                дало розуміння про розташування елементів на сторінці та спростило роботу. А також дало можливість створювати адаптивні веб-сторінки.
            </p>
        </div>


    return(
        <div class="cont">
            <div class="sidebar">
                <ul style={{"list-style": "none"}}>
                    <li>
                        <Button buttonText="Тема, мета ЛР №3 Місце розташування сайту, звіту" onClick={() => changeContext1(base)} />
                    </li>
                    <li>
                        <Button buttonText="Завдання № 1. зовнішній вигляд макету. Код макету" onClick={() => changeContext1(t1)} />
                    </li>
                    <li>
                        <Button buttonText="Завдання № 2" onClick={() => changeContext2()} />
                        {context2}
                    </li>
                    <li>
                        <Button buttonText="Завдання № 3" onClick={() => changeContext3()} />
                        {context3}
                    </li>
                    <li>
                        <Button buttonText="Висновки до ЛР №3" onClick={() => changeContext1(vysn)} />
                    </li>
                </ul>
            </div>
            <div class="output">
                {context1}
            </div>

        </div>

    )
}