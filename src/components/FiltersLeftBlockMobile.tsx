import { useContext } from "react";
import { EmployeeListContext } from "../contexts/EmployeeListContext";
import FiltersLeftBlock from "./FiltersLeftBlock";
import emp from "../assets/images/emp.png";
import saketaLogo from "../assets/images/saketaLogo.png";

export default function FiltersLeftBlockMobile() {
  const { hamToggle, setHamToggle } = useContext(EmployeeListContext);
  const handleToggle = () => {
    setHamToggle(!hamToggle);
  };
  return (
    <div
      className={hamToggle ? "side-nav active" : "side-nav"}
      id="filters-left-block-mobile"
      onClick={handleToggle}
    >
      <div className="side-nav-content d-flex flex-column p-3">
        <div className="d-flex align-items-end mb-4">
          <div className="d-flex align-content-end flex-wrap" style={{width:250}}>
            <h3 className="cyan-shade-text fw-normal">Welcome,&nbsp;</h3>
            <h3 className="text-muted fw-normal">Andrew Philips</h3>
          </div>
          <img  src={emp} alt="" style={{width:70}} />
        </div>
        <FiltersLeftBlock />
        <div className="text-center mt-auto">
          <img src={saketaLogo} alt="" style={{width: 150}} />
          <p className="fw-normal m-0 cyan-shade-text">Employee Directory</p>
        </div>
      </div>
    </div>
  );
}
