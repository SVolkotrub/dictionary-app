import Synonyms
    from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";
    
export default function Meaning(props) {
    
    return (
    
        <div className="text-start">
            <h4 className="part-of-speech"><em>{props.meaning.partOfSpeech}</em></h4>
            <ul> 
                {props.meaning.definitions.map((definition, index) => {
                    return (
                        <li className="definition" key={index}>
                        {definition.definition}
                            
                          
                        <Examples definition={definition} />
                       
                    </li>);
                })}
            </ul>  
             <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    
    );
}