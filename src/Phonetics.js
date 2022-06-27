export default function Phonetics(props) {
    return (
            <div className="col-md-6 phonetic pt-1 text-start">
                <span>{props.phonetics.text }</span>
            </div>
             
    );
}