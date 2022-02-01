import React from "react";
import "./styles.css";

const Display = ( {jgdrAtualDisplay} ) => {
    return (
        <div className="input">
            Jogador atual: {jgdrAtualDisplay}
        </div>
    )
}

export default Display;