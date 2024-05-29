import { Button } from "./Button";
import React, { useState } from 'react';

export function Lab1() {
    const [pageContext, setPageContext] = useState("");

    const changePageContext = (newContext) => {
        setPageContext(newContext);
    };

    return(
        <div>
            <ul>
                <li>
                    <Button buttonText="Опис предметного середовища" onClick={() => changePageContext("geq")}/>
                </li>
                <li>
                    <Button/>
                </li>
                <li>
                    <Button/>
                </li>
                <li>
                    <Button/>
                </li>
                <li>
                    <Button/>
                </li>
                <li>
                    <Button/>
                </li>
                <li>
                    <Button/>
                </li>
            </ul>
            {pageContext}
        </div>
    )
}
