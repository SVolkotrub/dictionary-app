import Phonetics from "./Phonetics";

export default function WordWithSound(props) {
    return (
        <div className="word-main">
            <div className="row">
                <div className="col-md-6 text-end">
                     <div className="word">{props.word}<a className="btn border-light rounded-circle ms-2" href={props.phonetics.audio} target="_blank" rel="noreferrer noopener" >
                        <i className="fa-solid fa-volume-high"></i> </a></div>
                    
                </div>
                <Phonetics phonetics={props.phonetics[0]} />
            </div>
        </div>
    );
}