import "./Photos.css";

export default function Photos(props) {
    if (props.results !== null && props.photos !== null) { 
    return (
        <section className="Photos">
            <div className="row">
            {props.photos.map((photo, index) => {
                return (
                    <div className="col-md-4" key={index}>
                        <a href={photo.src.original} target="_blank" rel="noreferrer noopener">
                        <img src={photo.src.landscape} alt="" className="img-fluid photo-style"/></a>
                    </div>
                );
            })}
            </div>
        </section>
    );
    } else { return null; }
}