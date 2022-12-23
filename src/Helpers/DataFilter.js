import DataBase from "../utils/FinalImages.json";

export class DataFilter {
  constructor() {
    this.data = DataBase;
  }

  getData(filters) {
    let filteredData = JSON.parse(JSON.stringify(this.data));
    
    if(filters.searchInput) {
      filteredData = filteredData.filter((item) => item.title.toLowerCase().includes(filters.searchInput.toLowerCase()));
    }

    if(filters.category) {
      filteredData = filteredData.filter((item) => {
        item.title.toLowerCase().includes(filters.category.toLowerCase()) ||
        item.category.toLowerCase().includes(filters.category.toLowerCase()) 
      })
    }

    if(filters.itemPriceType.length == 1) {
      if(filters.itemPriceType[0] == 'Free') {
        filteredData = filteredData.filter((item) => item.premium == false);
      }

      if(filters.itemPriceType[0] == 'Premium') {
        filteredData = filteredData.filter((item) => item.premium == true);
      }
    }

    return filteredData;    // for pagination
  }
}

export default DataFilter;
