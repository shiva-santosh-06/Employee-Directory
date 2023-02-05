import { useContext } from "react";
import saketaLogo from "../assets/images/saketaLogo.png";
import ClearButton from "./ClearButton";
import { EmployeeListContext } from "../contexts/EmployeeListContext";
import FilterTag from "./FilterTag";
import SearchBox from "./SearchBox";

export default function Header() {
  const { hamToggle, setHamToggle, filterBarsToggle, setFilterBarsToggle } =
    useContext(EmployeeListContext);
  const handleHamToggle = () => {
    setHamToggle(!hamToggle);
  };
  const handleFilterBarsToggle = () => {
    setFilterBarsToggle(!filterBarsToggle);
  };
  return (
    <header className="d-flex align-items-center justify-content-between border-bottom border-2 py-2">
      <button className="btn" id="hamToggle" onClick={handleHamToggle}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="d-flex align-items-center" id="header-div-logo">
        <div id="logo" className="m-2 w-25">
          <img src={saketaLogo} alt="" className="img-fluid" />
        </div>
        <div className="m-1">
          <h3 className="fw-normal m-0 cyan-shade-text">Employee Directory</h3>
          <p className="text-muted fw-normal m-0">
            The ultimate people directory experience
          </p>
        </div>
      </div>
      <div className="d-flex align-content-end flex-wrap" id="header-div-name">
        <h4 className="cyan-shade-text fw-normal">Welcome,&nbsp;</h4>
        <h4 className="text-muted fw-normal">Andrew Philips</h4>
      </div>
      <div id="header-div-search">
        <SearchBox />
      </div>
      <button
        className="btn"
        id="filter-tag-toggle"
        onClick={handleFilterBarsToggle}
      >
        {filterBarsToggle ? (
          <i className="fa-solid fa-x m-1"></i>
        ) : (
          
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-filter"
            viewBox="0 0 16 16"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
          
        )}
      </button>

      <div
        className={
          (filterBarsToggle
            ? "filter-tag-content active"
            : "filter-tag-content") + " text-center"
        }
      >
        <FilterTag />
        <ClearButton/>
      </div>
    </header>
  );
}
