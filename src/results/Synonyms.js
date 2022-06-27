import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms.length>0) {
        return (
            <div>
               <strong className="header-synonyms">Synonyms: </strong> <br/>
                {props.synonyms.map((synonym, index) => {
                return (
                    <span className="synonyms" key={index}>
                        {synonym}
                    </span>
            )
        })
        } </div>
        );
    } else { return null; }
}