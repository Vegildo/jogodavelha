import React from "react";
import "./styles.css";

const Bloco = ( {bloco} ) => {
    return (
        <div className='bloco-wrapper bloco'>
            {bloco.map((item, index) => <div key={index} className={`celula ${item}`}>{item}</div>)}
        </div>
    );
}

export default Bloco;

/* <div
    className="bloco-wrapper bloco"
>
            
</div> */