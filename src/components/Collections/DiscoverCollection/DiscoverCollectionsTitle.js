import "./discover-collections.css";

const DiscoverCollectionTitle = () => {
  return (
    <div className="discover-collection-title">
      <div className="col-10">
        <h1 id="discover-collection-h1">
          {" "}
          Discover and follow the most popular collections{" "}
        </h1>
      </div>
      <a href="http://localhost:3000/collections" className="Viewall-btn">
        View all<i className="fa-solid fa-angle-right view-all"></i>
      </a>
    </div>
  );
};
export default DiscoverCollectionTitle;
