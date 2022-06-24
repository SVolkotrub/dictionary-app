export default function Meaning(props) {
   
    return (
    
        <div className="part-of-speech text-start">
            <h3>{props.meaning.partOfSpeech}</h3>
            <ul> 
                {props.meaning.definitions.map((definition, index) => {
                    return (<li key={index}>
                        <p>{definition.definition}
                            <br/>
                           <em> {definition.example}</em></p>
                    </li>);
                })}
            </ul>
           
        </div>
    
    );
}