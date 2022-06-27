export default function Examples(props) {
    
    if (props.definition.hasOwnProperty("example")) { 
    return (
        <p>
            <strong>Examples: </strong>
            <em> {props.definition.example}</em> <br />
        </p>);
    } else { return null; }
}