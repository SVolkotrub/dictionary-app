import "./Examples.css";

export default function Examples(props) {
    
    if (props.definition.hasOwnProperty("example")) { 
    return (
        <div className="example">
            <strong>Examples: </strong>
            <em > {props.definition.example}</em> <br />
        </div>);
    } else { return null; }
}