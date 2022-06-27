export default function Phonetics(props) {
    return (<>
        <div className="col-1 text-start audio">
                        <a href={props.phonetics.audio} className="border-light rounded-circle ms-2" target="_blank" rel="noreferrer noopener" >
                                <i className="fa-solid fa-volume-high"></i> </a>
                    </div>
            <div className="col-md-5 phonetic text-start">
                <span>{props.phonetics.text }</span>
        </div>
        </>
             
    );
}