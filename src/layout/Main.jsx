import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const Main = () => {
  return (
    <div className="bg-white">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
