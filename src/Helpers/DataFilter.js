import { useCookies } from "react-cookie";
import DataBase from "../utils/FinalImages.json";

export class DataFilter {
  constructor() {
    this.data = DataBase;
  }

  getData(filters) {

    let filteredData = JSON.parse(JSON.stringify(this.data));

    if(filters.category) {
      filteredData = filteredData.filter((item) => item.category.toLowerCase().includes(filters.category.toLowerCase()));
    }

    if(filters.itemPriceType.length == 1) {
      if(filters.itemPriceType[0].toLowerCase() == 'free') {
        filteredData = filteredData.filter((item) => item.premium == false);
      }

      if(filters.itemPriceType[0].toLowerCase() == 'premium') {
        filteredData = filteredData.filter((item) => item.premium == true);
      }
    }

    if(filters.search) {
      filteredData = filteredData.filter((item) => item.title.toLowerCase().includes(filters.search.toLowerCase()))
    }

    return filteredData.slice(0,10);    // for pagination
  }
}

export default DataFilter;
