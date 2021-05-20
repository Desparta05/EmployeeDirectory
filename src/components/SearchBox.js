import React, {useState} from "react";
import "../styles/SearchBox.css";
// import DataTable from "../components/DataTable";
import DataArea from "./DataArea";


function SearchBox() {
  let [search, setSearch] = useState('');

  const handleSearchChange =({target}) => {
    const {value} = target;
    setSearch(value);
    if(!search) {
      setSearch(DataArea);
    }
  }

  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
      </form>
    </div>
  );
}
export default SearchBox;
