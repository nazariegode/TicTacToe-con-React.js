import React from "react";

function Square({ onClick, value }) {
    return (
        <button className={`square ${value ? "square--active" : ""}`} onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;