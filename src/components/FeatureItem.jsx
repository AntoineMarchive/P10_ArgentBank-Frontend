import "../index.css";

export function FeatureItem({image, alt, title, text}) {
    return (
        <div className="feature-item">
            <img src={ image } alt={title} className="feature-icon" />
            <h3 className="feature-item-title"> { title } </h3>
            <p> { text } </p>
        </div>
    );
}