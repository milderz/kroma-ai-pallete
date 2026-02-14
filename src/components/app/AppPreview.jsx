
import './AppPreview.css'; // Assuming you have a CSS file for styling

const AppPreview = ({ title, description, imageUrl }) => {
    return (
        <div className="app-preview">
            <h2>{title}</h2>
            <p>{description}</p>
            {imageUrl && <img src={imageUrl} alt={title} className="app-preview-image" />}
        </div>
    );
};

export default AppPreview;