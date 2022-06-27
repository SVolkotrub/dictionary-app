import Phonetics from "./Phonetics";

export default function WordWithSound(props) {
    return (
        <div className="word-main">
            <div className="row">
                <div className="col-md-5 text-end word">
                    {props.word}                           
                    
                    
                </div>
                
                <Phonetics phonetics={props.phonetics[0]} />
            </div>
        </div>
    );
}