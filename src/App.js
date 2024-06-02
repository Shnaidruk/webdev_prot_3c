import { Button } from "./components/Button";
import { Lab1 } from "./components/Lab1";
import { Lab2 } from "./components/Lab2";
import { Lab3 } from "./components/Lab3";
import { Lab4 } from "./components/Lab4";
import { Lab5 } from "./components/Lab5";
import { Lab6 } from "./components/Lab6";
import { Lab7 } from "./components/Lab7";
import { Lab8 } from "./components/Lab8";
import { Lab9 } from "./components/Lab9";

import "./css/style.css";
import React, { useState } from 'react';
import myphoto from "./img/my-photo.jpg"

function App() {
  const [pageContext, setPageContext] = useState("");

  const changePageContext = (newContext) => {
    setPageContext(newContext);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="heading-cont">
          <h1>ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ З ДИСЦИПЛІНИ "WEB-ОРІЄНТОВАНІ ТЕХНОЛОГІЇ. ОСНОВИ FRONTEND ТА BACKEND РОЗРОБОК"</h1>
          <p>Студент групи ІО-15 Шнайдрук Андрій</p>
        </div>
        <div class="avatar-cont">
          <img class="avatar" src={myphoto} alt=""/>
        </div>
        
       
      </header>
      <main>
        <div class="base-but">
          <Button buttonText="Лабораторна робота №1" onClick={() => changePageContext(<Lab1/>)}/>
          <Button buttonText="Лабораторна робота №2" onClick={() => changePageContext(<Lab2/>)}/>
          <Button buttonText="Лабораторна робота №3" onClick={() => changePageContext(<Lab3/>)}/>
          <Button buttonText="Лабораторна робота №4" onClick={() => changePageContext(<Lab4/>)}/>
          <Button buttonText="Лабораторна робота №5" onClick={() => changePageContext(<Lab5/>)}/>
          <Button buttonText="Лабораторна робота №6" onClick={() => changePageContext(<Lab6/>)}/>
          <Button buttonText="Лабораторна робота №7" onClick={() => changePageContext(<Lab7/>)}/>
          <Button buttonText="Лабораторна робота №8" onClick={() => changePageContext(<Lab8/>)}/>
          <Button buttonText="Лабораторна робота №9" onClick={() => changePageContext(<Lab9/>)}/>
        </div>
        <div>
          {pageContext}  
        </div>
        
      </main>
    </div>
  );
}

export default App;
