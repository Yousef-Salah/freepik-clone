import DataBase from "../utils/FinalImages.json"

export class DataFilter {
  constructor(filter) {
    this.data = DataBase;
    this.filter = filter
    if(this.filter == null);
  }

  // TODO: 
  get(num) {
    return this.data.slice(0, 10);
  }
}

export default DataFilter;