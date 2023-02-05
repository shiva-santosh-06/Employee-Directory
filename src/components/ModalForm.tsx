import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { EmployeeListContext, Employee } from "../contexts/EmployeeListContext";
import emp from "../assets/images/emp.png";

export default function ModalForm() {
  const { empArr, setEmpArr, clickedCard, setClickedCard } =
    useContext(EmployeeListContext);
  const modalRef = useRef<HTMLDivElement>(null);
  const [imageURL, setImageURL] = useState<string>(emp);
  const [isImageAdded, setIsImageAdded] = useState<boolean>(false);
  useEffect(() => {
    setIsImageAdded(clickedCard !== null);
    if (clickedCard !== null) {
      setImageURL(clickedCard.image);
    }
  }, [clickedCard]);
  modalRef.current?.addEventListener("hidden.bs.modal", () => {
    setImageURL(emp);
    setClickedCard(null);
    setIsImageAdded(false);
    const form = modalRef.current?.querySelector("form");
    form?.reset();
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files!;
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      setImageURL(reader.result as string);
      setIsImageAdded(true);
    };
  };

  const handleImageClick = () => {
    setIsImageAdded(false);
    setImageURL(emp);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const inputs = form.querySelectorAll(".form-input");
    const newEmp: Employee = {
      first_name: (inputs[1] as HTMLInputElement).value,
      last_name: (inputs[2] as HTMLInputElement).value,
      preferred_name: (inputs[3] as HTMLInputElement).value,
      email: (inputs[4] as HTMLInputElement).value,
      job_title: (inputs[5] as HTMLSelectElement).value,
      office: (inputs[6] as HTMLSelectElement).value,
      department: (inputs[7] as HTMLSelectElement).value,
      phone_number: (inputs[8] as HTMLInputElement).value,
      skype_id: (inputs[9] as HTMLInputElement).value,
      image: imageURL,
    };

    if (clickedCard) {
      clickedCard.first_name = newEmp.first_name;
      clickedCard.last_name = newEmp.last_name;
      clickedCard.preferred_name = newEmp.preferred_name;
      clickedCard.email = newEmp.email;
      clickedCard.job_title = newEmp.job_title;
      clickedCard.office = newEmp.office;
      clickedCard.department = newEmp.department;
      clickedCard.phone_number = newEmp.phone_number;
      clickedCard.skype_id = newEmp.skype_id;
      clickedCard.image = newEmp.image;

      setEmpArr([...empArr]);
    } else {
      setEmpArr([...empArr, newEmp]);
    }
    form.reset();
    setClickedCard(null);
  };

  return (
    <div className="modal fade" id="modal-add-employee" ref={modalRef}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            {clickedCard === null ? (
              <h3>Add Employee</h3>
            ) : (
              <h3>Edit Employee</h3>
            )}

            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <form id="employee-form" onSubmit={handleSubmit}>
              <div className="col-3">
                {isImageAdded ? (
                  <img
                    src={imageURL}
                    alt=""
                    className="img-fluid"
                    id="emp-img-prev"
                    onClick={handleImageClick}
                    style={{ margin: "0.4em" }}
                  />
                ) : (
                  <label htmlFor="emp-img-input">
                    {/* <i className="fa-solid fa-user-pen"></i> */}
                    <div id="employee-image-container">add photo</div>
                  </label>
                )}

                <input
                  type="file"
                  accept="image/*"
                  id="emp-img-input"
                  className="d-none form-input"
                  onChange={handleImageChange}
                />
              </div>

              <div id="name">
                <label className="d-inline m-2" htmlFor="first-name">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-input d-block border border-dark m-2"
                  id="first-name"
                  placeholder="Enter your first name"
                  defaultValue={clickedCard?.first_name}
                  style={{ width: "85%" }}
                  required
                />

                <label className="d-inline m-2" htmlFor="last-name">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-input d-block border border-dark m-2"
                  id="last-name"
                  placeholder="Enter your last name"
                  defaultValue={clickedCard?.last_name}
                  style={{ width: "85%" }}
                  required
                />
              </div>

              <label className="d-inline m-2" htmlFor="preferred-name">
                Preferred Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-input d-block border border-dark m-2"
                id="preferred-name"
                placeholder="Enter your preferred name"
                defaultValue={clickedCard?.preferred_name}
                style={{ width: "85%" }}
                required
              />

              <label className="d-inline m-2" htmlFor="email">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-input d-block border border-dark m-2"
                id="email"
                placeholder="Enter your email"
                defaultValue={clickedCard?.email}
                style={{ width: "85%" }}
                required
              />

              <label htmlFor="job-title" className="d-inline m-2">
                Job Title <span className="text-danger">*</span>
              </label>
              <select
                id="job-title"
                className="form-input d-block border border-dark m-2"
                style={{ width: "85%" }}
                required
              >
                <option
                  value="SharePoint Practice Head"
                  selected={
                    clickedCard?.job_title == "SharePoint Practice Head"
                  }
                >
                  SharePoint Practice Head
                </option>
                <option
                  value="Operations Manager"
                  selected={clickedCard?.job_title == "Operations Manager"}
                >
                  Operations Manager
                </option>
                <option
                  value="Product Manager"
                  selected={clickedCard?.job_title == "Product Manager"}
                >
                  Product Manager
                </option>
                <option
                  value="Lead Engineer - Dot Net"
                  selected={clickedCard?.job_title == "Lead Engineer - Dot Net"}
                >
                  Lead Engineer - Dot Net
                </option>
                <option
                  value="Network Engineer"
                  selected={clickedCard?.job_title == "Network Engineer"}
                >
                  Network Engineer
                </option>
                <option
                  value="Talent Manager Jr."
                  selected={clickedCard?.job_title == "Talent Manager Jr."}
                >
                  Talent Manager Jr.
                </option>
                <option
                  value="Software Engineer"
                  selected={clickedCard?.job_title == "Software Engineer"}
                >
                  Software Engineer
                </option>
                <option
                  value="UI Designer"
                  selected={clickedCard?.job_title == "UI Designer"}
                >
                  UI Designer
                </option>
              </select>

              <label htmlFor="office" className="d-inline m-2">
                Office <span className="text-danger">*</span>
              </label>
              <select
                id="office"
                className="form-input d-block border border-dark m-2"
                style={{ width: "85%" }}
                required
              >
                <option
                  value="Hyderabad"
                  selected={clickedCard?.office == "Hyderabad"}
                >
                  Hyderabad
                </option>
                <option
                  value="Seattle"
                  selected={clickedCard?.office == "Seattle"}
                >
                  Seattle
                </option>
                <option
                  value="Singapore"
                  selected={clickedCard?.office == "Singapore"}
                >
                  Singapore
                </option>
                <option
                  value="Sydney"
                  selected={clickedCard?.office == "Sydney"}
                >
                  Sydney
                </option>
              </select>

              <label htmlFor="department" className="d-inline m-2">
                Department <span className="text-danger">*</span>
              </label>
              <select
                id="department"
                className="form-input d-block border border-dark m-2"
                style={{ width: "85%" }}
                required
              >
                <option
                  value="IT Department"
                  selected={clickedCard?.department == "IT Department"}
                >
                  IT Department
                </option>
                <option
                  value="UX Department"
                  selected={clickedCard?.department == "UX Department"}
                >
                  UX Department
                </option>
                <option
                  value="HR Department"
                  selected={clickedCard?.department == "HR Department"}
                >
                  HR Department
                </option>
              </select>

              <label className="d-inline m-2" htmlFor="phone-number">
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                className="form-input d-block border border-dark m-2"
                id="phone-number"
                placeholder="Enter your phone number"
                defaultValue={clickedCard?.phone_number}
                style={{ width: "85%" }}
                required
              />

              <label className="d-inline m-2" htmlFor="skype-id">
                Skype ID <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-input d-block border border-dark m-2"
                id="skype-id"
                placeholder="Enter your skype id"
                defaultValue={clickedCard?.skype_id}
                style={{ width: "85%" }}
                required
              />

              <div className="d-flex justify-content-around mt-3">
                <button className="btn" type="button" data-bs-dismiss="modal">
                  <h3 className="fa-solid fa-xmark text-danger"></h3>
                </button>
                <button className="btn" type="submit">
                  <h3 className="fa-solid fa-check text-success"></h3>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
