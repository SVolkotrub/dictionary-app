import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
   
    if(props.results){
    return (
        <div className="container">
            <h2>{props.results.word}</h2>
            {props.results.meanings.map((meaning, index) => {
                return (<div className="meaning" key={index}>
                <Meaning meaning={meaning} />
                </div>);
            })}
        </div>  
    );
    } else { return null; }
}