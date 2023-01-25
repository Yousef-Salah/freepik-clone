import { Link } from "react-router-dom";
import "./discover-collections.css";

const DiscoverCollectionTitle = () => {
  return (
    <div className="discover-collection-title">
      <div className="left-space"></div>
      <div className="center-content">
        <h1 className="discover-collection-h1">
          Discover and follow the most popular collections
        </h1>
      </div>
      <div className="view-content">
        <Link to="collections" className="viewall-btn">
          View all<i className="fa-solid fa-angle-right view-all"></i>
        </Link>
      </div>
    </div>
  );
};
export default DiscoverCollectionTitle;

