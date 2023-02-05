import { ChangeEvent, useContext } from "react";
import { EmployeeListContext } from "../contexts/EmployeeListContext";

export default function SearchBox() {
  const { empArr, setFilteredArr, filterValue } = useContext(EmployeeListContext);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    const searchArr = empArr.filter((emp) => {
      return emp[filterValue].toLowerCase().includes(searchText);
    });
    setFilteredArr(searchArr);
  };
  return (
    <div className="border border-2 text-nowrap p-1">
      <i className="fa fa-search text-muted"></i>
      <input
        type="search"
        id="search"
        placeholder="Enter any keyword"
        onChange={handleSearchChange}
      />
    </div>
  );
}
