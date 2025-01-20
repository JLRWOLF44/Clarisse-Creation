import { useParams, useNavigate } from "react-router-dom";
import data from "../../assets/data";
import "./ImageDetails.css";

interface ImageDetails {
  imgSrc: string;
  description: string;
}

function ImageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const imageDetails = data.find((el) => el.imgSrc === id);

  if (!imageDetails) {
    return <p>Image not found!</p>;
  }

  const handleClick = () => {
    navigate("/mycreations");
  };

  return (
    <div className="image-details" onClick={handleClick}>
      /
      <img src={imageDetails.imgSrc} alt="Large view" />
    </div>
  );
}

export default ImageDetails;
