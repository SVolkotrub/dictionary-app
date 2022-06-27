import React from "react";
import Meaning from "./Meaning";
import WordWithSound from "./WordWithSound";

export default function Results(props) {
    console.log(props.results);
    if(props.results){
    return (
        <div className="container">
            <WordWithSound word={props.results.word} phonetics={props.results.phonetics}/>
            
            {props.results.meanings.map((meaning, index) => {
                return (<div className="meaning" key={index}>
                <Meaning meaning={meaning} />
                </div>);
            })}
        </div>  
    );
    } else { return null; }
}