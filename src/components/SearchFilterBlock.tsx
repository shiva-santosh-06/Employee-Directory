import { ChangeEvent, useContext } from "react";
import Alphabet from "./Alphabet";
import ClearButton from "./ClearButton";
import { EmployeeListContext, Employee } from "../contexts/EmployeeListContext";
import FilterTag from "./FilterTag";
import SearchBox from "./SearchBox";



export default function SearchFilterBlock() {
  const {
    setClickedCard
  } = useContext(EmployeeListContext);

  const handleClickAddEmployee = () => {
    setClickedCard(null);
  };

  

  return (
    <div>
      <Alphabet/>
      <div className="row my-sm-1 my-2 ">
        <div className="col-auto d-flex  align-items-center p-0" id="search-searchFilterBlock">
          <label htmlFor="search" className="m-1">
            Search
          </label>
          <SearchBox/>
          <ClearButton/>
        </div>

        <div className="col d-flex justify-content-between align-items-center">
          <div id="filter-tag-div">
            <FilterTag />
          </div>

          <button
            className="border border-none fw-bold text-light cyan-shade  text-nowrap ms-auto px-2 py-1"
            data-bs-toggle="modal"
            data-bs-target="#modal-add-employee"
            onClick={handleClickAddEmployee}
          >
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
}
