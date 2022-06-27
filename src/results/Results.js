import React from "react";
import Meaning from "./Meaning";
import WordWithSound from "./WordWithSound";


export default function Results(props) {
    console.log(props.results);
    if(props.results){
    return (
        <div >
            <WordWithSound word={props.results.word} phonetics={props.results.phonetics}/>
            
            {props.results.meanings.map((meaning, index) => {
                return (<section className="meaning" key={index}>
                <Meaning meaning={meaning} />
                </section>);
            })}
        </div>  
    );
    } else { return null; }
}