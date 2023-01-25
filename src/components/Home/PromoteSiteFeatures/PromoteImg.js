import photo from "../../../assets/images/Promote/resources.jpg";
import "./promote.css";

const PromoteImg = () => {
  return (
    <div className="promote-photo">
      <img src={photo} alt="promote" loading="lazy"></img>
    </div>
  );
};
export default PromoteImg;

