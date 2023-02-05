import { useContext, useRef, useState } from "react";
import { EmployeeListContext } from "../contexts/EmployeeListContext";
import EmployeeCard from "./EmployeeCard";
import { v4 as uuidv4 } from "uuid";

export default function EmployeeCardsList() {
  const { filteredArr } = useContext(EmployeeListContext);
  const empCardsListRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="pe-2" id="employee-cards-div" ref={empCardsListRef} >
      {filteredArr.map((emp) => (
        <EmployeeCard key={uuidv4()} emp={emp} />
      ))}
    </div>
  );
}
