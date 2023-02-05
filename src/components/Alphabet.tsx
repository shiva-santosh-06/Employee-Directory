import React, { useContext } from "react";
import { EmployeeListContext } from "../contexts/EmployeeListContext";
import {v4 as uuidv4} from "uuid";

export default function Alphabet() {
  const { empArr, setFilteredArr } = useContext(EmployeeListContext);
  const lettersArr: string[] = [];
  for (let i = 65; i <= 90; i++) {
    lettersArr.push(String.fromCharCode(i));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    if (value == "all") {
      setFilteredArr(empArr);
    } else {
      const filteredArr = empArr.filter((emp) => {
        return (
          emp.first_name.toLowerCase().startsWith(value) ||
          emp.last_name.toLowerCase().startsWith(value)
        );
      });
      setFilteredArr(filteredArr);
    }
  };
  return (
    <div className="row" id="alphabet-div">
      <input
        type="radio"
        name="alphabet"
        className="radio-input d-none"
        id="all"
        value="all"
        onChange={handleChange}
        defaultChecked
      />
      <label
        htmlFor="all"
        className="radio-label col cyan-shade text-light my-1 me-1 p-1 text-center"
      >
        <i className="fa-solid fa-user"></i>
      </label>
      {lettersArr.map((letter) => (
        <>
          <input
            type="radio"
            name="alphabet"
            className="radio-input d-none"
            id={letter}
            value={letter}
            onChange={handleChange}
          />

          <label
            htmlFor={letter}
            className="radio-label col cyan-shade text-light my-1 me-1 p-1 text-center "
          >
            {letter}
          </label>
        </>
      ))}
    </div>
  );
}
