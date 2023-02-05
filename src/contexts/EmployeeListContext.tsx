import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { defaultEmployees } from "../assets/defaultEmployees";

export interface Employee {
  first_name: string;
  last_name: string;
  preferred_name: string;
  email: string;
  job_title: string;
  office: string;
  department: string;
  phone_number: string;
  skype_id: string;
  image: string;
}

type EmployeeListContextType = {
  empArr: Employee[];
  setEmpArr: React.Dispatch<React.SetStateAction<Employee[]>>;
  filteredArr: Employee[];
  setFilteredArr: React.Dispatch<React.SetStateAction<Employee[]>>;
  clickedCard: Employee | null;
  setClickedCard: React.Dispatch<React.SetStateAction<Employee | null>>;
  hamToggle: boolean;
  setHamToggle: React.Dispatch<React.SetStateAction<boolean>>;
  filterBarsToggle: boolean;
  setFilterBarsToggle: React.Dispatch<React.SetStateAction<boolean>>;
  departmentState: Map<string, Employee[]>;
  setDepartmentState: React.Dispatch<
    React.SetStateAction<Map<string, Employee[]>>
  >;
  jobTitleState: Map<string, Employee[]>;
  setJobTitleState: React.Dispatch<
    React.SetStateAction<Map<string, Employee[]>>
  >;
  officeState: Map<string, Employee[]>;
  setOfficeState: React.Dispatch<React.SetStateAction<Map<string, Employee[]>>>;
  filterValue: keyof Employee;
  setFilterValue: React.Dispatch<React.SetStateAction<keyof Employee>>;
  selectedLeftFilter: string;
  setSelectedLeftFilter: React.Dispatch<React.SetStateAction<string>>;
};

type EmployeeListContextProviderProps = {
  children: ReactNode;
};


export const EmployeeListContext = createContext<EmployeeListContextType>(
  {} as EmployeeListContextType
);

export const EmployeeListContextProvider = ({
  children,
}: EmployeeListContextProviderProps) => {
  let initialEmpArr: Employee[] = defaultEmployees;
  let localStorageStr: string | null = localStorage.getItem("empArrLocal");
  if (localStorageStr) {
    initialEmpArr = JSON.parse(localStorageStr);
  }
  const [empArr, setEmpArr] = useState<Employee[]>(initialEmpArr);


  const [departmentState, setDepartmentState] = useState<
    Map<string, Employee[]>
  >(new Map<string, Employee[]>());
  const [jobTitleState, setJobTitleState] = useState<Map<string, Employee[]>>(
    new Map<string, Employee[]>()
  );
  const [officeState, setOfficeState] = useState<Map<string, Employee[]>>(
    new Map<string, Employee[]>()
  );
  

  const [filteredArr, setFilteredArr] = useState<Employee[]>(empArr);
  const [clickedCard, setClickedCard] = useState<Employee | null>(null);
  const [hamToggle, setHamToggle] = useState<boolean>(false);
  const [filterBarsToggle, setFilterBarsToggle] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<keyof Employee>("preferred_name");
  const [selectedLeftFilter, setSelectedLeftFilter] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("empArrLocal", JSON.stringify(empArr));

    //updating left side block states
    const departmentMap = new Map<string, Employee[]>();
    const jobTitleMap = new Map<string, Employee[]>();
    const officeMap = new Map<string, Employee[]>();
    for (let emp of empArr) {
      if (!departmentMap.has(emp.department)) {
        departmentMap.set(emp.department, [emp]);
      } else {
        departmentMap.get(emp.department)?.push(emp);
      }

      if (!jobTitleMap.has(emp.job_title)) {
        jobTitleMap.set(emp.job_title, [emp]);
      } else {
        jobTitleMap.get(emp.job_title)?.push(emp);
      }

      if (!officeMap.has(emp.office)) {
        officeMap.set(emp.office, [emp]);
      } else {
        officeMap.get(emp.office)?.push(emp);
      }
    }

    setDepartmentState(departmentMap);
    setJobTitleState(jobTitleMap);
    setOfficeState(officeMap);

    //setting filtered array
    setFilteredArr(empArr);
  }, [empArr]);

  return (
    <EmployeeListContext.Provider
      value={{
        empArr,
        setEmpArr,
        filteredArr,
        setFilteredArr,
        clickedCard,
        setClickedCard,
        hamToggle,
        setHamToggle,
        filterBarsToggle,
        setFilterBarsToggle,
        departmentState,
        setDepartmentState,
        jobTitleState,
        setJobTitleState,
        officeState,
        setOfficeState,
        filterValue,
        setFilterValue,
        selectedLeftFilter,
        setSelectedLeftFilter
      }}
    >
      {children}
    </EmployeeListContext.Provider>
  );
};
