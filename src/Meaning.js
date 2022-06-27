import Synonyms
    from "./Synonyms";
import Examples from "./Examples";
    
export default function Meaning(props) {
    
    return (
    
        <div className="part-of-speech text-start">
            <h3><em>{props.meaning.partOfSpeech}</em></h3>
            <ul> 
                {props.meaning.definitions.map((definition, index) => {
                    return (<li key={index}>
                        <p>{definition.definition}
                            <br /></p>
                          
                        <Examples definition={definition} />
                       
                    </li>);
                })}
            </ul>  
             <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    
    );
}