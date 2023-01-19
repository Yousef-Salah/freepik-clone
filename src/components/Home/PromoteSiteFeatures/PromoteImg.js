import photo from "../../../assets/images/Promote/resources.jpg";
import "./Promote.css";

const PromoteImg = () => {
  return (
    <div className="PromotePhoto">
      <img src={photo} alt="promote" loading="lazy"></img>
    </div>
  );
};
export default PromoteImg;
