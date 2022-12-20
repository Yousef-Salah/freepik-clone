import './Promote.css';
import photo from "../../../assets/images/Promote/resources.jpg";

const PromoteImg = () =>{
    return(
        <div className="PromotePhoto">
        <img src={photo} alt="promote" loading="lazy" ></img>
</div>
        
    );
}
export default PromoteImg;