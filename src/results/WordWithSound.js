import Phonetics from "./Phonetics";
import "./WordWithSound.css";

export default function WordWithSound(props) {
    return (
        <section className="word-main">
            <div className="row">
                <div className="col-md-5 text-end">
                   <h3 className="word"> {props.word} </h3>                      
                                       
                </div>
                
                <Phonetics phonetics={props.phonetics[0]} />
            </div>
        </section>
    );
}