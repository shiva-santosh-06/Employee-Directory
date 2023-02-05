import { MouseEventHandler, useContext } from "react";
import { EmployeeListContext } from "../contexts/EmployeeListContext";
import { v4 as uuidv4 } from "uuid";

export default function FiltersLeftBlock() {
  const { departmentState, jobTitleState, officeState, setFilteredArr, selectedLeftFilter, setSelectedLeftFilter } =
    useContext(EmployeeListContext);

  const depKeys: string[] = [];
  for (let [key, value] of departmentState) {
    depKeys.push(key);
  }

  const jobTitleKeys: string[] = [];
  for (let [key, value] of jobTitleState) {
    jobTitleKeys.push(key);
  }

  const officeKeys: string[] = [];
  for (let [key, value] of officeState) {
    officeKeys.push(key);
  }

  const handleClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    mapName: "deparment" | "office" | "jobTitle",
    key: string
  ) => {
    if (mapName == "deparment") {
      setFilteredArr(departmentState.get(key)!);
    } else if (mapName == "office") {
      setFilteredArr(officeState.get(key)!);
    } else {
      setFilteredArr(jobTitleState.get(key)!);
    }
    
    setSelectedLeftFilter(key);
    
  };

  return (
    <div  id="filters-left-block-component">
      <h6>Departments</h6>
      <ul className="list-unstyled mb-4" id="departments-list">
        {depKeys.map((key) => (
          <li
            className={(selectedLeftFilter==key)?"cyan-shade-text":""}
            key={uuidv4()}
            onClick={(e) => handleClick(e, "deparment", key)}
          >
            {key} ({departmentState.get(key)?.length})
          </li>
        ))}
      </ul>

      <h6>Offices</h6>
      <ul className="list-unstyled mb-4" id="offices-list">
        {officeKeys.map((key) => (
          <li
            className={(selectedLeftFilter==key)?"cyan-shade-text":""}
            key={uuidv4()}
            onClick={(e) => handleClick(e, "office", key)}
          >
            {key} ({officeState.get(key)?.length})
          </li>
        ))}
      </ul>
      <h6>Job Titles</h6>
      <ul className="list-unstyled mb-4" id="job-titles-list">
        {jobTitleKeys.map((key) => (
          <li
            className={(selectedLeftFilter==key)?"cyan-shade-text":""}
            key={uuidv4()}
            onClick={(e) => handleClick(e, "jobTitle", key)}
          >
            {key} ({jobTitleState.get(key)?.length})
          </li>
        ))}
      </ul>
    </div>
  );
}
