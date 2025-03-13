import { useState } from "react";
import { buttons } from "../buttons";

export default function Calculator (){
    const [text, setText] = useState('');
    const [action, SetAction] = useState('');

    const buttonHanler = (e) => {
        switch (e) {
            case "C":
                return setText((text) => text="");
            case "=":
                return SetAction((action) => action = result);
        }        
        setText((text) => text + e);             
    }


    return (
        <>
        <form action="" name="calc" className="calculator">
        <input id="input" type="text" className="value" value={action ? action : text} readOnly name="txt"></input>
        {buttons.map(button => 
            <span key={button.id} className={button.class || button.title} button={button.title} onClick={() => buttonHanler(button.title)}><i>{button.title}</i></span>)}     
        </form>
        </>
    )
}