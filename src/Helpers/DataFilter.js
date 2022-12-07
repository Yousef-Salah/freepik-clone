import DataBase from "../utils/FinalImages.json"

const DataFilter = (props) =>  {
  const data = DataBase;
  const filterdData = [];
  let filters = props.filters;

  const get = () => {
    return this.data.slice(0,10);
  }

  return(<></>);
}

export default DataFilter;