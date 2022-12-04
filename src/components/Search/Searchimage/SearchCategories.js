import Cardsphotos from "../../Home/TrendingCategories/Cardsphotos";
import Searchimgcard from "./Searchimgcard";

const SearchCategories = () => {
  const data = Cardsphotos();
  <div className="grid" id="search">
    {data.map((Cardphoto) => {
      return (
        <div className="item" id={Cardphoto.id}>
          <Searchimgcard Cardphoto={Cardphoto} />
        </div>
      );
    })}
  </div>;
};
export default SearchCategories;
