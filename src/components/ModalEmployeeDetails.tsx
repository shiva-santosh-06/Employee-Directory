import { useContext } from "react";
import { EmployeeListContext } from "../contexts/EmployeeListContext";

export default function ModalEmployeeDetails() {
  const { empArr, setEmpArr, clickedCard, setClickedCard } =
    useContext(EmployeeListContext);

  const handleDelete = () => {
    setEmpArr(empArr.filter((emp) => emp !== clickedCard));
    setClickedCard(null);
  };

  return (
    <div className="modal fade" id="modal-emp-details" >
      <div className="modal-dialog modal-dialog-scrollable ">
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-end">
              <button className="btn-close"  data-bs-dismiss="modal"></button>
            </div>
            <img className="mb-3" src={clickedCard?.image} alt="" style={{ width: 100 }} />
            <h3 className="fw-normal">{clickedCard?.preferred_name}</h3>
            <p className="m-0 text-muted">{clickedCard?.job_title}</p>
            <p className="m-0 text-muted">{clickedCard?.department}</p>
            <p className="m-0 text-muted">{clickedCard?.office}</p>

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h3 className="fw-normal mt-2 mb-0">mobile</h3>
                <p className="fw-bold cyan-shade-text">
                  {clickedCard?.phone_number}
                </p>
              </div>
              <h3>
                <i className="fa-solid fa-phone" style={{color:"rgb(81,201,61)"}}></i>
              </h3>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h3 className="fw-normal mt-2 mb-0">skype name</h3>
                <p className="fw-bold cyan-shade-text">
                  {clickedCard?.skype_id}
                </p>
              </div>
              <h2>
                <i className="fa-brands fa-skype cyan-shade-text"></i>
              </h2>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h3 className="fw-normal mt-2 mb-0">email</h3>
                <p className="fw-bold cyan-shade-text">{clickedCard?.email}</p>
              </div>
              <h3>
                <i className="fa-solid fa-envelope text-warning"></i>
              </h3>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-around">
            {/* delete button */}
            <button className="btn" onClick={handleDelete} data-bs-dismiss="modal">
              <h3>
                <i className="fa-solid fa-trash-can cyan-shade-text"></i>
              </h3>
            </button>
            {/* edit button */}
            <button
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#modal-add-employee"
            >
              <h3>
                <i className="fa-solid fa-pen text-muted"></i>
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
