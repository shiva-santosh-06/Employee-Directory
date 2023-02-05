import { useContext} from 'react';
import { EmployeeListContext, Employee } from "../contexts/EmployeeListContext";

type EmployeeCardPropsType = {
  emp: Employee;
};
export default function EmployeeCard({ emp }: EmployeeCardPropsType) {
  const {setClickedCard} = useContext(EmployeeListContext);
  const handleClick = () => {
    setClickedCard(emp);
  }
  return (
    <div
      className="card employee-card rounded-0 border-0 m-1"
      onClick={handleClick}
      data-bs-toggle='modal'
      data-bs-target='#modal-emp-details'
    >
      <div className="card-body d-flex align-items-center p-2">
        <div className="me-3">
          <img src={emp.image} alt="img"  />
        </div>
        <div>
          <h6 className="card-name mb-0">{emp.preferred_name}</h6>
          <p className="card-details m-0">{emp.job_title}</p>
          <p className="card-details m-0">{emp.department}</p>
          <i className="card-details me-1 fa-solid fa-square-phone text-muted"/>
          <i className="card-details me-1 fa-solid fa-envelope text-muted"/>
          <i className="card-details me-1 fa-solid fa-comment text-muted"/>
          <i className="card-details me-1 fa-solid fa-star text-muted"/>
          <i className="card-details me-1 fa-solid fa-heart text-muted"/>
        </div>
        <i className="fa-solid fa-ellipsis-vertical d-none align-self-start ms-auto card-ellipsis"></i>
      </div>
    </div>
  );
}
