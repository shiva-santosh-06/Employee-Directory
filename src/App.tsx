import "./App.css";
import EmployeeCardsList from "./components/EmployeeCardsList";
import FiltersLeftBlockMobile from "./components/FiltersLeftBlockMobile";
import FiltersLeftBlock from "./components/FiltersLeftBlock";
import Header from "./components/Header";
import ModalEmployeeDetails from "./components/ModalEmployeeDetails";
import ModalForm from "./components/ModalForm";
import SearchFilterBlock from "./components/SearchFilterBlock";

function App() {
  return (
    <div className="App mx-3 row">
      <ModalForm />
      <ModalEmployeeDetails />
      <Header />
      <FiltersLeftBlockMobile />
      <div className="mt-md-4 mt-1 mx-auto row">
        <div className="col-2" id="filters-left-block">
          <FiltersLeftBlock />
        </div>
        <div className="col ">
          <SearchFilterBlock />
          <EmployeeCardsList />
        </div>
      </div>
    </div>
  );
}

export default App;
