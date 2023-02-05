import { useContext } from "react";
import { EmployeeListContext } from "../contexts/EmployeeListContext";

export default function ClearButton() {
  const {empArr, setFilteredArr, setSelectedLeftFilter, setFilterValue} = useContext(EmployeeListContext);

  const handleClick = ()=>{
    setFilteredArr(empArr);
    setSelectedLeftFilter("");
    setFilterValue("preferred_name");
    (document.getElementById("all") as HTMLInputElement).checked = true;
  }

  return (
    <button id="clear" className="text-light p-1 px-2 m-1" onClick={handleClick}>
      Clear
    </button>
  );
}
