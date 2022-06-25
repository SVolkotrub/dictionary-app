export default function Synonyms(props) {
    if (props.synonyms.length>0) {
        return (
            <div>
               <strong>Synonyms: </strong> 
                {props.synonyms.map((synonym, index) => {
                return (
                    <li className="synonyms" key={index}>
                        {synonym}
                    </li>
            )
        })
        } </div>
        );
    } else { return null; }
}