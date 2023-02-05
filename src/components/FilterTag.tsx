import { ChangeEvent, useContext } from "react";
import { EmployeeListContext, Employee } from "../contexts/EmployeeListContext";

export default function FilterTag() {
  const {filterValue, setFilterValue} = useContext(EmployeeListContext);
  const handleFilterValueChange = (e: ChangeEvent<HTMLSelectElement>)=>{
    const value = e.target.value as keyof Employee
    setFilterValue(value);
  }
  return (
    <div className="text-nowrap">
      <label htmlFor="filter" className="m-1">
        Filter by
      </label>
      <select name="" id="filter" className="p-1" onChange={handleFilterValueChange}>
        <option value="preferred_name" selected={filterValue==="preferred_name"}>Preferred name</option>
        <option value="first_name">First name</option>
        <option value="last_name">Last name</option>
        <option value="email">Email</option>
        <option value="job_title">Job Title</option>
        <option value="office">Office</option>
        <option value="department">Department</option>
        <option value="phone_number">Phone No.</option>
        <option value="skype_id">Skype ID</option>
      </select>
    </div>
  );
}
