import React from "react";
import "./styles.css";

const Display = ( {jogadorAtual} ) => {
    return (
        <div className="input">
            Jogador atual: {jogadorAtual}
        </div>
    )
}

export default Display;